// src/controllers/notesController.ts
import { Request, Response, NextFunction } from "express";
import Note from "../models/Note";

// Get all notes for a user
export const getNotes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const notes = await Note.find({ user: req.user!.id });
    res.json(notes);
  } catch (error) {
    next(error); // send to global error handler
  }
};

// Create a new note
export const createNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, content } = req.body;

    const note = await Note.create({ user: req.user!.id, title, content });
    res.status(201).json(note);
  } catch (error) {
    next(error);
  }
};

// Update an existing note
export const updateNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    if (note.user.toString() !== req.user!.id) return res.status(401).json({ message: "Unauthorized" });

    note.title = req.body.title || note.title;
    note.content = req.body.content || note.content;

    const updatedNote = await note.save();
    res.json(updatedNote);
  } catch (error) {
    next(error);
  }
};

// Delete a note
export const deleteNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    if (note.user.toString() !== req.user!.id) return res.status(401).json({ message: "Unauthorized" });

    await note.deleteOne(); // safe deletion
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    next(error);
  }
};