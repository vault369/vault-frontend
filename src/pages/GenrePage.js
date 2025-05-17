
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const GenrePage = () => {
  const { genreName } = useParams();
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/tracks`)
      .then(res => res.json())
      .then(data => {
        const filtered = data.tracks.filter(t => t.genre === genreName);
        setTracks(filtered);
      });
  }, [genreName]);

  return (
    <div className="container">
      <h1>{genreName} Tracks</h1>
      {tracks.map(track => (
        <div key={track.id}>
          <h2>{track.title}</h2>
          <img src={track.waveformUrl || '/placeholder-waveform.png'} style={{ width: '100%', maxWidth: 600 }} />
          <Link to={`/track/${track.id}`}><button>Listen / Buy</button></Link>
        </div>
      ))}
    </div>
  );
};

export default GenrePage;
