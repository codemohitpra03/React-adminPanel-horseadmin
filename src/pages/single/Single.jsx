import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">
              Edit
            </div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt4a59805a8234ccc3/60df000cee9c2f22052cca6b/16c84589a1ceef313e45c4a39b0f28f2cbeaaf85.jpg?quality=80&width=1000&format=pjpg&auto=webp" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Leo Messi</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">leomessi@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91 222 222 2222</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Camp Nou, Spain</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Argentina</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="User Spending ( last 6 Months )"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single