import React, { useRef, useState } from 'react';

export default function TrackPage() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen py-12 px-6 font-mono flex flex-col items-center">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8">Electric Groove</h1>
      <img
        src="https://images.unsplash.com/photo-1554057009-7f373c1c4cbf"
        alt="Track Cover"
        className="w-72 h-72 object-cover rounded-xl border border-cyan-600 shadow-lg mb-6"
      />
      <div className="w-full max-w-xl mb-6">
        <div className="bg-gradient-to-r from-cyan-500 via-cyan-300 to-cyan-600 h-2 rounded-full animate-pulse shadow-md"></div>
      </div>
      <audio ref={audioRef} src="/sample.mp3" preload="auto" />
      <button
        onClick={togglePlayback}
        className="mb-8 px-6 py-2 bg-cyan-700 text-white rounded-md hover:bg-cyan-600 transition"
      >
        {isPlaying ? "Pause" : "Play"} Track
      </button>
      <button className="px-6 py-2 border border-cyan-500 text-cyan-300 rounded-md hover:bg-cyan-800">
        Mint This Track
      </button>
    </div>
  );
}
