import "./styles/_global.sass";
import Home from "@Layout/Home/Home";
import Account from "@Sections/Account/Account";
import ProductList from "@Sections/ProductList/ProductList";
import Cart from "@Sections/Cart/Cart";
import Product from "@Sections/ProductList/Product/Product";
import Contact from "@Sections/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ModalProvider } from "./assets/context/modalContext";

function App() {
  return (
    <ModalProvider>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </Router>
      </div>
    </ModalProvider>
  );
}

export default App;
