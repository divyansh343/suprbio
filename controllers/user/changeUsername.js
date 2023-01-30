import User from "../../models/user/User";

const changeUsername = async (req, res) => {
  const influ = {
    username: req.body.username
  };
  User.updateOne({
    _id: req.userObjectID
  }, influ).then(
    (response) => {
      res.status(201).json({
        status: 200,
        sucess: true,
        message: `name updated sucessfully to ${req.body.username}`,
        response: response
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
  changeUsername
}