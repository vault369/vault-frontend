import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import TrackPage from "./pages/TrackPage";
import UnlockPage from "./pages/UnlockPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/upload">Upload</Link> | <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/track/:id" element={<TrackPage />} />
        <Route path="/unlock/:id" element={<UnlockPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
