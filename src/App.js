import React from 'react';
import HomePage from './pages/HomePage';
import TrackList from './pages/TrackList';
import TrackDetail from './pages/TrackDetail';
import UploadPage from './pages/UploadPage';
import ArtistDashboard from './pages/ArtistDashboard';

function App() {
  return (
    <>
      <HomePage />
      <TrackList />
      <TrackDetail />
      <UploadPage />
      <ArtistDashboard />
    </>
  );
}

export default App;