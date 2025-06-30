import React from 'react';
import './footer.css';
import UserForm from './Userform'; // ✅ Import your form component

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p>© 2025 My E-commerce Site</p>
        {/* Add more static footer content here if needed */}
      </div>

      {/* 📬 User input form section */}
      <UserForm />
    </footer>
  );
};

export default Footer;
