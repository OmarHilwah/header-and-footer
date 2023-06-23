import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="left-footer">
        <p>&copy;logo name 2023 - All Rights reserved.</p>
      </div>
      <div className="right-footer">
        <div className="footer-icons">
          <i class="fa-brands fa-cc-paypal"></i>
          <i class="fa-brands fa-cc-visa"></i>
          <i class="fa-brands fa-cc-mastercard"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
