import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UploadPage from './pages/UploadPage';
import TrackPage from './pages/TrackPage';
import LoginPage from './pages/LoginPage';
import MintPage from './pages/MintPage';

export default function App() {
  return (
    <Router>
      <nav className="bg-black text-cyan-300 p-4 flex gap-4 font-mono text-sm">
        <Link to="/">Home</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/track">Track</Link>
        <Link to="/mint">Mint</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/track" element={<TrackPage />} />
        <Route path="/mint" element={<MintPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}
