import React from "react";
import "./Mystory.css";

const Mystory = () => {
  return (
    <div>
      <div className="d-firstdiv">
        <h1>My story</h1>
        <button>Write Story</button>
      </div>
      <div className="d-parentdiv">
        <div className="d-secondiv">
          <a href="">All</a>
          <a href="">Drafts</a>
          <a href="">Published</a>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Mystory;
