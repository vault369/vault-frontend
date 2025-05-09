import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MintPage from "./pages/MintPage";
import TrackPage from "./pages/TrackPage";
import SuccessPage from "./pages/SuccessPage";
import CancelPage from "./pages/CancelPage";
import LoginPage from "./pages/LoginPage";
import UploadPage from "./pages/UploadPage";
import UnlockPage from "./pages/UnlockPage";

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #333" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/mint">Mint</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/upload">Upload</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mint" element={<MintPage />} />
        <Route path="/track/:id" element={<TrackPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancelPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/unlock/:id" element={<UnlockPage />} />
      </Routes>
    </Router>
  );
}

export default App;
