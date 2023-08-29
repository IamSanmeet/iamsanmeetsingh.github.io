import React from "react";
import logointro from "../../assets/logoIntro.jpg";
import "./Intro.scss";

export default function Intro() {
  return (
    <>
      <div className="introCointainer">
        <div className="introInformation">
          <p className="introTitle">Welcome to my portfolio website </p>
          <h1 className=" intoHeading"> Hey Folks , I'm Sanmeet Singh</h1>
          <p className="introDescription">
            {" "}
            I'm Sanmeet Singh, a Computer Science major with a minor in game
            design from Indiana University. Specializing in AI, I co-founded the
            Road Safety Club, led the Photography club, and actively volunteered
            in NGOs for education and community welfare, including teaching
            underprivileged children and contributing to charity programs.
          </p>
          <div className="introButtonContainer">
            <button className="introDownloadButton">Download Resume </button>
            <button className="introNavButton"> At a Glance </button>
          </div>
        </div>
        <div>
          {" "}
          <img className="introImage" src={logointro} />
        </div>
      </div>
    </>
  );
}
