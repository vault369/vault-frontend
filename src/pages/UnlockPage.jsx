import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UnlockPage = () => {
  const { id } = useParams();
  const [track, setTrack] = useState(null);

  useEffect(() => {
    fetch("https://vaultmvp.onrender.com/api/tracks")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((t) => t.id === id);
        setTrack(found);
      })
      .catch((err) => console.error("Unlock fetch error:", err));
  }, [id]);

  if (!track) return <p style={{ padding: "2rem" }}>Loading...</p>;

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Unlocked: {track.title}</h1>
      <p>Thanks for your support! Download your exclusive content below.</p>
      <a href={track.unlock_url} target="_blank" rel="noopener noreferrer">
        <button style={{ marginTop: "1.5rem" }}>Download Content</button>
      </a>
    </div>
  );
};

export default UnlockPage;
