import React from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import x from "../Images/Vector (29).svg";

const Signup = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();

  const url = "http://localhost:5000/signup";
  const redirect = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, username }),
    }).then(() => {
      //   redirect('/login')
      console.log("done");
    });
  };
  return (
    <div>
      <div className="overlay">
        <div>
          <div className="modal">
            <form onSubmit={handleSubmit} className="modal-content">
              <div className="xdiv">
                <img className="x" src={x} alt="" />
              </div>
              <div className="try-div">
                <h2>Join Postit</h2>
                <p>Enter your email address to create an account on Postit.</p>
                <div className="form-div1">
                  <label htmlFor="">Username</label>
                  <input name="username" className="form-inp1" type="text" />
                </div>
                <div className="form-div2">
                  <label htmlFor="">Your Email Address</label>
                  <input name="email" className="form-inp2" type="text" />
                </div>
                <div className="form-div3">
                  <label htmlFor="">Password</label>
                  <input name="password" className="form-inp3" type="text" />
                </div>
                <button type="submit" className="form-btn1">
                  continue
                </button>
                <p>
                  Already have an account?<a href="/login"> Sign In</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
