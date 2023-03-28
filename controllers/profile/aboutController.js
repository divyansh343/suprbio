import User from "../../models/user/User";

const aboutController = async (req, res, next) => {
  var data = {
    about: req.body.about
  }
  User.findOneAndUpdate({
    _id: req.userObjectID
  }, data).then(
    (response) => {
      res.status(201).json({
        status: 200,
        sucess: true,
        response: response,
        message: `profile updated sucessfully`,
        updated: req.body,
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        status: 400,
        sucess: false,
        error: error
      });
      console.log(error);
    }
  );
}
export {
  aboutController
}