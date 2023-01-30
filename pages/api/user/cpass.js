import nc from "next-connect";
import { passController } from "../../../controllers/user/changePass";
import mongoConnect from "../../../utils/mongodb";
import authentication from "../../../middlewares/authentication";

const handler = nc();
mongoConnect;

handler.use(authentication).put(passController)

export default handler;