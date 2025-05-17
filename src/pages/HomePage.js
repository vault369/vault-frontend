
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [tracks, setTracks] = useState([]);
  const token = localStorage.getItem('vaultToken');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/tracks`)
      .then(res => res.json())
      .then(data => setTracks(data.tracks.reverse()));
  }, []);

  return (
    <div className="container">
      <h1>🔥 Latest Releases</h1>
      {token && <p><Link to="/upload">Upload New Track</Link></p>}

      {tracks.map(track => (
        <div key={track.id} className="track-card">
          <h2>{track.title}</h2>
          <p>{track.description}</p>

          <img 
            src={track.waveformUrl || '/placeholder-waveform.png'} 
            alt="waveform" 
            style={{ width: '100%', maxWidth: 600 }}
          />

          <p>
            <Link to={`/genre/${track.genre}`}>
              <button className="genre-button">{track.genre}</button>
            </Link>
          </p>

          {token ? (
            <Link to={`/track/${track.id}`}><button>Buy / Unlock</button></Link>
          ) : (
            <p><Link to="/login">Login to Mint or Unlock</Link></p>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
