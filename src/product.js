import React from "react";
import "./project.css";
// import imag1 from "../images/wallpapertip_bike-wallpapers-hd_45870.jpg";
import img1 from "../src/images/wallpapertip_bike-wallpapers-hd_45870.jpg";
function product() {
  return (
    <div>
      <div>
        <p>
          FLYCON-100% Waterproof,Bike/Scooty BodyCover Comfortable for Yamaha
          2022 MT-03 ABS
        </p>
        <p>https://imgflip.com/tag/bikes</p>
        <p>🔥🔥</p>
      </div>
      <div className="picturedivproduct">
        <img src={img1} className="imageproduct" />
      </div>
    </div>
  );
}

export default product;
