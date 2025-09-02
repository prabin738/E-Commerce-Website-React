import "./Offers.css";
import exclu from "../../assets/exclu.webp";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Best Offers For You</p>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclu} alt="" />
      </div>
    </div>
  );
};

export default Offers;
