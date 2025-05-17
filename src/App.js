
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GenrePage from './pages/GenrePage';
import UploadPage from './pages/UploadPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TrackPage from './pages/TrackPage';
import UnlockPage from './pages/UnlockPage';

function App() {
  const token = localStorage.getItem('vaultToken');

  return (
    <Router>
      <nav className="container">
        <Link to="/">Home</Link> | 
        {token && <Link to="/upload">Upload</Link>} | 
        {token 
          ? <span style={{ color: 'lime' }}>Logged in</span> 
          : <Link to="/login">Login</Link>} | 
        {!token && <Link to="/register">Register</Link>}
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/track/:trackId" element={<TrackPage />} />
        <Route path="/unlock/:trackId" element={<UnlockPage />} />
        <Route path="/genre/:genreName" element={<GenrePage />} />
      </Routes>
    </Router>
  );
}

export default App;
