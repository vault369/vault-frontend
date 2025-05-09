import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import WaveSurfer from "wavesurfer.js";

const TrackPage = () => {
  const { id } = useParams();
  const [track, setTrack] = useState(null);
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  useEffect(() => {
    fetch("https://vaultmvp.onrender.com/api/tracks")
      .then(res => res.json())
      .then(data => setTrack(data.find(t => t.id === id)));
  }, [id]);

  useEffect(() => {
    if (track && track.audio && waveformRef.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#0ff",
        progressColor: "#0cc",
        height: 100,
        barWidth: 2,
      });
      wavesurfer.current.load(track.audio);
    }
    return () => wavesurfer.current && wavesurfer.current.destroy();
  }, [track]);

  const handleMint = async () => {
    const res = await fetch("https://vaultmvp.onrender.com/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.id) window.location.href = `https://checkout.stripe.com/pay/${data.id}`;
  };

  if (!track) return <p style={{ padding: "2rem" }}>Loading track...</p>;
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>{track.title}</h1>
      <p>{track.artist}</p>
      <img src={track.cover} alt={track.title} style={{ width: "300px", borderRadius: "12px" }} />
      <div ref={waveformRef} style={{ marginTop: "2rem" }} />
      <button onClick={handleMint} style={{ marginTop: "2rem" }}>Mint Track</button>
    </div>
  );
};

export default TrackPage;
