import React from "react";
import "./Footer.css";
import Arrow from "../../../Images/Vector (28).svg";
import twitter from '../../../Images/twitter.svg'
import linkedin from '../../../Images/insta.svg'
import facebook from '../../../Images/facebook.svg'

const Footer = () => {
  return (
    <div className="overalldiv1">
      <div className="overalldiv2 ">
        <div className="div1">
          <h3>About Postit</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            id sem vel quis in turpis sit eget pellentesque. Nunc etiicies in
            rhoncus, rhoncus in arcu. Tincidunt neque fusce vitaenisi aliquet.
            que maeae tortoere necsem commodo ac.
          </p>
        </div>
        <div className="div2">
          <h3>Quick Menu</h3>
          <p>Home</p>
          <p>Stories</p>
          <p>Trending Stories</p>
          <p>Popular Stories</p>
        </div>
        <div className="div3">
          <p>Sign up</p>
          <p>Log in </p>
          <p>Contact Us</p>
        </div>

        <div className="div4">
          <h3>Subscribe to our newsletter </h3>
          <input className="inp3" type="text" placeholder="Email address" />
          <div className="btndiv4">
            <button className="btn4">
              Subscribe
              <img className="arr" src={Arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="div5"> 
      <h4>Terms and policy</h4>
      <img src={twitter} alt="" />
      <img src={facebook} alt="" />
      <img src={linkedin} alt="" />
      </div>
    </div>
  );
};

export default Footer;
