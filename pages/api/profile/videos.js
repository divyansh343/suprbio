import nc from "next-connect";
import mongoConnect from '../../../utils/mongodb'
import authentication from '../../../middlewares/authentication'
import { videosController } from "../../../controllers/profile/videosController";
const handler = nc();
mongoConnect()

handler.use(authentication).put(videosController)

export default handler;