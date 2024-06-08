import React from "react";

function Footer(props) {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className='take-all'>
          <div className="logo">
            <p className="f-log">Gello</p>
            <p className="f-phone">📞 +34 9xx xxx xxx</p>
            <p className="f-contact">🏠Hong Kong 122, Pak Road</p>
          </div>
          <div className="populer-post">
                <p className="f-populer">Populer Posts</p>
                <div className="p-post1">
                    <a href="" className="p-post">
                    <span className="p-span">01</span>
                    The Trend of Women’s Clothing
                    </a>
                    <p className="p-time">March 18, 2021
                    </p>
                </div>
                <div className="p-post1">
                    <a href="" className="p-post">
                    <span className="p-span">02</span>
                    How Lovely Yellow is! It Stands for the Sun 
                    </a>
                    <p className="p-time">March 25, 2021
                    </p>
                </div>
          </div>
          <div className="cat">
            <p className="f-cat">
            Categories
            </p>
            <div className="all-cat">
            <a href="#" className="cat-item">Travel</a>
            <a href="#" className="cat-item">Technology</a>
            <a href="#" className="cat-item">Sports</a>
            <a href="#" className="cat-item">Fashion</a>
            <a href="#" className="cat-item">Food</a>
            <a href="#" className="cat-item">Tech</a>
            <a href="#" className="cat-item">Cars</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-txt">
        <p className="f-txt">
        Copyright © 2024 Gello | Powered by WordPress.
        </p>
        <div className="socil-link">
            <a href="" className="link">
            <i
              class={`fa fa-facebook ${props.darkMode ? "dark" : ""}`}
              aria-hidden="true"
            ></i>
            </a>
            <a href="" className="link">
            <i
              class={`fa fa-twitter ${props.darkMode ? "dark" : ""}`}
              aria-hidden="true"
            ></i>
            </a>
            <a href="" className="link">
            <i
              class={`fa fa-instagram ${props.darkMode ? "dark" : ""}`}
              aria-hidden="true"
            ></i>
            </a>
            <a href="" className="link">
            <i
              class={`fa fa-linkedin ${props.darkMode ? "dark" : ""}`}
              aria-hidden="true"
            ></i>
            </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
