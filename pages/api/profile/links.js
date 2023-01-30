import nc from "next-connect";
import mongoConnect from '../../../utils/mongodb'
import authentication from '../../../middlewares/authentication'
import { profileController } from "../../../controllers/profile/profileController";
const handler = nc();
mongoConnect()

handler.use(authentication).put(profileController)

export default handler;