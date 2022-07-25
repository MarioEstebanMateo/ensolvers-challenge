import NoteModel from "../models/NoteModel.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await NoteModel.findAll({ where: { archived: false } });
    res.status(200).json(notes);
  } catch (error) {
    res.jason({ message: error.message });
  }
};

export const getAllArchivedNotes = async (req, res) => {
  try {
    const notes = await NoteModel.findAll({ where: { archived: true } });
    res.status(200).json(notes);
  } catch (error) {
    res.jason({ message: error.message });
  }
};

export const getNote = async (req, res) => {
  try {
    const note = await NoteModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(note[0]);
  } catch (error) {
    res.jason({ message: error.message });
  }
};

export const createNote = async (req, res) => {
  try {
    const note = await NoteModel.create(req.body);
    res.status(201).json({
      message: "Note created successfully",
    });
  } catch (error) {
    res.jason({ message: error.message });
  }
};

export const updateNote = async (req, res) => {
  try {
    await NoteModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "Note updated successfully",
    });
  } catch (error) {
    res.jason({ message: error.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    await NoteModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "Note deleted successfully",
    });
  } catch (error) {
    res.jason({ message: error.message });
  }
};
