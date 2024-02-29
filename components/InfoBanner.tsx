import React from "react";
import styles from "../styles/InfoBanner.module.scss";

const InfoBanner = () => {
  return (
    <div>
      <div className={styles.banners}>
        <div className={styles.banners__container}>
          <div className={styles.banners__row}>
            <div>
              {" "}
              <span data-banner-alt="">
                <img
                  src="//ideacdn.net/idea/fd/64/myassets/banner_pictures/banner_29.png?revision=1572263920"
                  alt=""
                />
              </span>
            </div>
            <div>
              {" "}
              <span data-banner-alt="">
                <img
                  src="//ideacdn.net/idea/fd/64/myassets/banner_pictures/banner_30.png?revision=1572263959"
                  alt=""
                />
              </span>
            </div>
            <div>
              {" "}
              <span data-banner-alt="">
                <img
                  src="//ideacdn.net/idea/fd/64/myassets/banner_pictures/banner_31.png?revision=1572263966"
                  alt=""
                />
              </span>
            </div>
            <div>
              {" "}
              <span data-banner-alt="">
                <img
                  src="//ideacdn.net/idea/fd/64/myassets/banner_pictures/banner_28.png?revision=1572263949"
                  alt=""
                />
              </span>
            </div>
            <div>
              {" "}
              <span data-banner-alt="">
                <img
                  src="//ideacdn.net/idea/fd/64/myassets/banner_pictures/banner_32.png?revision=1673292289"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
