import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ShowNonArchivedNotes from "./components/ShowNonArchivedNotes";
import CreateNote from "./components/CreateNote";
import EditNote from "./components/EditNote";
import ShowArchivedNotes from "./components/ShowArchivedNotes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ShowNonArchivedNotes />}></Route>
          <Route path="/archived" element={<ShowArchivedNotes />}></Route>
          <Route path="/create" element={<CreateNote />}></Route>
          <Route path="/edit/:id" element={<EditNote />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
