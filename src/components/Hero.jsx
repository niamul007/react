import React from 'react'

function Hero(props) {
  return (
    <main className={`main-hero ${props.darkMode? "dark" :''}`}>
    <div className='hero'>
        <div className="hero1">
          <p className="tag">Fashion</p>
          <a className="title">How Lovely Yellow is! It Stands for the Sun</a>
          <div className="author">
            <p className="authorName">GELLO DUE | March 26, 2021 | <a href="#" className="link-post1">Read More</a></p>
          </div>
        </div>
        <div className="hero2">
          <div className="post2">
            <p className="tag">Cars</p>
            <a className="post2-title">Review of New Porsche Cars</a>
          </div>
          <div className="post3">
            <p className="tag">Cars</p>
            <a className="post2-title">Your Car is a Reflection of Your Style</a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
