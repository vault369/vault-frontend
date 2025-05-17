import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TrackPage = () => {
  const { id } = useParams();
  const [track, setTrack] = useState(null);

  const handleMint = () => {
    const userEmail = prompt('Enter your email to mint:');
    fetch(`${process.env.REACT_APP_API_URL}/api/mint`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ trackId: id, userEmail })
    })
      .then(res => res.json())
      .then(data => window.location.href = data.checkoutUrl);
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/tracks`)
      .then(res => res.json())
      .then(data => setTrack(data.tracks.find(t => t.id === parseInt(id))));
  }, [id]);

  if (!track) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{track.title}</h1>
      <p>{track.description}</p>
      <button onClick={handleMint}>Mint & Purchase</button>
    </div>
  );
};

export default TrackPage;
