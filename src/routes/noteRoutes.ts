import { Router } from "express";
import { getNotes, createNote, updateNote, deleteNote } from "../controllers/notesController";
import { protect } from "../middleware/authMiddleware";

const router = Router();

// Get all notes
router.get("/", protect, getNotes);

// Create a new note
router.post("/", protect, createNote);

// Update a note
router.put("/:id", protect, updateNote);

// Delete a note
router.delete("/:id", protect, deleteNote);

export default router;