import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TrackPage = () => {
  const { id } = useParams();
  const [track, setTrack] = useState(null);

  useEffect(() => {
    fetch("https://vaultmvp.onrender.com/api/tracks")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((t) => t.id === id);
        setTrack(found);
      })
      .catch((err) => console.error("Track fetch error:", err));
  }, [id]);

  const handleMint = async () => {
    try {
      const res = await fetch("https://vaultmvp.onrender.com/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.id) {
        window.location.href = `https://checkout.stripe.com/pay/${data.id}`;
      }
    } catch (err) {
      alert("Minting failed.");
    }
  };

  if (!track) return <p>Loading track...</p>;

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>{track.title}</h1>
      <p>{track.artist}</p>
      <img src={track.cover} alt={track.title} style={{ width: "300px", borderRadius: "12px" }} />
      <div style={{ marginTop: "2rem", background: "#000", height: "100px", borderRadius: "10px" }}>
        <p style={{ color: "#fff", paddingTop: "35px" }}>⚡ waveform visual here</p>
      </div>
      <button onClick={handleMint} style={{ marginTop: "2rem", padding: "1rem 2rem", fontSize: "1.2rem" }}>
        Mint Track
      </button>
    </div>
  );
};

export default TrackPage;
