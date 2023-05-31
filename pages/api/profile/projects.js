import nc from "next-connect";
import mongoConnect from '../../../utils/mongodb'
import authentication from '../../../middlewares/authentication'
import { getGalleryController, projectsController } from "../../../controllers/profile/projectsController";
const handler = nc();
mongoConnect()

handler.get(getGalleryController)
handler.use(authentication).put(projectsController)

export default handler;