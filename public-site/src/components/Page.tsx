import './navbar.css';
// this file is for header only

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__top-banner">FREE DOMESTIC SHIPPING ON ALL ORDERS ₹700+</div>
      <div className="navbar__main">
        <div className="navbar__logo">SROBON.com</div>
        <nav className="navbar__menu">
          <a href="./shop/shop.tsx" target='self'>Shop</a>
          <a href="./offers/offers.tsx" target='self'>Offers</a>
          <a href="./BestSellers/BestSellers.tsx" target='self'>Best Sellers</a>
          <a href="./NewArrivals/newArrivals.tsx" target='self'>New Arrivals</a>
          <a href="./About/about.tsx" target='self'>About</a>
          <a href="./Help/help.tsx" target='blank'>Help</a>
        </nav>
        <div className="navbar__icons">
        <input className='section input' type="email" placeholder="Search For Products" />
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
