import nc from "next-connect";
import mongoConnect from '../../../utils/mongodb'
import authentication from '../../../middlewares/authentication'
import { linksConroller } from "../../../controllers/profile/linksController";
const handler = nc();
mongoConnect()

handler.use(authentication).put(linksConroller)

export default handler;