import nc from "next-connect";
import mongoConnect from "../../utils/mongodb";
import {getUserController, meController} from '../../controllers/me'
import authentication from "../../middlewares/authentication";
const handler = nc();
mongoConnect();

handler.use(authentication).get(meController)

export default handler;