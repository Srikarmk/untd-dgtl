import { useState } from "react";
import "../index.css";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";
const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  const toggleClick = () => {
    setIsClicked(!isClicked);
  };
  console.log(isClicked);
  return (
    <div>
      {isClicked ? (
        <Menu />
      ) : (
        <div className="home-bg text-white">
          <div className="flex p-8 justify-between">
            <h1 className="text-3xl font-bold ">Untd Dgtl</h1>

            <div className="hover:cursor-pointer" onClick={toggleClick}>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </div>
          </div>
          <div className="absolute top-[30em] p-10">
            <h1 className="text-5xl font-bold mb-10">
              Enjoy and Find artists here !
            </h1>
            <div className="text-2xl font-bold">SEE ALL ARTISTS</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
