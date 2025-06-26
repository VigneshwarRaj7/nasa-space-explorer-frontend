import React from 'react';
import { motion } from 'framer-motion';

export default function RoverManifestCard({ manifest }) {
  return (
    <motion.div
      className="bg-gradient-to-br from-black to-purple-900 border border-purple-600 rounded-xl p-6 text-white shadow-lg"
      whileHover={{ scale: 1.03 }}
    >
      <h2 className="text-3xl font-bold mb-3">{manifest.name}</h2>
      <p>🛬 Landed: <span className="text-green-400">{manifest.landing_date}</span></p>
      <p>🚀 Launched: {manifest.launch_date}</p>
      <p>📅 Latest Sol: {manifest.max_sol}</p>
      <p>🟢 Status: <span className="text-green-500 capitalize">{manifest.status}</span></p>
      <p>📸 Total Photos: <span className="text-pink-400 font-semibold">{manifest.total_photos.toLocaleString()}</span></p>
    </motion.div>
  );
}