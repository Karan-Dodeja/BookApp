import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Books />} ></Route>
          <Route path="/add" element={<Add />} ></Route>
          <Route path="/update/:id" element={<Update />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
