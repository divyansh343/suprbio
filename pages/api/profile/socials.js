import nc from "next-connect";
import mongoConnect from '../../../utils/mongodb'
import authentication from '../../../middlewares/authentication'
import { socialController } from "../../../controllers/profile/socialController";
const handler = nc();
mongoConnect()

handler.use(authentication).put(socialController)

export default handler;