import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import "./EditNote.css";

const URI = "http://localhost:8000/";

const EditNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [archived, setArchived] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const updateNote = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, {
      title: title,
      content: content,
      archived: archived,
    });
    navigate("/");
  };

  useEffect(() => {
    getNoteById();
  }, []);

  const getNoteById = async () => {
    const res = await axios.get(URI + id);
    setTitle(res.data.title);
    setContent(res.data.content);
    setArchived(res.data.archived);
  };

  const handleSubmit = async (e) => {
    Swal.fire({
      icon: "success",
      title: "Your note has been saved",
      showConfirmButton: false,
      timer: 1500,
    }).then((result) => {
      if (result.value) {
        updateNote(e);
      }
    });
  };

  return (
    <div className="container-fluid col-6">
      <h3>Edit Note</h3>
      <form onSubmit={updateNote}>
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

export default EditNote;
