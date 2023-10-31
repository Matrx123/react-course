import { useState } from "react";
import { resObj } from "../utils/mockData";
import RestrauntCard from "./RestrauntCard";

const Body = () => {
  const [restraunts, setRestraunts] = useState(resObj);

  const filterRestraunts = () => {
    const _data = restraunts.filter((item) => item.info?.avgRating >= 4);
    setRestraunts(_data);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filterRestraunts();
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="res-container">
        {restraunts.map((item) => {
          return <RestrauntCard key={item?.info?.id} resData={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
