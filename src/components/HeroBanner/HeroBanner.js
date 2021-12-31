import "./heroBanner.sass";
import Banner from "./Banner";
import { MdHeadsetMic } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { GrBike } from "react-icons/gr";
import { BsTools } from "react-icons/bs";
const HeroBanner = () => {
  return (
    <div className="banner">
      <Banner
        title="SAFETY BY DESIGN"
        description="Safety first"
        icon={<AiOutlineSafety className="card__icon" color="#000000" />}
      />
      <Banner
        title="SUPPORT 24/7"
        description="We support 24h a day"
        icon={<MdHeadsetMic className="card__icon" color="#000000" />}
      />
      <Banner
        title="EXPERT SERVICE"
        description="Professionals who know"
        icon={<GrBike className="card__icon" color="#000000" />}
      />
      <Banner
        title="REAPIR"
        description="Expert Mechanics"
        icon={<BsTools className="card__icon" color="#000000" />}
      />
    </div>
  );
};

export default HeroBanner;
