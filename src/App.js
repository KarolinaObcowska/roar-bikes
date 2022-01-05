/* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import ProductListItem from "./pages/ProductListItem/ProductListItem";
import ContactForm from "./pages/Contact/ContactForm";
import "./sassStyles/_global.sass";

function App() {
  return (
    <div className="app">
      <Navbar />
      <ContactForm />
      {/* <ProductListItem /> */}
      {/* <Cart /> */}
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
