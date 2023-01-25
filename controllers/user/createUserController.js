import User from "../../models/user/User"
import bcrypt from 'bcrypt'
const createUser = async (req, res) => {
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
            // const token = jwt.sign({
            //     user_id: user._id,
            //   },
            //   SECRET_KEY, {
            //     expiresIn: "24h",
            //   }
            // );
            res.status(201).json({
              status: 201,
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
          }
        );
      }
    );
}

export {
  createUser
}