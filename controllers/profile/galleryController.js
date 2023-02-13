import User from "../../models/user/User";

const galleryController = (req, res) => {
  User.updateOne({
    _id: req.userObjectID
  }, req.body).then(
    (response) => {
      res.status(201).json({
        status: 200,
        sucess: true,
        response: response,
        message: `gallery updated sucessfully`,
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



const getGalleryController = (req, res) => {
  User.findOne({
    username: req.query.username
  }).then(

    (response) => {
      res.status(200).json({
        status: 200,
        gallery_text: response.gallery_text,
        gallery: response.gallery,
        email: response.email,
        avatar: response.avatar,
        username: response.username,
        theme: response.theme,
      });
    }
  ).catch(
    (error) => {
      res.status(404).json({
        status: 404,
        sucess: false,
        error: error
      });
    }
  );
}

export {
  galleryController,
  getGalleryController
}