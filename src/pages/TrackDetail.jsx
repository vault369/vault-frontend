import React from 'react';

export default function TrackDetail() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-slate-100 p-10 font-mono">
      <div className="max-w-3xl mx-auto bg-[#121212] border border-gray-700 rounded-xl shadow-lg p-8">
        <img
          src="https://via.placeholder.com/600x300"
          alt="Track Cover"
          className="rounded-md w-full h-auto mb-6 border border-gray-600"
        />
        <h1 className="text-3xl font-bold mb-2 text-cyan-400">Electric Groove</h1>
        <p className="text-sm text-gray-400 mb-4">by Sarah Stone</p>

        <div className="bg-gray-800 rounded-md h-24 mb-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-cyan-400 animate-pulse"></div>
        </div>

        <div className="flex gap-4 mb-6">
          <button className="flex-1 bg-gray-800 border border-cyan-400 py-2 rounded-md hover:bg-gray-700 transition">
            ▶️ Play
          </button>
          <button className="flex-1 bg-gray-800 border border-gray-500 py-2 rounded-md hover:bg-gray-700 transition">
            Mint as NFT
          </button>
        </div>

        <p className="text-sm text-gray-500">
          This track blends minimal techno with futuristic pulses inspired by the VAULT vision.
        </p>
      </div>
    </div>
  );
}