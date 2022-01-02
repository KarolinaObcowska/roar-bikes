import CustomerPhoto from "../../components/CustomerPhoto/CustomerPhoto";
import Hero from "../../components/Hero/Hero";
import Models from "../../components/Models/Models";
import Reviews from "../../components/Reviews/Reviews";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Models />
      <Reviews />
      <CustomerPhoto />
    </>
  );
};

export default LandingPage;
