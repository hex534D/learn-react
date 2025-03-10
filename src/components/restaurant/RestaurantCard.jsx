const RestaurantCard = (props) => {
  const { name, img, avgRating, cuisine, deliveryTime } = props;
  return (
    <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
      <img src={img} alt="Restaurant Image" />
      <h3 className="res-name">
        {name} <span>{avgRating} stars</span>
      </h3>
      <h4>{cuisine}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};


export default RestaurantCard;