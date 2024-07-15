import { useEffect } from "react";
import styles from "./banner.module.css";

const Banner = () => {
 

  return (
    <div className={`${styles["banner-style"]}`}>
      <h2 className={`${styles["banner-heading"]}`}>
        Stay Informed. Stay Ahead."
      </h2>
      <p className={`${styles["banner-sec"]}`}>
        Your Source for Breaking News, In-Depth Analysis, and Expert Opinions
      </p>
      <p className={`${styles["banner-para"]}`}>
        We bring you the latest news from around the globe
      </p>
    </div>
  );
};

export default Banner;
