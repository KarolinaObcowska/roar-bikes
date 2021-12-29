import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Models from "./components/Models/Models";
import Reviews from "./components/Reviews/Reviews";
import CustomerPhoto from "./components/CustomerPhoto/CustomerPhoto";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Models />
      <Reviews />
      <CustomerPhoto />
      <Footer />
    </div>
  );
}

export default App;
