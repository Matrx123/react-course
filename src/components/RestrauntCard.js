import { CDN_URL } from "../utils/constants";

const RestrauntCard = ({ resData }) => {
  const { info } = resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={`${CDN_URL}${info?.cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3>{info?.name}</h3>
      <h4>{info?.cuisines.join(", ")}</h4>
      <h4>{`${info?.avgRatingString} Stars`}</h4>
      <h4>{info?.sla?.slaString}</h4>
    </div>
  );
};

export default RestrauntCard;
