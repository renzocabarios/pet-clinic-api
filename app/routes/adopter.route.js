import { Router } from "express";
import { getAll, add } from "./controllers/user/adopter.controller.js";

const router = Router();
router.route("/").get(getAll).post(add);

export default router;
