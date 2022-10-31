import { Router } from "express";
import {
  getAll,
  getById,
  add,
  updateStatus,
  deleteById,
} from "./controllers/adoption.controller.js";

const router = Router();
router.route("/").get(getAll).post(add);
router.route("/:id").get(getById).delete(deleteById);
router.route("/:id/status").patch(updateStatus);

export default router;
