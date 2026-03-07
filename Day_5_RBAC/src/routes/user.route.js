import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";
import { getAllUsers, deleteUser } from "../controllers/user.controller.js";

const router = express.Router();

// Admin Only
router.get(
  "/users",
  protect,
  authorizeRoles("admin"),
  getAllUsers
);

// Admin Only
router.delete(
  "/users/:id",
  protect,
  authorizeRoles("admin"),
  deleteUser
);

export default router;