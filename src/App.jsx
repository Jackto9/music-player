import React from "react";
import Header from "./components/Header";
import MusicPlayer from "./components/MusicPlayer";

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <MusicPlayer />
        </div>
    );
}

export default App;
