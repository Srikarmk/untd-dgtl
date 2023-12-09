import React from "react";
import artist from "../../assets/artist.jpg";
import { Link } from "react-router-dom";
const Artists = () => {
  return (
    <div className="text-white">
      <div className="p-5 mb-20">
        <h1 className="text-3xl text-center">Discover Talent</h1>
      </div>
      <div className="flex justify-around">
        <div className="card w-[15%] h-full bg-white">
          <Link to="/artists/1">
            <img src={artist} alt="" />
          </Link>
          <div className="text-black text-center p-1">Name</div>
          <div className="text-black text-center pb-1">DJ</div>
        </div>

        <div className="card w-[15%] h-full bg-white">
          <Link to="/artists/1">
            {" "}
            <img src={artist} alt="" />
          </Link>
          <div className="text-black text-center p-1">Name</div>
          <div className="text-black text-center pb-1">DJ</div>
        </div>
        <div className="card w-[15%] h-full bg-white">
          <Link to="/artists/1">
            {" "}
            <img src={artist} alt="" />
          </Link>
          <div className="text-black text-center p-1">Name</div>
          <div className="text-black text-center pb-1">DJ</div>
        </div>
        <div className="card w-[15%] h-full bg-white">
          <Link to="/artists/1">
            <img src={artist} alt="" />
          </Link>
          <div className="text-black text-center p-1">Name</div>
          <div className="text-black text-center pb-1">DJ</div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
