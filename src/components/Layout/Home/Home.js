import Layout from "../Layout";
import Hero from "../../Hero/Hero";
import Models from "../../Models/Models";
import Reviews from "../../Reviews/Reviews";
import CustomerPhoto from "../../CustomerPhoto/CustomerPhoto";
const Home = () => {
  return (
    <Layout>
      <Hero />
      <Models />
      <Reviews />
      <CustomerPhoto />
    </Layout>
  );
};

export default Home;
