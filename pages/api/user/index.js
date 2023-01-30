import nc from "next-connect";
import { deleteUser } from "../../../controllers/user/deleteUser";
import { registerController } from "../../../controllers/user/registerController";
import authentication from "../../../middlewares/authentication";
import { error } from "../../../middlewares/error";
import mongoConnect from '../../../utils/mongodb'
const handler = nc({error});
mongoConnect();

handler.post(registerController)
handler.use(authentication).delete(deleteUser)

export default handler;