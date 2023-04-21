import React from "react";
import CommImg1 from "../images/Community1.png";
import CommImg2 from "../images/Community2.png";
import CommImg3 from "../images/Community3.png";
import CommImg4 from "../images/Community4.png";

const Community = () => {
  const images = [CommImg1, CommImg2, CommImg3, CommImg4];
  return <div className="community">
    <span>Common Cummunity (3)</span>
    <div className="commImages">
      {
        images.map((imagePath) => (
          <img src={imagePath} alt="" />

        ))
      }
    </div>
  </div>;
};

export default Community;
