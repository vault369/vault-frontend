import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MintPage from "./pages/MintPage";
import TrackPage from "./pages/TrackPage";
import SuccessPage from "./pages/SuccessPage";
import CancelPage from "./pages/CancelPage";

function App() {
  return (
    <Router>
      <div style={{ padding: "1rem", borderBottom: "1px solid #333" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/mint">Mint</Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mint" element={<MintPage />} />
        <Route path="/track/:id" element={<TrackPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancelPage />} />
      </Routes>
    </Router>
  );
}

export default App;
