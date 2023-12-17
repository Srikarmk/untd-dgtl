import React from "react";
import { Link } from "react-router-dom";
const ArtistCard = ({ ArtistData }) => {
  console.log(ArtistData);
  return (
    <div>
      <div>
        <section className="main-card--container p-5 grid grid-cols-2 lg:grid-cols-3 gap-20 mt-10">
          {ArtistData.map((currElem) => {
            const { id, name, category, bio, performingSince, image } =
              currElem;
            return (
              <>
                <Link to={`/artists/${name}`}>
                  <div className="card-container bg-white" key={id}>
                    <div className="card text-black">
                      <div className="relative card-body lg:w-[300px] lg:h-[400px]">
                        <img
                          src={image}
                          alt={name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-[350px] w-full bg-black text-center items-center justify-center text-white bg-opacity-80 ">
                          <p className="text-lg font-bold">{name}</p>
                          <p className="card-author subtitle">{category}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default ArtistCard;
