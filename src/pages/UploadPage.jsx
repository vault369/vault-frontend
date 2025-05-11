import React, { useState } from "react";
const UploadPage = () => {
  const [message, setMessage] = useState("Waiting for file upload...");
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Upload Coming Soon</h2>
      <p>This feature will allow you to upload your album <strong>AWAKENING</strong> as a Digital Pressing.</p>
      <p style={{ color: "#0ff" }}>{message}</p>
    </div>
  );
};
export default UploadPage;
