import React from "react";
import Home from "./components/Home";
import Menu from "./components/Menu";
import { Route, Routes } from "react-router-dom";
import Artists from "./components/Artists/Artists";
import Artist from "./components/Artists/Artist/Artist";
const App = () => {
  return (
    <div className="bg-gradient-to-br from-black from-50% to-purple-900 h-screen w-full">
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artistS/1" element={<Artist />} />
      </Routes>
    </div>
  );
};

export default App;
