import React from "react";
import { useState, useRef } from "react";
import "./Baskets.scss";

import BucketCard from "../../components/bucketCard/BucketCard";
import { buckets } from "../../src/data";

const Baskets = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = ()=>{
    console.log(minRef.current.value)
    console.log(maxRef.current.value)
  }

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">Buckett - Windmill Capital</span>
        <h1>Windmill Capital</h1>
        <div className="menu">
          <div className="left">
            <span>Value</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Highest Rating" : "Newest"}
            </span>
            <img src="https://github.com/safak/youtube23/blob/fiverr-ui/public/img/down.png?raw=true" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Highest Rating</span>
                  )}
                  <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
        {buckets.map((bucket) => (
            <BucketCard key={bucket.id} BucketCard={bucket}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Baskets;