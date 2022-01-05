/* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import ProductListItem from "./pages/ProductListItem/ProductListItem";
import ContactForm from "./pages/Contact/ContactForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./sassStyles/_global.sass";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/siamese" element={<ProductListItem />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
