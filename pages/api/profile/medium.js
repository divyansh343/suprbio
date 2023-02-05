import nc from "next-connect";
import mongoConnect from '../../../utils/mongodb'
import { mediumController } from "../../../controllers/profile/mediumController";
const handler = nc();
mongoConnect()

handler.get(mediumController)

export default handler;