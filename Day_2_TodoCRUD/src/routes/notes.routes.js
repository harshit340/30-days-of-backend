import { createNote, deleteNote, getAllNotes, updateNote,getNoteById } from "../controllers/notes.controller.js";
import express from "express";

const router = express.Router();
router.get("/",getAllNotes);
router.post("/",createNote);
router.get("/:id",getNoteById);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);
export default router;