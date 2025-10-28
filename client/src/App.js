import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <br />
      <div className="container">
      <Routes>
        <Route exact path="/" element={<Search/>} />
        <Route exact path="/saved" element={<Saved/>} />
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
