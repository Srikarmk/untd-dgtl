import React from "react";
import artist from "../../../assets/artist.jpg";
import { Link } from "react-router-dom";
const Artist = () => {
  return (
    <div className="mt-10 text-white">
      <div className="p-5">
        <Link to="/artists" className="text-l hover:underline">
          Back to all artists
        </Link>
      </div>
      <div className="p-5 flex justify-around">
        <div className="w-[50%]">
          <img src={artist} alt="" width={400} />
        </div>
        <div className="ml-10 w-[90%]">
          <h1 className="text-4xl font-bold">
            Anees <span className="text-xl text-slate-400">HYD,IN</span>
          </h1>
          <h2 className="text-xl">DJ</h2>
          {/* <h2 className="text-xl mb-2">Hyderbad</h2> */}
          <p className="mb-5 text-l">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
            quisquam accusantium aperiam pariatur fugiat ipsam praesentium
            exercitationem perferendis recusandae, expedita rerum ullam culpa
            nihil velit aspernatur, expe, expedita rerum ullam culpa nihil velit
            aspernatur, explicabo harum! Saepe maiores asperiores minima.e,
            expedita rerum ullam culpa nihil velit aspernatur, explicabo harum!
            Saepe maiores asperiores minima.licabo harum! Saepe maiores
            asperiores minima.e, expedita rerum ullam culpa nihil velit
            aspernatur, explicabo harum! Saepe maiores asperiores minima.
          </p>
          <h2>
            <span className="font-bold">Performing Since</span> - 2015
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Artist;
