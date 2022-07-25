import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import "./CreateNote.css";

const URI = "http://localhost:8000";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [archived, setArchived] = useState(false);
  const navigate = useNavigate();

  const storeNote = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      title: title,
      content: content,
      archived: archived,
    });
    navigate("/");
  };

  const handleSubmit = async (e) => {
    Swal.fire({
      icon: "success",
      title: "Your new note has been saved",
      showConfirmButton: false,
      timer: 1500,
    }).then((result) => {
      if (result.value) {
        storeNote(e);
      }
    });
  };

  return (
    <div className="container-fluid col-6">
      <h3>Create Note</h3>
      <form onSubmit={storeNote}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div>
          <button onClick={() => navigate("/")} className="btn btn-danger">
            Cancel
          </button>
          <button onClick={() => handleSubmit()} className="btn btn-success">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNote;
