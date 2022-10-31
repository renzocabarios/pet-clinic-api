import { Router } from "express";
import {
  getAll,
  add,
  changePosition,
} from "./controllers/user/personnel.controller.js";

const router = Router();
router.route("/").get(getAll).post(add);
router.route("/:id").patch(changePosition);

export default router;
