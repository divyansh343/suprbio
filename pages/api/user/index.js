import nc from "next-connect";
import { createUser } from "../../../controllers/user/createUserController";
import mongoConnect from '../../../utils/mongodb'

const handler = nc();
mongoConnect();

handler.post(createUser)

export default handler;