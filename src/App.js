import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Models from "./components/Models/Models";
import Reviews from "./components/Reviews/Reviews";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Models />
      <Reviews />
    </div>
  );
}

export default App;
