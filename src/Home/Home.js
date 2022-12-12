import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar/Navbar";
import homeImage from "../Images/Rectangle 3.svg";
import Rectangle5 from "../Images/Rectangle 5.svg";
import Background2 from "../Images/Rectangle 38.svg";

const Home = () => {
  const arr = [
    {
      img: Rectangle5,
      text: "The 20 Biggest Fashion Companies In Nigeria 2022",
      button: "technology",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="homeimgdiv">
        <div className="textdiv">
          <h1 className="header1">Stay Curious.</h1>
          <p className="ptag1">
            Lorem ipsu.m dolor sit ameetur adipiscing elit. Coctetur egestas
            massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
            aliquam id ut.{" "}
          </p>
          <button className="secondbtn">Get Started</button>
        </div>
      </div>
      <div className="fulldiv">
      <div>
        <h3>{arr[0].img}</h3>
      </div>

      <div className="background2div">
    <div className="pushdiv">
    <h2 className="header2">Try Postit</h2>
          <p className="postitp">
            Do you want to write or discover stories from writers on any topic?
          </p>
         <div className="inp-btn-div">
         <input
              className="inp1"
              type="text"
              placeholder="Enter email address"
            />
            <button className="thirdbtn">Get Started</button>
         </div>
    </div>
        {/* <img src={Background2} alt="" /> */}

        {/* <div className="paddiv">
          <h2 className="header2">Try Postit</h2>
          <p className="postitp">
            Do you want to write or discover stories from writers on any topic?
          </p>
          <div className="inp-btn-div">
            <input
              className="inp1"
              type="text"
              placeholder="Enter email address"
            />
            <button className="thirdbtn">Get Started</button>
          </div>
        </div> */}
      </div>
      </div>
    </div>
  );
};

export default Home;
