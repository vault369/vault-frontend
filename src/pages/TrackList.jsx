import React from 'react';

const tracks = [
  {
    title: "Electric Groove",
    artist: "Sarah Stone",
    cover: "https://via.placeholder.com/150",
  },
  {
    title: "Stellar Pulse",
    artist: "Orion Drift",
    cover: "https://via.placeholder.com/150",
  },
  {
    title: "Neon Drift",
    artist: "Voltage Vibe",
    cover: "https://via.placeholder.com/150",
  },
  {
    title: "Darklight",
    artist: "Echo Architect",
    cover: "https://via.placeholder.com/150",
  }
];

export default function TrackList() {
  return (
    <div className="bg-[#0d0d0d] min-h-screen py-16 px-6 text-slate-200 font-mono">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-100 tracking-wide">
        Featured Tracks
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="bg-[#121212] border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={track.cover}
              alt={track.title}
              className="w-full h-48 object-cover rounded-md border border-gray-600 mb-4"
            />
            <h3 className="text-xl font-semibold text-cyan-300 mb-1">
              {track.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4">by {track.artist}</p>
            <div className="bg-cyan-500 h-1.5 w-full rounded-full mb-4 animate-pulse"></div>
            <button className="w-full text-sm bg-gray-800 text-white py-2 rounded-md border border-cyan-400 hover:bg-gray-700 transition duration-200">
              VIEW TRACK
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}