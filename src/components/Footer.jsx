import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="text-white">
      <hr className="bg-white border-3" />
      <div className="p-5 text-center flex-col">
        <div className="flex justify-evenly w-[40%] mx-auto mb-10 mt-10">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          <FontAwesomeIcon icon={faDiscord} size="2x" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          maxime obcaecati, ea vitae veniam aspernatur?
        </p>
      </div>
    </div>
  );
};

export default Footer;
