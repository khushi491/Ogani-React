import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cart1 from "../../../assets/img/categories/cat-1.jpg";
import Cart2 from "../../../assets/img/categories/cat-2.jpg";
import Cart3 from "../../../assets/img/categories/cat-3.jpg";
import Cart4 from "../../../assets/img/categories/cat-3.jpg";
import Cart5 from "../../../assets/img/categories/cat-3.jpg";

const CategoriesSection = (props) => {
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
    <section className="categories">
      <div className="container">
        <div className="row">
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
              <div className="col-lg-10">
                <div
                  className="categories__item set-bg"
                  data-setbg="img/categories/cat-1.jpg"
                  style={{ backgroundImage: `url(${Cart1})` }}
                >
                  <h5>
                    <a href="void(0)">Fresh Fruit</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-10">
                <div
                  className="categories__item set-bg"
                  data-setbg="img/categories/cat-2.jpg"
                  style={{ backgroundImage: `url(${Cart2})` }}
                >
                  <h5>
                    <a href="void(0)">Dried Fruit</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-10 ">
                <div
                  className="categories__item set-bg"
                  data-setbg="img/categories/cat-3.jpg"
                  style={{ backgroundImage: `url(${Cart3})` }}
                >
                  <h5>
                    <a href="void(0)">Vegetables</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-10">
                <div
                  className="categories__item set-bg"
                  data-setbg="img/categories/cat-4.jpg"
                  style={{ backgroundImage: `url(${Cart4})` }}
                >
                  <h5>
                    <a href="void(0)">drink fruits</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-10">
                <div
                  className="categories__item set-bg"
                  data-setbg="img/categories/cat-5.jpg"
                  style={{ backgroundImage: `url(${Cart5})` }}
                >
                  <h5>
                    <a href="void(0)">drink fruits</a>
                  </h5>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const BasicUsage = (props) => {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 6,
//     },

//     LargeDesktop: {
//       breakpoint: { max: 2999, min: 1801 },
//       items: 5,
//     },

//     desktop: {
//       breakpoint: { max: 1800, min: 1101 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1100, min: 768 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 767, min: 0 },
//       items: 1,
//     },
//   };
//   const CustomRightArrow = ({ onClick, ...rest }) => {
//     const {
//       onMove,
//       carouselState: { currentSlide, deviceType },
//     } = rest;
//     // onMove means if dragging or swiping in progress.
//     return (
//       <button
//         className="carousel-arrow carousel-arrow-right"
//         onClick={() => onClick()}
//       >
//         <i class="arrow-right-heavy-orange"></i>
//       </button>
//     );
//   };

//   const CustomLeftArrow = ({ onClick, ...rest }) => {
//     const {
//       onMove,
//       carouselState: { currentSlide, deviceType },
//     } = rest;
//     // onMove means if dragging or swiping in progress.
//     return (
//       <button
//         className="carousel-arrow carousel-arrow-left"
//         onClick={() => onClick()}
//       >
//         <i class="arrow-left-heavy-orange"></i>
//       </button>
//     );
//   };

//   return (
//     <div className="basic-carousel">
//       <Carousel
//         responsive={responsive}
//         swipeable={false}
//         draggable={true}
//         showDots={true}
//         renderDotsOutside
//         infinite={true}
//         // autoPlay={props.deviceType !== "mobile" ? true : false}
//         // autoPlay
//         // autoPlaySpeed={2000}
//         keyBoardControl={true}
//         customTransition="all 2s"
//         // transitionDuration={5000}
//         removeArrowOnDeviceType={["tablet", "mobile"]}
//         itemClass="carousel-item padding-40-px"
//         customRightArrow={<CustomRightArrow />}
//         customLeftArrow={<CustomLeftArrow />}

//         // want to know still about following props
//         // deviceType={props.deviceType}
//         // containerClass="carousel-container"
//         // removeArrowOnDeviceType={["tablet", "mobile"]}

//         // dotListClass="custom-dot-list-style"
//         // itemClass="carousel-item-padding-40-px"
//       >
//         <div class="carousel-item">
//           <img src="https://via.placeholder.com/300" />1
//         </div>
//         <div class="carousel-item">
//           <img src="https://via.placeholder.com/300" />2
//         </div>
//         <div class="carousel-item">
//           <img src="https://via.placeholder.com/300" />3
//         </div>
//         <div class="carousel-item">
//           <img src="https://via.placeholder.com/300" />4
//         </div>
//         <div class="carousel-item">
//           <img src="https://via.placeholder.com/300" />5
//         </div>
//         <div class="carousel-item">
//           <img src="https://via.placeholder.com/300" />6
//         </div>
//         <div class="carousel-item">
//           <img src="https://via.placeholder.com/300" />7
//         </div>
//         <div class="carousel-item">
//           <img src="https://via.placeholder.com/300" />8
//         </div>
//         <div class="carousel-item">
//           <img src="https://via.placeholder.com/300" />9
//         </div>
//         <div class="carousel-item">
//           <img src="https://via.placeholder.com/300" />
//           10
//         </div>
//       </Carousel>
//     </div>
//   );
// };

// export default BasicUsage;
