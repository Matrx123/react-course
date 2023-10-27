import { resObj } from "../utils/constants";
import RestrauntCard from "./RestrauntCard";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn">Top Rated Restraunts</button>
      </div>
      <div className="res-container">
        {resObj.map((item) => {
          return <RestrauntCard key={item?.info?.id} resData={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
