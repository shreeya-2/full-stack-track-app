import React from "react";
import "./Homepage.scss";
import background from "../.././assets/homepage-bg.jpeg";
import Nav from "../Nav/Nav";

const Homepage = () => {
  return (
    <div className="homepage">
      <Nav />
      <img src={background} className="homepage__background" />
      <h2 className="homepage__header"> 01 RACE TRACKS</h2>
      <h3 className="homepage__subheader">
        Discover all the high speed circuits of{" "}
        <span className="homepage__subheader--focus">Formula One</span>
      </h3>
      <p className="homepage__content">This where the cards go</p>
    </div>
  );
};

export default Homepage;
