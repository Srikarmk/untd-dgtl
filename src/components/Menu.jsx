import React from "react";
import { useState } from "react";
import Home from "./Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import { faInstagram } from "@fortawesome/free-solid-svg-icons";
const Menu = () => {
  const [isClicked, setIsClicked] = useState(true);
  const toggleClick = () => {
    setIsClicked(!isClicked);
  };
  console.log("now", isClicked);
  return (
    <div className="bg-black w-[100vw] h-[100vh] ">
      {isClicked ? (
        <div>
          <div className="flex p-8 justify-between" onClick={toggleClick}>
            <h1 className="text-white ">Untd Dgtl</h1>
            <FontAwesomeIcon icon={faXmark} size="2x" color="white" />
          </div>
          <div className="flex items-center justify-evenly h-[60vh] p-20">
            <div>
              <ul className="text-white space-y-10 text-2xl font-bold">
                <li className="hover:cursor-pointer">Home</li>
                <li>Artists</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="text-white">
              <p>
                San Jose <br />
                98 Post St, San Francisco, CA 94104;
                <br />
                575 Market St, Ste 150, San Francisco, CA 94105 <br />
                <br />
                contacts@madsparrow.me <br />
                +1-800-870-6397
              </p>
              <div className="flex justify-around md:flex md:justify-between md:w-[50%] pt-10">
                <a
                  href="https://twitter.com/Srikarismad"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="fa-2x hover:text-[#3a86ff]"
                  />
                </a>
                <a
                  href="https://twitter.com/Srikarismad"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="fa-2x hover:text-[#3a86ff]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Home></Home>
      )}
    </div>
  );
};

export default Menu;
