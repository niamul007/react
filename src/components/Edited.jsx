import React from 'react'

function Edited(props) {
  return (
    <div className={`container ${props.darkMode? "dark" :''}`}>
        <div className="e-post">
            <h2 className={`edited-text ${props.darkMode? "dark" :''}`}>Edited posts____</h2>
            <img src="post2.jpeg" alt="" className="e-img" />
            <div className="detail">
                <p className="e-tag">Cars</p>
                <p className={`e-title ${props.darkMode? "dark" :''}`}>
                Review of New Porsche Cars
                </p>
            </div>
        </div>
        <div className="e-post">
            <img src="post1.jpeg" alt="" className="e-img" />
            <div className="detail">
                <p className="e-tag">Fashion</p>
                <p className={`e-title ${props.darkMode? "dark" :''}`}>
                How Lovely Yellow is! It Stands for the Sun
                </p>
            </div>
        </div>
        <div className="e-post">
            <img src="post4.jpeg" alt="" className="e-img" />
            <div className="detail">
                <p className="e-tag">Technology</p>
                <p className={`e-title ${props.darkMode? "dark" :''}`}>
                Style Tips Every Woman Should Know
                </p>
            </div>
        </div>
        <div className="e-post">
            <img src="d.jpg" alt="" className="e-img" />
            <div className="detail">
                <p className="e-tag">Food</p>
                <p className={`e-title ${props.darkMode? "dark" :''}`}>
                The Most Popular Fast Food Chains </p>
            </div>
        </div>
        <div className="joinContainer">
            <h2 className="join-us">
                Join Us_____
            </h2>
            <a href='#' className="icon-container">
                <i class="fa fa-facebook " aria-hidden="true"></i>
                <p className="i-name">Facebook 20k</p>
                <p className="left-i">➡</p>
            </a>
            <a href='#' className="icon-container">
            <i class="fa fa-twitter" aria-hidden="true"></i>
                <p className="i-name">Twitter 200k</p>
                <p className="left-i">➡</p>
            </a>
            <a href='#' className="icon-container">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
                <p className="i-name">Linkedin 10k</p>
                <p className="left-i">➡</p>
            </a>
            <a href='#' className="icon-container">
            <i class="fa fa-instagram" aria-hidden="true"></i>
                <p className="i-name">Instagram 30k</p>
                <p className="left-i">➡</p>
            </a>
            <a href='#' className="icon-container">
            <i class="fa fa-github" aria-hidden="true"></i>
                <p className="i-name">Github 6k</p>
                <p className="left-i">➡</p>
            </a>
        </div>
    </div>
  )
}

export default Edited
