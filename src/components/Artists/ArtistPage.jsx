import React, { useState } from "react";
// import ArtistsData from "./ArtistsData";
import { useParams } from "react-router-dom";
import ArtistsData from "./ArtistsData";
import Footer from "../Footer";
const ArtistPage = () => {
  const currId = useParams();
  const [ArtistData, setArtistData] = useState(ArtistsData);
  console.log(currId.id);
  return (
    <div className="text-white">
      {ArtistData.map((currElem) => {
        const { id, name, category, image, performingSince, bio } = currElem;
        if (currId.id === name) {
          return (
            <>
              <div className="h-full w-full mt-20 mb-20" key={id}>
                <div className="flex justify-around">
                  <div className="w-[30%] flex justify-center">
                    <img src={image} alt={name} width={300} />
                  </div>
                  <div className="w-[70%]">
                    <h1 className="text-3xl mb-2">{name}</h1>
                    <h1 className="text-xl mb-2">{category}</h1>
                    <h1>{bio}</h1>
                  </div>
                </div>
              </div>
            </>
          );
        }
      })}
      <Footer></Footer>
    </div>
  );
};

export default ArtistPage;
