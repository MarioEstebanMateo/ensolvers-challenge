import db from "../database/db.js";
import { DataTypes } from "sequelize";

const NoteModel = db.define("notes", {
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
  archived: { type: DataTypes.BOOLEAN },
});

export default NoteModel;
