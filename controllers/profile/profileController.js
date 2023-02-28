import User from "../../models/user/User";
import cloudinary from '../../utils/cloudinary'

const profileController = async (req, res, next) => {
  const currentProduct = await User.findById(req.userObjectID);
  var data = {
    name: req.body.name,
    bio: req.body.bio,
    theme: req.body.theme,
  }
  //modify image conditionnally
  if (req.body.avatar !== '') {
    const ImgId = currentProduct.avatar.public_id;
    if (ImgId) {
      await cloudinary.uploader.destroy(ImgId);
    }

    const newImage = await cloudinary.uploader.upload(req.body.avatar, {
      folder: "avatars",
      crop: "scale"
    });

    data.avatar = {
      public_id: newImage.public_id,
      url: newImage.secure_url
    }
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