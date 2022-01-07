import { Bike1, Bike2, Bike3 } from "./img/bike-main-picks";
import { bike1_1, bike1_2, bike1_3, bike1_4, bike1_5 } from "./img/bike-small-picks";
import { bike2_1, bike2_2, bike2_3, bike2_4, bike2_5 } from "./img/bike-small-picks";
import { bike3_1, bike3_2, bike3_3, bike3_4, bike3_5 } from "./img/bike-small-picks";
import Home from "@Layout/Home/Home";
import Cart from "@Sections/Cart/Cart";
import Product from "@Sections/ProductList/Product/Product";
import Contact from "@Sections/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/_global.sass";

function App() {
  const bike1 = [bike1_1, bike1_2, bike1_3, bike1_4, bike1_5];
  const bike2 = [bike2_1, bike2_2, bike2_3, bike2_4, bike2_5];
  const bike3 = [bike3_1, bike3_2, bike3_3, bike3_4, bike3_5];
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/product/siamese"
            element={
              <Product key="1" price="$3400" name="Siamese" mainPhoto={Bike1} data={bike1} />
            }
          />
          <Route
            path="/product/sphynx"
            element={<Product key="2" price="$2700" name="Sphynx" mainPhoto={Bike2} data={bike2} />}
          />
          <Route
            path="/product/bengal"
            element={<Product key="3" price="$3100" name="Bengal" mainPhoto={Bike3} data={bike3} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
