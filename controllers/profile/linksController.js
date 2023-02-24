import User from "../../models/user/User";

const linksConroller = (req, res) => {
  User.updateOne({_id: req.userObjectID},req.body).then(
    (response) => {
      res.status(201).json({
        status: 200,
        sucess: true,
        response: response,
        message: `links updated sucessfully`,
        updated: req.body
        ,
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
  linksConroller
}