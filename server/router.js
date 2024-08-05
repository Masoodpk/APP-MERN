import { Router } from "express";
import * as cntrl from "./controller.js"
const router = Router();


router.route("/todos").get(rh.getTodos)

router.route("/todos").post(rh.createTodos)

router.route("/todos/:id").put(rh.updateTodos)


router.route("/todos/:id").delete(rh.deleteTodos)



export default router;