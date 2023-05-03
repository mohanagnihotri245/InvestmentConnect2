import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
             Perfect <span>Bucket</span> for Perfect portfolio
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="https://raw.githubusercontent.com/safak/youtube23/fiverr-ui/public/img/search.png" alt="" />
              <input type="text" placeholder='Try "Auto Tracker"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Equity & Gold</button>
            <button>Green energy</button>
            <button>Top 100</button>
            <button>Small Cap</button>
          </div>
        </div>
        <div className="right">
          <img src="https://raw.githubusercontent.com/safak/youtube23/fiverr-ui/public/img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;