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
        description="SAFETY BY DESIGN"
        text="Safety first"
        icon={<AiOutlineSafety size={50} color="#000000" />}
      />
      <Banner
        description="SUPPORT 24/7"
        text="We support 24h a day"
        icon={<MdHeadsetMic size={50} color="#000000" />}
      />
      <Banner
        description="EXPERT SERVICE"
        text="Professionals who know"
        icon={<GrBike size={50} color="#000000" />}
      />
      <Banner
        description="REAPIR"
        text="Expert Mechanics"
        icon={<BsTools size={50} color="#000000" />}
      />
    </div>
  );
};

export default HeroBanner;
