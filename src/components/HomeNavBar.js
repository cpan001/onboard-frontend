import React from "react";
import { NavLink } from "react-router-dom";

function HomeNavBar(props) {
  console.log(props);
  return (
    <div className="homenavbar">
      <div className="navlink">
        <NavLink to={`/users/${props.userId}/rooms/${props.roomId}/interviews`}>
          Interviews
        </NavLink>
      </div>
      <div className="navlink">
        <NavLink to={`/users/${props.userId}/rooms/${props.roomId}/alumni`}>
          Alumni Page
        </NavLink>
      </div>
    </div>
  );
}

export default HomeNavBar;
