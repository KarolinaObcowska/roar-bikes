import styles from "./Banner.module.sass";
import Card from "../Card/Card";
import { MdHeadsetMic } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { GrBike } from "react-icons/gr";
import { BsTools } from "react-icons/bs";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Card
        title="SAFETY BY DESIGN"
        description="Safety first"
        icon={<AiOutlineSafety className={styles.cardIcon} color="#000000" />}
      />
      <Card
        title="SUPPORT 24/7"
        description="We support 24h a day"
        icon={<MdHeadsetMic className={styles.cardIcon} color="#000000" />}
      />
      <Card
        title="EXPERT SERVICE"
        description="Professionals who know"
        icon={<GrBike className={styles.cardIcon} color="#000000" />}
      />
      <Card
        title="REAPIR"
        description="Expert Mechanics"
        icon={<BsTools className={styles.cardIcon} color="#000000" />}
      />
    </div>
  );
};

export default Banner;
