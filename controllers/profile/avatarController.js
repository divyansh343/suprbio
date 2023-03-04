import User from "../../models/user/User";
import cloudinary from '../../utils/cloudinary'

const avatarControlller = async (req, res, next) => {

  const currentProduct = await User.findById(req.userObjectID);
  
  //modify image conditionnally
  const data = {};
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
  avatarControlller
}