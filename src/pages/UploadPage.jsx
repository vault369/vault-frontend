import React, { useState } from "react";
const UploadPage = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [cover, setCover] = useState(null);
  const [audio, setAudio] = useState(null);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("artist", artist);
    formData.append("cover", cover);
    formData.append("audio", audio);
    const response = await fetch("https://vaultmvp.onrender.com/api/upload", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    alert(data.message || "Upload complete!");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Upload Track</h2>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /><br /><br />
      <input placeholder="Artist" value={artist} onChange={(e) => setArtist(e.target.value)} /><br /><br />
      <input type="file" accept="image/*" onChange={(e) => setCover(e.target.files[0])} /><br /><br />
      <input type="file" accept="audio/*" onChange={(e) => setAudio(e.target.files[0])} /><br /><br />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};
export default UploadPage;
