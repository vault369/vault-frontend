import React from "react";
import { useParams } from "react-router-dom";

const UnlockPage = () => {
  const { id } = useParams();
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Unlock Content</h2>
      <p>This will let buyers of <strong>AWAKENING</strong> track #{id} download exclusive content.</p>
    </div>
  );
};

export default UnlockPage;
