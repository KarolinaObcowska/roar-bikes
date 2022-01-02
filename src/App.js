/* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Cart />
      {/* <LandingPage /> */}
      <Footer />
    </div>
  );
}

export default App;
