import User from "../../models/user/User"
const jwt = require('jsonwebtoken');
import bcrypt from 'bcrypt'

const registerController = async (req, res, next) => {
  await bcrypt
    .hash(req.body.password, 10).then(
      (hash) => {
        const user = new User({
          username: req.body.username,
          email: req.body.email,
          password: hash,
        });
        user.save().then(
          (user) => {
            let token = jwt.sign({
              userId: user._id
            }, process.env.SECRET_KEY_JWT, {
              expiresIn: '24h'
            })
            res.status(201).json({
              status: 201,
              token,
              message: 'User Created successfully!',
              sucess: true,
              // token: token,
              user: {
                username: user.username,
                email: user.email,
              }
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              sucess: false,
              statusCode: 500,
              message: error._message,
              error: {
                error: error.name,
                message: error._message,
                description: error.message
              }
            });
          },
        );
      }
    );
}

export {
  registerController
}