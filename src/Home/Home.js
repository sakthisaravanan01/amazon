import React from "react";
import images from "../images/SOA_Blog_Prime_Seller._SL1280_FMjpg_.jpg";
import "./Home.css";
import Product from "../product";
function Home() {
  return (
    <div>
      <div className="home-image">
        <img src={images} className="home-image-logo" />
      </div>
      <Product />
    </div>
  );
}

export default Home;
