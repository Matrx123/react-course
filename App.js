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
      <div className="search"></div>
      <div className="res-container">
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
      </div>
    </div>
  );
};

const RestrauntCard = () => {
  return (
    <div className="res-card">
      <div className="res-logo">
        <img
          className="res-logo-img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
          alt="res-logo"
        />
      </div>
      <h3>Burger King</h3>
      <div className="rating-container">
        <h3>4.4</h3>
        <h3>22 Mins</h3>
      </div>
      <div className="food-items">
        <h3>Burgers, American</h3>
      </div>
      <div className="location">
        <h3>Kalyanpur</h3>
      </div>
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
