import react from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Lp1 from "../../assets/img/latest-product/lp-1.jpg";
import Lp2 from "../../assets/img/latest-product/lp-2.jpg";
import Lp3 from "../../assets/img/latest-product/lp-3.jpg";

const LetestProduct = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },

    LargeDesktop: {
      breakpoint: { max: 2999, min: 1801 },
      items: 5,
    },

    desktop: {
      breakpoint: { max: 1800, min: 1101 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1100, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button
        className="carousel-arrow carousel-arrow-right"
        onClick={() => onClick()}
      >
        <i class="arrow-right-heavy-orange"></i>
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button
        className="carousel-arrow carousel-arrow-left"
        onClick={() => onClick()}
      >
        <i class="arrow-left-heavy-orange"></i>
      </button>
    );
  };

  return (
    <div>
      <div className="sidebar__item">
        <div className="latest-product__text">
          <h4>Latest Products</h4>
          <div className=" categories__slider basic-carousel">
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={true}
              showDots={true}
              renderDotsOutside
              infinite={true}
              autoPlay={props.deviceType !== "mobile" ? true : false}
              autoPlay
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all 2s"
              transitionDuration={5000}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              itemClass="carousel-item padding-40-px"
              customRightArrow={<CustomRightArrow />}
              customLeftArrow={<CustomLeftArrow />}
              // want to know still about following props
              deviceType={props.deviceType}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div className="latest-prdouct__slider__item">
                <a href="void(0)" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={Lp1} alt="Lp1" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>

                <a href="void(0)" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={Lp3} alt="Lp3" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="void(0)" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={Lp3} alt="Lp3" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>

              <div className="latest-prdouct__slider__item">
                <a href="void(0)" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={Lp1} alt="Lp1" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="void(0)" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={Lp2} alt="Lp2" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="void(0)" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={Lp3} alt="Lp3" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetestProduct;
