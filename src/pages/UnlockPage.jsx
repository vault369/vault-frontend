import React from "react";
import { useParams } from "react-router-dom";

const UnlockPage = () => {
  const { id } = useParams();
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Unlock Track #{id}</h2>
      <p>If you purchased this track, your exclusive download appears here.</p>
      <button>Download ZIP</button>
    </div>
  );
};

export default UnlockPage;
