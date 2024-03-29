import User from "../../models/user/User";
import cloudinary from '../../utils/cloudinary'

const profileController = async (req, res, next) => {
  const currentProduct = await User.findById(req.userObjectID);
  var data = {
    name: req.body.name,
    bio: req.body.bio,
    theme: req.body.theme,
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
  profileController
}