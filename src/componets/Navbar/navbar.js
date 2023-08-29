import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  const handelNavBarItemClick = () => {
    console.log = "hello";
  };
  return (
    <div>
      <div className="navBarContainer">
        <div className="headingName"> Sanmeet Singh</div>
        <div className="navBarItems">
          {["About", "Resume", "Projects", "Contact"].map((element) => (
            <>
              <p
                key={element}
                onClick={() => handelNavBarItemClick(element)}
                className="items"
              >
                {" "}
                {element}{" "}
              </p>
            </>
          ))}
        </div>
        <div className="navIcons">github</div>
      </div>
    </div>
  );
}
