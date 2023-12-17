import React from "react";
import Home from "./components/Home";
import Menu from "./components/Menu";
import { Route, Routes } from "react-router-dom";
import Artists from "./components/Artists/Artists";
import ArtistsData from "./components/Artists/ArtistsData";
import ArtistPage from "./components/Artists/ArtistPage";
// import Artist from "./components/Artists/Artist/Artist";
const App = () => {
  const artists = ArtistsData;
  return (
    <div className="bg-gradient-to-br from-black from-50% to-purple-900 h-full w-full">
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:id" element={<ArtistPage />} />
        {/* <Route path="/artistS/1" element={<Artist />} /> */}
      </Routes>
    </div>
  );
};

export default App;
