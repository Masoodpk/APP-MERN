import { Router } from "express";
import * as cntrl from "./controller.js"
const router = Router();


router.route("/add").post(rh.addData)






export default router;