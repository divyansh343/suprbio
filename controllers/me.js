import User from "../models/user/User";

const meController = async (req, res) => {
  User.findOne({_id: req.userObjectID}).then(
    (response) => {
      res.status(200).json(response);
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
  meController
}