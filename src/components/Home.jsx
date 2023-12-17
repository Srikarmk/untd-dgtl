import { useState } from "react";
import "../index.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import anees from "../assets/anees.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import Menu from "./Menu";
const Home = () => {
  // const [isClicked, setIsClicked] = useState(false);
  // const toggleClick = () => {
  //   setIsClicked(!isClicked);
  // };
  // console.log(isClicked);
  return (
    <div>
      <div className="text-white flex justify-between w-screen p-10">
        <div className="w-[60%] p-3">
          <h1 className="text-3xl mb-20 font-bold">
            Bringing up a platform to find talent
          </h1>
          <p className="text-2xl mb-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ullam
            sed voluptatibus eaque culpa enim at fuga eos reprehenderit minima!
          </p>
          <Link
            to="/artists"
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Discover Talent
          </Link>
        </div>
        <div className="w-[40%]">
          <img src={anees} alt="artist" width={400} className="mx-auto" />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;

{
  /* {isClicked ? (
        <Menu />
      ) : (
        <div className="home-bg text-white h-full">
          <div className="flex p-8 justify-between sticky top-0">
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
      )} */
}
