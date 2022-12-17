import React from "react";
import x from "../Images/Vector (29).svg";

const Login = () => {
  return (
    <div>
      <div className="overlay">
        <div className="modal">
          <form className="modal-content">
            <div className="xdiv">
              <img className="x" src={x} alt="" />
            </div>
            <div className="try-div">
              <h2>Welcome Back</h2>
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
                No account? <a href="/signup">Sign up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
