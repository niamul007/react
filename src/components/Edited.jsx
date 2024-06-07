import React, { useEffect, useRef } from "react";

function Edited(props) {
  return (
      <div className={`container ${props.darkMode ? "dark" : ""}`}>
        <div className="e-post">
          <h2 className={`edited-text ${props.darkMode ? "dark" : ""}`}>
            Edited posts____
          </h2>
          <img src="post2.jpeg" alt="" className="e-img" />
          <div className="detail">
            <p className="e-tag">Cars</p>
            <p className={`e-title ${props.darkMode ? "dark" : ""}`}>
              Review of New Porsche Cars
            </p>
          </div>
        </div>
        <div className="e-post">
          <img src="post1.jpeg" alt="" className="e-img" />
          <div className="detail">
            <p className="e-tag">Fashion</p>
            <p className={`e-title ${props.darkMode ? "dark" : ""}`}>
              How Lovely Yellow is! It Stands for the Sun
            </p>
          </div>
        </div>
        <div className="e-post">
          <img src="post4.jpeg" alt="" className="e-img" />
          <div className="detail">
            <p className="e-tag">Technology</p>
            <p className={`e-title ${props.darkMode ? "dark" : ""}`}>
              Style Tips Every Woman Should Know
            </p>
          </div>
        </div>
        <div className="e-post">
          <img src="d.jpg" alt="" className="e-img" />
          <div className="detail">
            <p className="e-tag">Food</p>
            <p className={`e-title ${props.darkMode ? "dark" : ""}`}>
              The Most Popular Fast Food Chains{" "}
            </p>
          </div>
        </div>
        <div className="joinContainer">
          <h2 className={`join-us ${props.darkMode ? "dark" : ""}`}>
            Join Us_____
          </h2>
          <a href="#" className="icon-container">
            <i
              class={`fa fa-facebook ${props.darkMode ? "dark" : ""}`}
              aria-hidden="true"
            ></i>
            <p className={`i-name ${props.darkMode ? "dark" : ""}`}>
              Facebook 20k
            </p>
            <p className={`left-i ${props.darkMode ? "dark" : ""}`}>➡</p>
          </a>
          <a href="#" className="icon-container">
            <i
              class={`fa fa-twitter ${props.darkMode ? "dark" : ""}`}
              aria-hidden="true"
            ></i>
            <p className={`i-name ${props.darkMode ? "dark" : ""}`}>
              Twitter 200k
            </p>
            <p className={`left-i ${props.darkMode ? "dark" : ""}`}>➡</p>
          </a>
          <a href="#" className="icon-container">
            <i
              class={`fa fa-linkedin ${props.darkMode ? "dark" : ""}`}
              aria-hidden="true"
            ></i>
            <p className={`i-name ${props.darkMode ? "dark" : ""}`}>
              Linkedin 10k
            </p>
            <p className={`left-i ${props.darkMode ? "dark" : ""}`}>➡</p>
          </a>
          <a href="#" className="icon-container">
            <i
              class={`fa fa-instagram ${props.darkMode ? "dark" : ""}`}
              aria-hidden="true"
            ></i>
            <p className={`i-name ${props.darkMode ? "dark" : ""}`}>
              Instagram 30k
            </p>
            <p className={`left-i ${props.darkMode ? "dark" : ""}`}>➡</p>
          </a>
          <a href="#" className="icon-container">
            <i
              class={`fa fa-github ${props.darkMode ? "dark" : ""}`}
              aria-hidden="true"
            ></i>
            <p className={`i-name ${props.darkMode ? "dark" : ""}`}>
              Github 6k
            </p>
            <p className={`left-i ${props.darkMode ? "dark" : ""}`}>➡</p>
          </a>

          <div className="news-shelter">
            <h2 className={`news ${props.darkMode ? "dark" : ""}`}>
              Newsletter____
            </h2>
            <p className={`text ${props.darkMode ? "dark" : ""}`}>
              Get the latest creative news from Gello magazine
            </p>
            <div className={`sign-up ${props.darkMode ? "dark" : ""}`}>
              <input
                type="email"
                name=""
                id=""
                className={`email ${props.darkMode ? "dark" : ""}`}
                placeholder="Your email address"
              />
              <button className={`sign-up-btn ${props.darkMode ? "dark" : ""}`}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Edited;
