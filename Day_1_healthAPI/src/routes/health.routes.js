import express from "express";
import { healthCheck,timeCheck } from "../controllers/health.controller.js";
const router = express.Router();

router.get("/health",healthCheck);
router.get("/time",timeCheck);

export default router;