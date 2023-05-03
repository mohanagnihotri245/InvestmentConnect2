import React from "react";
import {Link} from "react-router-dom"
import "./BucketCard.scss";

function BucketCard({ BucketCard }) {
  return (
    <Link to = "/basket/123" className="link">
      <div className="BucketCard">
        <img src={BucketCard.img} alt="" />
        <div className="content">
          <div className="info">
            <img src = {BucketCard.pp}/>
            <div className="text">
              <span>{BucketCard.username}</span>
            </div>
          </div>
          <div className="desc">
          <p>
            {BucketCard.desc}
          </p>
          </div>
          <hr/>
          <div className="rating">
            <div className="star">
              <img src = "https://github.com/safak/youtube23/blob/fiverr-ui/public/img/star.png?raw=true" alt = "star"/>
              <h2>{BucketCard.star}</h2>
            </div>
            <div className="price">
              <h2>${BucketCard.price}</h2>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default BucketCard;