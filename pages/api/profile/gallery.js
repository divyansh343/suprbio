import nc from "next-connect";
import mongoConnect from '../../../utils/mongodb'
import authentication from '../../../middlewares/authentication'
import { galleryController } from "../../../controllers/profile/galleryController";
const handler = nc();
mongoConnect()

handler.use(authentication).put(galleryController)

export default handler;