import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Protected route example it will first check for token and then allow access to the route
router.get("/protected",protect, (req,res) => {
    res.status(200).json({message: "You have accessed a protected route"});
});

export default router;