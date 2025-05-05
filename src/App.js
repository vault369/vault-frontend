import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TrackList from './pages/TrackList';
import TrackDetail from './pages/TrackDetail';
import UploadPage from './pages/UploadPage';
import ArtistDashboard from './pages/ArtistDashboard';

function App() {
  return (
    <div className="text-white font-mono">
      <nav className="bg-black border-b border-gray-800 px-6 py-4 flex justify-center gap-6 text-cyan-300">
        <Link to="/">Home</Link>
        <Link to="/tracks">Tracks</Link>
        <Link to="/detail">Track Detail</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tracks" element={<TrackList />} />
        <Route path="/detail" element={<TrackDetail />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/dashboard" element={<ArtistDashboard />} />
      </Routes>
    </div>
  );
}

export default App;