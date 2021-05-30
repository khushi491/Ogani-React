import React from "react";
import Banner1 from "../../../assets/img/banner/banner-1.jpg";
import Banner2 from "../../../assets/img/banner/banner-2.jpg";

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="banner__pic">
                <img src={Banner1} alt="Banner1" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="banner__pic">
                <img src={Banner2} alt="Banner1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
