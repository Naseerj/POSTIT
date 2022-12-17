import React from "react";
import "./Dashboard.css";

import backgroundimg from "../Images/unsplash_Z2bJeJQRbW0.svg";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Navbar/Footer/Footer";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div id="homepagediv">
        <div className="namediv">
          <h1 className="nametext">Welcome Maria,</h1>
          <p className="loremtext">
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
            massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
            aliquam id ut.
          </p>
          <div className="btnsdiv">
            <button className="homebtn">My Stories</button>
            <button className="homebtn2">Go to My Feed</button>
          </div>
        </div>
        <div>
          <img src={backgroundimg} alt="" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;
