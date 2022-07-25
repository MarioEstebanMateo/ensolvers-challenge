import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import "./ShowArchivedNotes.css";

const URI = "http://localhost:8000";
const URI2 = "http://localhost:8000/archived";

const ShowArchivedNotes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getArchivedNotes();
  }, []);

  const navigate = useNavigate();

  const getArchivedNotes = async () => {
    const res = await axios.get(URI2);
    setNotes(res.data);
  };

  const deleteNote = async (id) => {
    const res = await axios.delete(`${URI}/${id}`);
    getArchivedNotes();
  };

  const unArchiveNote = async (id) => {
    const res = await axios.put(`${URI}/${id}`, {
      archived: false,
    });
    getArchivedNotes();
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteNote(id);
        Swal.fire("Deleted!", "Your note has been deleted.", "success");
      }
    });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="title_bar">
          <h1 className="title_page">My Notes</h1>
          <Link to="/create" className="btn btn-outline-success">
            Create Note
          </Link>
          <button
            onClick={() => navigate("/")}
            className="btn btn-outline-info"
          >
            Go Back to Unarchived Notes
          </button>
        </div>
        <div className="notes_section">
          {notes.map((note) => (
            <div className="card text-center" key={note.id}>
              <h5 className="card-header">{note.title}</h5>
              <div className="card-body">
                <p className="card-text">{note.content}</p>
                <div className="card-buttons">
                  <button
                    onClick={() => unArchiveNote(note.id)}
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="fa-solid fa-boxes-packing"></i>
                  </button>
                  <Link
                    to={`/edit/${note.id}`}
                    className="btn btn-outline-primary btn-sm"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                  <button
                    onClick={() => handleDelete(note.id)}
                    className="btn btn-outline-danger btn-sm"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
              <div className="card-footer text-muted">
                Last Edited {note.updatedAt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowArchivedNotes;
