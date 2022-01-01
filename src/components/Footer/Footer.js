import "./footer.sass";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import Fade from "react-reveal/Fade";
import FooterDetails from "./FooterDetails";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="footer__container">
        <Fade bottom>
          <FooterDetails titleOne="Company" titleTwo="Materials" titleThree="Our Process" />
          <FooterDetails titleOne="Setup" titleTwo="Warranty" titleThree="Bike Registration" />
          <FooterDetails
            titleOne="Contact Us"
            titleTwo="Dealer Locator"
            titleThree="Shipping/Returns"
          />
          <address className="footer__address">
            <div className="footer__social">
              <FaFacebookF className="footer__social-icon" />
              <RiInstagramLine className="footer__social-icon" />
              <BsTwitter className="footer__social-icon" />
            </div>
            <form className="form">
              <p className="form__title">Subscribe to our newsletter</p>
              <input className="form__input" placeholder="E-mail" type="email" />
              <input className="form__submit" type="submit" value="OK" />
            </form>
          </address>
        </Fade>
      </footer>
    </div>
  );
};

export default Footer;
