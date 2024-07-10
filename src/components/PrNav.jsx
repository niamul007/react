import React from "react";

function PrNav() {
  return (
    <div className="navBar">
      <div className="menu-logo">
        <img
          src="mainLogo.png"
          alt=""
          className="prLogo"
          height="25px"
          width="118px"
        />
      </div>
      <div className="navLink">
        <a href="" className="links">
          About Us<span class="underline"></span>
        </a>
        <a href="" className="links">
          Services<span class="underline"></span>
        </a>
        <a href="" className="links">
          Pricing<span class="underline"></span>
        </a>
        <a href="" className="links">
          News<span class="underline"></span>
        </a>
        <a href="" className="links">
          Contact<span class="underline"></span>
        </a>
      </div>

      <div className="btns">
        <button type="submit" className="btn1">
          Free consultation
        </button>
        <button type="submit" className="btn2">
          Get started
        </button>
      </div>
    </div>
  );
}

export default PrNav;
