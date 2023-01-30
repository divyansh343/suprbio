import User from "../../models/user/User";
import bcrypt from 'bcrypt'

export const passController = async (req, res, next) => {


  await bcrypt.hash(req.body.password, 10).then(
      (hash) => {

          const data = {
              password: hash
          };

          User.updateOne({
              _id: req.userObjectID
          }, data).then(
              (response) => {
                  res.status(201).json({
                      status: 200,
                      sucess: true,
                      message: "password updated sucessfully",
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
                      }
                  });
              }
          );
      }
  );


}