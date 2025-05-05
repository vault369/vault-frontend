import React, { useState } from 'react';

export default function UploadPage() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  const handleUpload = async () => {
    if (!file || !title || !artist) {
      setStatus("Please fill out all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("artist", artist);
    formData.append("file", file);

    try {
      const response = await fetch("https://vaultmvp.onrender.com/api/upload", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setStatus("✅ Upload successful!");
        setTitle('');
        setArtist('');
        setFile(null);
      } else {
        setStatus("❌ Upload failed. Try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Error occurred.");
    }
  };

  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen p-10 font-mono">
      <h1 className="text-3xl text-cyan-300 mb-6 text-center">Upload New Track</h1>
      <div className="max-w-xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Track Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md"
        />
        <input
          type="text"
          placeholder="Artist Name"
          value={artist}
          onChange={e => setArtist(e.target.value)}
          className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md"
        />
        <input
          type="file"
          accept="audio/*"
          onChange={e => setFile(e.target.files[0])}
          className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-white"
        />
        <button
          onClick={handleUpload}
          className="w-full p-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md"
        >
          Upload Track
        </button>
        {status && <p className="text-center mt-4 text-cyan-400">{status}</p>}
      </div>
    </div>
  );
}
