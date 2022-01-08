import { bike1, bike2, bike3 } from "@Images/bike-small-picks";
import { Bike1, Bike2, Bike3 } from "@Images/bike-main-picks";
import "./styles/_global.sass";
import Home from "@Layout/Home/Home";
import Cart from "@Sections/Cart/Cart";
import Product from "@Sections/ProductList/Product/Product";
import Contact from "@Sections/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/product/siamese"
            element={<Product key="1" price={3400} name="Siamese" mainPhoto={Bike1} data={bike1} />}
          />
          <Route
            path="/product/sphynx"
            element={<Product key="2" price={2700} name="Sphynx" mainPhoto={Bike2} data={bike2} />}
          />
          <Route
            path="/product/bengal"
            element={<Product key="3" price={3100} name="Bengal" mainPhoto={Bike3} data={bike3} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
