import React, { useState } from 'react';

export default function UploadPage() {
  const [trackName, setTrackName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-slate-100 p-10 font-mono">
      <div className="max-w-2xl mx-auto bg-[#121212] border border-gray-700 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-cyan-400">Upload New Track</h1>

        <label className="block text-sm text-gray-400 mb-1">Track Name</label>
        <input
          type="text"
          value={trackName}
          onChange={(e) => setTrackName(e.target.value)}
          className="w-full mb-4 p-2 bg-[#1a1a1a] border border-gray-600 rounded-md text-white"
        />

        <label className="block text-sm text-gray-400 mb-1">Artist Name</label>
        <input
          type="text"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
          className="w-full mb-4 p-2 bg-[#1a1a1a] border border-gray-600 rounded-md text-white"
        />

        <label className="block text-sm text-gray-400 mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="w-full mb-4 p-2 bg-[#1a1a1a] border border-gray-600 rounded-md text-white"
        ></textarea>

        <label className="block text-sm text-gray-400 mb-2">Upload Audio File</label>
        <div className="flex items-center justify-center w-full mb-6">
          <label className="flex flex-col items-center justify-center w-full h-32 bg-[#1a1a1a] border-2 border-dashed border-cyan-400 rounded-lg cursor-pointer">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-2 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v9m0-9l-3.5 3.5M12 12l3.5 3.5M12 3v9" />
              </svg>
              <p className="text-sm text-gray-400">Click to upload or drag file here</p>
            </div>
            <input type="file" className="hidden" />
          </label>
        </div>

        <button className="w-full bg-gray-800 border border-cyan-400 py-3 rounded-md hover:bg-gray-700 transition">
          Mint Track
        </button>
      </div>
    </div>
  );
}