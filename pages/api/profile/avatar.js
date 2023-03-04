import nc from "next-connect";
import mongoConnect from '../../../utils/mongodb'
import authentication from '../../../middlewares/authentication'
import { avatarControlller } from "../../../controllers/profile/avatarController";
const handler = nc();
mongoConnect()

handler.use(authentication).put(avatarControlller)

export default handler;