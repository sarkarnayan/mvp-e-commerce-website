import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__top-banner">
        FREE DOMESTIC SHIPPING ON ALL ORDERS ₹700+
      </div>
      <div className="navbar__main">
        <div className="navbar__logo">SHROBON.com</div>
        <nav className="navbar__menu">
          <Link to="/shop">Shop</Link>
          <Link to="/offers">Offers</Link>
          <Link to="/bestsellers">Best Sellers</Link>
          <Link to="/newarrivals">New Arrivals</Link>
          <Link to="/about">About</Link>
          <Link to="/help" target="_blank">Help</Link>
        </nav>
        <div className="navbar__icons">
          <input className="section input" type="email" placeholder="Search For Products" />
          <span>🔍</span>
          <span>❤️</span>
          <span>👤</span>
          <span>🛒</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
