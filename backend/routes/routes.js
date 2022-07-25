import express from "express";
import {
  getAllNotes,
  getAllArchivedNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/NotesController.js";
const router = express.Router();

router.get("/", getAllNotes);
router.get("/archived", getAllArchivedNotes);
router.get("/:id", getNote);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
