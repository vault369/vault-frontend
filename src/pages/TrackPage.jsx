import React from "react";
import { useParams } from "react-router-dom";

const TrackPage = () => {
  const { id } = useParams();
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Track Viewer Placeholder</h2>
      <p>This page will show full details for track ID: <strong>{id}</strong></p>
      <p>Audio waveform, cover, and mint button will appear here once the album is uploaded.</p>
    </div>
  );
};

export default TrackPage;
