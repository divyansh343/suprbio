const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
  default: User
} = require('../../models/user/User');

const loginController =  (req, res, next) => {
  User.findOne({
    email: req.body.email
  }).then(
    (user) => {
      if (!user) {
        return res.status(401).json({
          error: 'User not exist with this credentials!'
          // error: new Error('User not exist with this credentials!')
        });
      }
      bcrypt.compare(req.body.password, user.password).then(
        (valid) => {
          if (!valid) {
            return res.status(401).json({
              error: 'Incorrect password!'
              // error: new Error('Incorrectpassword !')
            });
          }
          const token = jwt.sign({
            userId: user._id
          }, process.env.SECRET_KEY_JWT, {
            expiresIn: '24h'
          })
          res.status(200).json({
            token: token,
            status: 200,
            sucess: true,
            user: {
              name: user.name,
              email: user.email,
            }
          });
        }
      ).catch(
        (error) => {
          res.status(500).json({
            error: error
          });
        }
      );
    }
  )
}

export {loginController}