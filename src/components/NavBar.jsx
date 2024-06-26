import React from "react";

function NavBar(props) {
    const [showDiv,setDiv] = React.useState()
    function handleSearch(){
        setDiv(prevDiv=> !prevDiv)
    }
    const[sideBar,setBar]=React.useState()
    function handleSideBar(){
        setBar(prevBar=> !prevBar)
    }

  return (
    <div className={`navBar ${props.darkMode ? "dark" : ""}`}>
      <div className="links-logo">
        <div className="links">
          <a href="#" className={`mainLogo ${props.darkMode?"dark":''}`}>
            Gello
          </a>

          <a href="#" className={`links-icon ${props.darkMode?"dark":''}`}>
            Home
          </a>
          <a href="#" className={`links-icon ${props.darkMode?"dark":''}`}>
            Features
          </a>
          <a href="#" className={`links-icon ${props.darkMode?"dark":''}`}>
            Tech
          </a>
          <a href="#" className={`links-icon ${props.darkMode?"dark":''}`}>
            Travel
            <span className="travel">New</span>
          </a>
          <a href="#" className={`links-icon ${props.darkMode?"dark":''}`}>
            Fashion
          </a>
          <a href="#" className={`links-icon ${props.darkMode?"dark":''}`}>
            Review
          </a>
          <a href="#" className={`links-icon ${props.darkMode?"dark":''}`}>
            Shop
            <span className="shop">Hot</span>
          </a>
        </div>
      </div>
      <div className={`icons ${props.darkMode?"dark":''}`}>
        <a href="" className="cart">
          <img src="p2.png" alt="cart icon" srcSet="" className="cart-png"/>
          <span className="cart-span">0</span>
        </a>
        <a href="#" className="cart" >
          <img src="p3.png" alt="cart icon" srcSet="" onClick={handleSearch} />
        </a>
        <a href="#" className="cart" >
          <img src="p4.png" alt="cart icon" srcSet="" onClick={handleSideBar}  />
        </a>
      </div>
      {showDiv && <div className="showSearch" >
        <div className="searchBar">
            <input type="search" name="" id="SearchBar" placeholder="Search"/>
            <i className="fa fa-search " aria-hidden="true"></i>
        </div>
        <div className="close">
        <i className="fa fa-times fa-2x " aria-hidden="true" id="forSearch" onClick={handleSearch}></i>
        </div>
        </div>}
        {sideBar && <div className="forSideBar">
            <div className="sideBar">
            <a href="#" className="mainLogo" id="logo">
                Gello
            </a>
            <ul className="list-of-links">
                <li className="closeBar"><i className="fa fa-times fa-2x "  aria-hidden="true"  onClick={handleSideBar}></i></li>
                <li>Home</li>
                <li>Features</li>
                <li>Travel</li>
                <li>Tech</li>
                <li>Shop</li>
                <li>Fashion</li>
                <li>Review</li>
            </ul>
            </div>
            </div>}
            <div className="dark-light" >
              <button type="button" onClick={props.handleMode}>{props.darkMode?"💡":"🌙"}</button>
            </div>
    </div>
  );
}

export default NavBar;
