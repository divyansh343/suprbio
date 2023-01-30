import User from "../../models/user/User";

const setSocialController = async (req, res) => {
  User.findOne({
    username: req.body.username
  }).then(
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
  setSocialController
}