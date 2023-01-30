import nc from "next-connect";
import { loginController } from "../../../controllers/user/loginController";
import { error } from "../../../middlewares/error";
import mongoConnect from '../../../utils/mongodb'
const handler = nc({error});
mongoConnect();

handler.post(loginController)

export default handler;