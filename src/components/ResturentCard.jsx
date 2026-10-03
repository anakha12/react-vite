import { CDN_URL } from "../utils/constant";

const ResturentCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla} = resData?.info;

  return (
    <div className="res-card">
      <img
        className="resto-img"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} rating</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default ResturentCard;
