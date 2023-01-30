import nc from "next-connect";
import mongoConnect from "../../utils/mongodb";
import { bioController } from "../../controllers/bioController";
const handler = nc();
mongoConnect();

handler.get(bioController)

export default handler;