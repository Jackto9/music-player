import React from "react";

const MusicPlayer = () => {
    return (
        <div className="p-4 flex flex-col items-center">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full max-w-md text-center">
                <h2 className="text-lg font-semibold">Now Playing</h2>
                <p className="text-gray-600">Select a song to play</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Play</button>
            </div>
        </div>
    );
};

export default MusicPlayer;
 
