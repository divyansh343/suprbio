import nc from "next-connect";
import mongoConnect from '../../../utils/mongodb'
import authentication from '../../../middlewares/authentication'
import { galleryController, getGalleryController } from "../../../controllers/profile/galleryController";
const handler = nc();
mongoConnect()

handler.get(getGalleryController)
handler.use(authentication).put(galleryController)

export default handler;