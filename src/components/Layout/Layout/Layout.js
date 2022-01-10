import PropTypes from "prop-types";
import Navbar from "../Navigation/Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired
};

export default Layout;
