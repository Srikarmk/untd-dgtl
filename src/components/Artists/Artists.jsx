import React, { useState } from "react";
import ArtistCard from "./ArtistCard";
import ArtistsData from "./ArtistsData";
import CategoriesNav from "./CategoriesNav";
import Footer from "../Footer";
import { Link, useParams } from "react-router-dom";
import ArtistPage from "./ArtistPage";
const categories = [
  "All",
  ...new Set(ArtistsData.map((currElem) => currElem.category)),
];
// console.log("category", categories);

const Artists = () => {
  const [ArtistData, setArtistData] = useState(ArtistsData);
  const [menuList, setMenuList] = useState(categories);
  console.log("Artist data", ArtistData);
  const id = useParams();
  console.log(id);
  const filterItem = (category) => {
    if (category === "All") {
      setArtistData(ArtistsData);
      return;
    }
    const updatedList = ArtistsData.filter((currElem) => {
      return currElem.category === category;
    });
    setArtistData(updatedList);
  };
  return (
    <div className="h-full w-full">
      <div className="p-5 mb-10">
        <h1 className="text-3xl text-center text-white">Discover Talent</h1>
      </div>
      <div className="ml-10 flex justify-center">
        <CategoriesNav
          filterItem={filterItem}
          menuList={menuList}
        ></CategoriesNav>
      </div>
      <div className="flex justify-around mb-10">
        <ArtistCard ArtistData={ArtistData}></ArtistCard>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Artists;
