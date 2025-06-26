import React from "react";
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label
} from "recharts";

function AsteroidGraph({ data }) {
  const formattedData = Object.entries(data).flatMap(([date, asteroids]) =>
    asteroids.map(asteroid => ({
      name: asteroid.name,
      size: asteroid.estimated_diameter.kilometers.estimated_diameter_max,
      distance: parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers)
    }))
    
  );

  return (
    <div className="w-full px-12">
     {console.log(formattedData)}
      <h2 className="text-2xl font-bold mb-4 text-purple-400 font-orbitron">
        Asteroid Size vs. Miss Distance
      </h2>
      <ResponsiveContainer width="100%" height={400} className="border-2 border-purple-600 rounded-lg 
                                                    shadow-lg backdrop-blur-lg p-2 shadow-purple-800">
        <ScatterChart>
          {/* <CartesianGrid className="" /> */}
          <XAxis
            type="number"
            dataKey="distance"
            name="Miss Distance"
            unit=" km"
            tick={{ 
                    fill: '#a78bfa', 
                    fontFamily: 'Orbitron, sans-serif', 
                    fontWeight: '', 
                    fontSize: 12 
                }}
            tickFormatter={(val) => (val / 1e6).toFixed(1) + "M"}
          >
            <Label value="Miss Distance (in km)" offset={-5} position="insideBottom" fontFamily="Orbitron,san-serif" fill="#a78bfa" />
          </XAxis>
          <YAxis
            tick={{ 
                    fill: '#a78bfa', 
                    fontFamily: 'Orbitron, sans-serif', 
                    fontWeight: '', 
                    fontSize: 12 
                }}
            type="number"
            dataKey="size"
            name="Asteroid Size"
            unit="km"  
          >
            <Label value="Size" angle={-90} position="left" fontFamily="Orbitron,san-serif" fill="#a78bfa" />
          </YAxis>
                
          <Tooltip
            cursor={{ strokeDasharray: '3 3' }}
            content={({ active, payload }) => {
                if (active && payload && payload.length) {
                const asteroid = payload[0].payload;
                const color = payload[0].color || '#8884d8'; // fallback if no color provided

                return (
                    <div
                    id="card"
                    className="p-2 border border-purple-300 rounded-2xl font-orbitron text-xs"
                    style={{
                        backgroundColor: color,
                        color: '#fff', // text color
                        boxShadow: `0 0 10px ${color}`,
                    }}
                    >
                    <p><strong>{asteroid.name}</strong></p>
                    <p>Size: {asteroid.size.toFixed(2)} km</p>
                    <p>Miss Distance: {(asteroid.distance / 1e6).toFixed(2)} million km</p>
                    </div>
                );
                }
                return null;
            }}
          />
          <Scatter name="Asteroids" data={formattedData} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AsteroidGraph;