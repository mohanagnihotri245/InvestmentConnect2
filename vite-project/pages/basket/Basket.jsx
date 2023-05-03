import React from "react";
import "./Basket.scss";

const Basket = () => {
    return(
        <div className="basket">
            <div className="intro">
                <div className="text">
                    <h1>Altarock Partners</h1>
                    <h3>Manager Name</h3>
                    <p>Caption any of the given.</p>
                </div>
                <div className="data">
                    <div className="oneperf">
                        <h1>5.36%</h1>
                        <p>1 Year Performance</p>
                    </div>
                    <div className="oneperf">
                        <h1>11.25%</h1>
                        <p>5 Year Performance</p>
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="desc">
                    <h2>About the bucket</h2>
                    <p>This smallcase is ideal for all types of market conditions. It will ensure that neither will your investment ship sink, nor will the investment flight soar to scary heights. What you will get here is a steady ride to help you meet your long-term investment goals.All Weather Investing is a popular strategy that ensures your investments do well in good as well as bad times. This is a long-term investment strategy that you can use to build wealth over the years to come.All Weather Investing is a popular strategy that ensures your investments do well in good as well as bad times. This is a long-term investment strategy that you can use to build wealth over the years to come.</p>
                </div>
                <div className="card">
                <h2>Statistics</h2>
                    <div className="stats">
                        <div className="stat">
                            <h1>5.36%</h1>
                            <p>Market Capital</p>
                        </div>
                        <div className="stat">
                            <h1>5.36%</h1>
                            <p>Divident Yield</p>
                        </div>
                        <div className="stat">
                            <h1>5.36%</h1>
                            <p>P/E Ratio</p>
                        </div>
                        <div className="stat">
                            <h1>5.36%</h1>
                            <p>P/B Ratio</p>
                        </div>
                        <div className="stat">
                            <h1>50</h1>
                            <p>No of Users</p>
                        </div>
                        <div className="stat">
                            <h1>7.91%</h1>
                            <p>Rate of Interest</p>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="list">
            <table>
                <tr>
                    <th>Company Name</th>
                    <th>% of Portfolio</th>
                    <th>Avg Buy Price</th>
                    <th>Gain %</th>
                    <th>Current Price</th>
                </tr>
                <tr>
                    <td>Windmill Corporate</td>
                    <td>10</td>
                    <td>$500</td>
                    <td>13</td>
                    <td>$321</td>
                </tr>
                <tr>
                    <td>Windmill Corporate</td>
                    <td>10</td>
                    <td>$500</td>
                    <td>13</td>
                    <td>$321</td>
                </tr>
                <tr>
                    <td>Windmill Corporate</td>
                    <td>10</td>
                    <td>$500</td>
                    <td>13</td>
                    <td>$321</td>
                </tr>
                <tr>
                    <td>Windmill Corporate</td>
                    <td>10</td>
                    <td>$500</td>
                    <td>13</td>
                    <td>$321</td>
                </tr>
                <tr>
                    <td>Windmill Corporate</td>
                    <td>10</td>
                    <td>$500</td>
                    <td>13</td>
                    <td>$321</td>
                </tr>
                <tr>
                    <td>Windmill Corporate</td>
                    <td>10</td>
                    <td>$500</td>
                    <td>13</td>
                    <td>$321</td>
                </tr>
                </table>
            </div>
        </div>
    )
}

export default Basket;