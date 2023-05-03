import React from "react";
import "./Home.scss";

import {cards, buckets} from "../../src/data";

import Featured from "../../components/featured/Featured";
import Card from "../../components/card/Card";
import BucketCard from "../../components/bucketCard/BucketCard";
import Slide from "../../components/slide/Slide";

const Home = () => {
    return(
        <div className="home">
            <Featured/>
            <Slide slidesToShow={5} arrowsScroll={5} cardname = "Managers">
            {cards.map((card) => (
                <Card id={card.id} card = {card}></Card>
            ))}
            </Slide>
            <br/>
            <br/>
            <Slide slidesToShow={3} arrowsScroll={3} cardname="Buckets">
            {buckets.map((bucket) => (
                <BucketCard id={bucket.id} BucketCard = {bucket}></BucketCard>
            ))}
            </Slide>
        </div>
    )
}

export default Home;