import "./App.css";
import RoomList from "./components/RoomList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<RoomList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
