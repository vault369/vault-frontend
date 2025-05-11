import React from "react";
import { useParams } from "react-router-dom";

const TrackPage = () => {
  const { id } = useParams();
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Track #{id} - Preview</h2>
      <p>Audio waveform and mint functionality will appear here.</p>
      <button>Mint</button>
    </div>
  );
};
export default TrackPage;
