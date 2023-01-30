import User from "../../models/user/User";

export const deleteUser = (req, res) => {
  User.deleteOne({_id: req.userObjectID}).then(
    (response) => {
      res.status(200).json({
        status: 200,
        sucess: true,
        message: `user deleted sucessfully`,
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