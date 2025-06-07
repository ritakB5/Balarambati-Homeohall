
import React, { useState } from 'react';

const Map = () => {
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState<boolean>(true);
  
  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowTokenInput(false);
  };
  
  if (showTokenInput) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-homeo-green-dark mb-4">Map Setup</h3>
        <p className="mb-4 text-gray-700">
          To display the map, please enter your Mapbox public token. You can get one by signing up at{" "}
          <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-homeo-blue hover:underline">
            mapbox.com
          </a>.
        </p>
        <form onSubmit={handleTokenSubmit} className="space-y-4">
          <div>
            <label htmlFor="mapbox-token" className="block mb-1 text-sm font-medium text-gray-700">
              Mapbox Public Token
            </label>
            <input
              id="mapbox-token"
              type="text"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-homeo-green-dark"
              placeholder="Enter your Mapbox public token"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-homeo-green-dark text-white rounded-md hover:bg-homeo-blue transition-colors"
          >
            Display Map
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        title="Balarambati Homeohall Location"
        className="w-full h-full border-none"
        src={`https://www.google.com/maps/embed/v1/place?key=${mapboxToken}&q=Balarambati,Singur,Hooghly,West+Bengal,India&zoom=15`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Map;
