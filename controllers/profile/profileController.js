import User from "../../models/user/User";
import cloudinary from '../../utils/cloudinary'

const profileController = async (req, res, next) => {
  const result = await cloudinary.uploader.upload(req.body.avatar, {
    folder: "avatars",
  })
  var data = {
    name : req.body.name,
    bio : req.body.bio,
    theme : req.body.theme,
    avatar: {
      public_id: result.public_id,
      url: result.secure_url
    },
  }
  User.updateOne({
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