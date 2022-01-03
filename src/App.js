/* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import ProductListItem from "./pages/ProductListItem/ProductListItem";
import "./sassStyles/_global.sass";

function App() {
  return (
    <div className="app">
      <Navbar />
      <ProductListItem />
      {/* <Cart /> */}
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
