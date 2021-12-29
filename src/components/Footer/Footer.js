import "./footer.sass";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="details">
          <p>Company</p>
          <p>Materials</p>
          <p>Our Process</p>
        </div>
        <div className="details">
          <p>Setup</p>
          <p>Warranty</p>
          <p>Bike Registration</p>
        </div>
        <div className="details">
          <p>Contact Us</p>
          <p>Dealer Locator</p>
          <p>Shipping/Returns</p>
          <p>Careers</p>
        </div>
        <address className="address">
          <div className="socials">
            <FaFacebookF className="social-icon" />
            <RiInstagramLine className="social-icon" />
            <BsTwitter className="social-icon" />
          </div>
          <p>Subscribe to our newsletter</p>
          <form>
            <input placeholder="E-mail" type="email" className="form-item" />
            <input type="submit" value="OK" className="form-submit" />
          </form>
        </address>
      </footer>
    </div>
  );
};

export default Footer;
