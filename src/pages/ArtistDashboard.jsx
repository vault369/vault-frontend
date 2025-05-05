import React from 'react';

const mockStats = {
  totalTracks: 12,
  totalEarnings: '₳248.73',
  followers: 86,
};

const recentTracks = [
  {
    title: 'Pulse Reactor',
    plays: 1743,
    minted: true,
  },
  {
    title: 'Hyperdrive Flow',
    plays: 981,
    minted: false,
  },
  {
    title: 'Circuit Bloom',
    plays: 2104,
    minted: true,
  },
];

export default function ArtistDashboard() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-slate-100 font-mono p-8">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8 text-center">Artist Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
        <div className="bg-[#121212] border border-gray-700 rounded-xl p-6 text-center">
          <p className="text-2xl font-bold text-cyan-300">{mockStats.totalTracks}</p>
          <p className="text-sm text-gray-400">Total Tracks</p>
        </div>
        <div className="bg-[#121212] border border-gray-700 rounded-xl p-6 text-center">
          <p className="text-2xl font-bold text-cyan-300">{mockStats.totalEarnings}</p>
          <p className="text-sm text-gray-400">Total Earnings</p>
        </div>
        <div className="bg-[#121212] border border-gray-700 rounded-xl p-6 text-center">
          <p className="text-2xl font-bold text-cyan-300">{mockStats.followers}</p>
          <p className="text-sm text-gray-400">Followers</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-gray-300">Recent Tracks</h2>
        <div className="space-y-4">
          {recentTracks.map((track, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-[#121212] border border-gray-700 rounded-lg p-4"
            >
              <div>
                <p className="text-lg text-cyan-300">{track.title}</p>
                <p className="text-sm text-gray-500">{track.plays} plays</p>
              </div>
              <span
                className={`text-xs px-3 py-1 rounded-full border font-semibold ${
                  track.minted ? 'border-green-400 text-green-400' : 'border-yellow-400 text-yellow-400'
                }`}
              >
                {track.minted ? 'Minted' : 'Not Minted'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}