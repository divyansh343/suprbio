import nc from "next-connect";
import mongoConnect from "../../../utils/mongodb";
import authentication from "../../../middlewares/authentication";
import { changeUsername } from "../../../controllers/user/changeUsername";

const handler = nc();
mongoConnect;

handler.use(authentication).put(changeUsername)

export default handler;