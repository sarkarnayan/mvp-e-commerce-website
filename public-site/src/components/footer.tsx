import "./footer.css";
//this file is for footer only
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__section">
          <h3>CHHAPA</h3>
          <ul>
            <li>Shop</li>
            <li>Mul Cotton Sarees</li>
            <li>Chanderi Sarees</li>
            <li>Unisex T-Shirts</li>
            <li>Cotton Kurtas</li>
            <li>Cotton Dresses</li>
          </ul>
        </div>

        <div className="footer__section">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Reviews</li>
            <li>Blogs</li>
            <li>Request Return</li>
            <li>Wash Care</li>
            <li>Franchise Inquiry</li>
          </ul>
        </div>

        <div className="footer__section">
          <h3>POLICIES</h3>
          <ul>
            <li>Refund & Exchange Policy</li>
            <li>Shipping Policy</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer__section">
          <h3>NEWSLETTER</h3>
          <p>Subscribe to our Emails. NO spam, we promise</p>
          <input type="email" placeholder="Email address" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer__bottom">
        <p>©2025, SHROBON.com All Rights Reserved.</p>
        <div className="footer__socials">
          <span>📘</span>
          <span>🐦</span>
          <span>📸</span>
          <span>📌</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
