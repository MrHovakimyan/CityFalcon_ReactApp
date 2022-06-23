import React from "react";
import avatar from "../media/avatar.png";
import logo_1366 from "../media/logo_1366.png";
import arrow_down from "../media/arrow_down.png";

export default function Header() {
  return (
    <div className="header-content">
      <div>
        <img src={logo_1366} alt="Logo" className="header-content-logoImg" />
      </div>

      <div>
        <img src={avatar} alt="Avatar" className="header-content-avatar" />
        <img src={arrow_down} alt="Arrow" className="header-content-arrowDown" />
      </div>
    </div>
  );
}
