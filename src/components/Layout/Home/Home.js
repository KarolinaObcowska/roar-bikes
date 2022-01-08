import Layout from "@Layout/Layout/Layout";
import Hero from "@Sections/Hero/Hero";
import Models from "@Sections/Models/Models";
import Reviews from "@Sections/Reviews/Reviews";
import CustomerPhoto from "@Sections/CustomerPhoto/CustomerPhoto";
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
