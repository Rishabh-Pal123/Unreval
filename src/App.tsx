import './App.css'
import RoomList from './components/RoomList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <Router>

    <div className="app-layout">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<RoomList />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
  )
}

export default App
