import User from "../models/user/User";

const bioController = async (req, res) => {
  User.findOne({
    username: req.query.username
  }).then(

    (response) => {
      res.status(200).json({
        status: 200,
        data: response
      });
      User.updateOne({
        username: req.query.username
      }, {
        $inc:{visitorCount:1}}, {new:true}).then(
        (response) => {
        }
      )
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