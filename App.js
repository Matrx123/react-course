import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/free-delivery-logo-with-bike-man-courier_1308-48827.jpg?w=1380&t=st=1698240274~exp=1698240874~hmac=994a8c98de2b74cda18470eb3193499079d0d0600ec7f870282acfd72311237e"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestrauntCard
          resName="Meghna Foods"
          cuisine="Biryani, North Indian, South Indian"
        />
        <RestrauntCard
          resName="Burger point"
          cuisine="Burgers, North Indian, Fast food"
        />
        <RestrauntCard
          resName="KFC"
          cuisine="Biryani, Fried Chicken, Chicken Bucket"
        />
        <RestrauntCard
          resName="Mc Donalds"
          cuisine="Burgers, Fries, Fast food"
        />
      </div>
    </div>
  );
};

const RestrauntCard = ({ resName, cuisine }) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
        alt="res-logo"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 Stars</h4>
      <h4>22 Minutes</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
