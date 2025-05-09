import React, { useEffect, useState } from "react";
const HomePage = () => {
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    fetch("https://vaultmvp.onrender.com/api/tracks")
      .then(res => res.json())
      .then(data => setTracks(data));
  }, []);
  return (
    <div style={{ padding: "2rem" }}>
      <h1>VAULT Digital Pressings</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        {tracks.map(track => (
          <div key={track.id} style={{ width: "250px", background: "#222", padding: "1rem", borderRadius: "10px" }}>
            <img src={track.cover} alt={track.title} style={{ width: "100%", borderRadius: "8px" }} />
            <h3>{track.title}</h3>
            <p>{track.artist}</p>
            <a href={`/track/${track.id}`}>
              <button style={{ marginTop: "0.5rem" }}>View Track</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomePage;
