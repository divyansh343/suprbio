import User from "../models/user/User";

const bioController = async (req, res) => {
  User.findOne({username: req.query.username}).then(
    (response) => {
      
      res.status(200).json({
        status:200,
        username: response.username,
        name: response.name
      });
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
}
export {
  bioController
}