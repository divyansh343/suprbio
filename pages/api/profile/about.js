import nc from "next-connect";
import mongoConnect from '../../../utils/mongodb'
import authentication from '../../../middlewares/authentication'
import { aboutController } from "../../../controllers/profile/aboutController";
const handler = nc();
mongoConnect()

handler.use(authentication).put(aboutController)

export default handler;