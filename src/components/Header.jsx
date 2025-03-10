import { APP_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src={APP_LOGO}
          height="20px"
          alt="Food app logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


export default Header;