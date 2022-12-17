import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Navbar/Footer/Footer";
import { useRef } from "react";

import homeImage from "../Images/Rectangle 3.svg";
import Rectangle1 from "../Images/Rectangle 5.svg";
import Rectangle2 from "../Images/Rectangle 5 (1).svg";
import Rectangle3 from "../Images/Rectangle 5 (2).svg";
import Background2 from "../Images/Rectangle 38.svg";
import x from "../Images/Vector (29).svg";
// import Images from "../components/Navbar/Images1/Images";

const Home = (props) => {
  const modalRef = useRef();
  const overlayRef = useRef();
const btnRef = useRef()




  // const cancelModal = () => {
  //   if (
  //     modalRef.current.style.display === "none" &&
  //     overlayRef.current.style.display === "none"
  //   ) {
  //     modalRef.current.style.display = "none";
  //     overlayRef.current.style.display = "none";
  //     console.log("you");
  //   } else {
  //     modalRef.current.style.display = "none";
  //     overlayRef.current.style.display = "none";
  //     console.log("me");
  //   }
  // };
  const handleModal = () => {
    if (
      modalRef.current.style.display === "none" &&
      overlayRef.current.style.display === "none"
    ) {
      modalRef.current.style.display = "block";
      overlayRef.current.style.display = "block";
      // modalRef.current.style.overflow = 'hidden'
    } else {
      modalRef.current.style.display = "none";
      overlayRef.current.style.display = "none";
    }
  };
  const arr = [
    {
      id: 1,
      img: Rectangle1,
      text: "The 20 Biggest Fashion Companies In Nigeria 2022",
      button: "lifestyle",
    },
    {
      id: 2,
      img: Rectangle2,
      text: "The 20 Biggest Fashion Companies In Nigeria 2022",
      button: "Nature",
    },
    {
      id: 3,
      img: Rectangle3,
      text: "The 20 Biggest Fashion Companies In Nigeria 2022",
      button: "technology",
    },
  ];
  const checkColor = ()=>{
    if(btnRef.current.style.color === 'red'){
      btnRef.current.style.color = 'green'
      console.log('first')
    }else{
      btnRef.current.style.color = 'green'
      console.log('second')
    }
  }
  return (
    <div className="ovdiv">
      <Navbar />
      <div className="homeimgdiv">
        <div className="textdiv">
          <h1 className="header1">Stay Curious.</h1>
          <p className="ptag1">
            Lorem ipsu.m dolor sit ameetur adipiscing elit. Coctetur egestas
            massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
            aliquam id ut.{" "}
          </p>
          <button onClick={handleModal} className="secondbtn">
            Get Started
          </button>
        </div>
      </div>
      <div className="holderdiv">
        {arr.map((pics) => {
          return (
            
            <div className="bg1" key={pics.id}>
              <div>
            
              </div>
              <div className="bg">
                <div className="grid"> 
                <img src={pics.img} alt="" />
               <div>
              
               <button className="trrr" onClick={()=>{
                checkColor()
               }} ref={btnRef}>{pics.button}</button>
                <h4 className="pred"> {pics.text}</h4>;
               </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="fulldiv">
        {/* <div>
          <img src={arr[0].img} alt="" />
          <h4>{arr[0].text}</h4>
        </div> */}

        <div className="background2div">
          <div className="pushdiv">
            <h2 className="header2">Try Postit</h2>
            <p className="postitp">
              Do you want to write or discover stories from writers on any
              topic?
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
        </div>
      </div>
      {/* modal here */}
      {/* <div onClick={handleModal} ref={overlayRef} className="overlay">
        <div ref={modalRef} className="modal">
          <form className="modal-content">
            <div className="xdiv">
              <img  className="x" src={x} alt="" />
            </div>
            <div onClick={(e)=>{
              e.stopPropagation()
          
            }} className="try-div">
              <h2>Join Postit</h2>
              <p>Enter your email address to create an account on Postit.</p>
              <div className="form-div1">
                <label htmlFor="">Username</label>
                <input className="form-inp1" type="text" />
              </div>
              <div className="form-div2">
                <label htmlFor="">Your Email Address</label>
                <input className="form-inp2" type="text" />
              </div>
              <div className="form-div3">
                <label htmlFor="">Password</label>
                <input className="form-inp3" type="text" />
              </div>
              <button className="form-btn1">continue</button>
              <p>Already have an account? Sign In</p>
            </div>
          </form>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Home;
