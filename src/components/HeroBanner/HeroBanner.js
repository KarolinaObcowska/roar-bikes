import "./heroBanner.sass";
import Banner from "./Banner";

const HeroBanner = () => {
  return (
    <div className="banner">
      <Banner description="SAFETY BY DESIGN" text="Safety first" />
      <Banner description="SUPPORT 24/7" text="We support 24h a day" />
      <Banner description="EXPERT SERVICE" text="Professionals who know" />
      <Banner description="REAPIR" text="Expert Mechanics" />
    </div>
  );
};

export default HeroBanner;
