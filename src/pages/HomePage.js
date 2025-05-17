import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/tracks`)
      .then(res => res.json())
      .then(data => setTracks(data.tracks));
  }, []);

  return (
    <div className="container">
      <h1>VAULT Tracks</h1>
      {tracks.map(track => (
        <div key={track.id}>
          <h2><Link to={`/track/${track.id}`}>{track.title}</Link></h2>
          <p>{track.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
