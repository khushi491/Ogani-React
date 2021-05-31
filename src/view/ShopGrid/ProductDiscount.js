import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Pd1 from "../../assets/img/product/discount/pd-1.jpg";
import Pd2 from "../../assets/img/product/discount/pd-2.jpg";
import Pd3 from "../../assets/img/product/discount/pd-3.jpg";
import Pd4 from "../../assets/img/product/discount/pd-4.jpg";
import Pd5 from "../../assets/img/product/discount/pd-5.jpg";
import Pd6 from "../../assets/img/product/discount/pd-6.jpg";
import { addCartRequest } from "../../store/actions";

const ProductDiscount = (props) => {
  const [product, setProduct] = useState();

  const dispatch = useDispatch();
  const { freshMeat } = useSelector((state) => state.shopReducer);
  const { vegetables } = useSelector((state) => state.shopReducer);
  const { fastfood } = useSelector((state) => state.shopReducer);
  const { oatmeal } = useSelector((state) => state.shopReducer);

  const addToCatrt = (event) => {
    event.preventDefault();
    console.log(product);
    dispatch(addCartRequest({ product }));
    setProduct("");
  };

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
      <div className="product__discount">
        <div className="section-title product__discount__title">
          <h2>Sale Off</h2>
        </div>
        <div className="row">
          <div className="  basic-carousel product__discount__slider owl-carousel">
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
              <br />
              <br />

              <div className="col-lg-10">
                <div className="product__discount__item">
                  <div
                    className="product__discount__item__pic set-bg"
                    data-setbg="img/product/discount/pd-1.jpg"
                    style={{ backgroundImage: `url(${Pd1})` }}
                  >
                    <div className="product__discount__percent">-20%</div>
                    <ul className="product__item__pic__hover">
                      <li>
                        <a href="void(0)">
                          <i className="fa fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="void(0)">
                          <i className="fa fa-retweet"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="void(0)"
                          onClick={(event) => addToCatrt(event)}
                        >
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__discount__item__text">
                    <span>Dried Fruit</span>
                    <h5>
                      <a href="void(0)">Raisin’n’nuts</a>
                    </h5>
                    <div className="product__item__price">
                      $30.00 <span>$36.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="product__discount__item">
                  <div
                    className="product__discount__item__pic set-bg"
                    data-setbg="img/product/discount/pd-2.jpg"
                    style={{ backgroundImage: `url(${Pd2})` }}
                  >
                    <div className="product__discount__percent">-20%</div>
                    <ul className="product__item__pic__hover">
                      <li>
                        <a href="void(0)">
                          <i className="fa fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="void(0)">
                          <i className="fa fa-retweet"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="void(0)"
                          onClick={(event) => addToCatrt(event)}
                        >
                          onClick={(event) => addToCatrt(event)}{" "}
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__discount__item__text">
                    <span>Vegetables</span>
                    <h5>
                      <a href="void(0)">Vegetables’package</a>
                    </h5>
                    <div className="product__item__price">
                      $30.00 <span>$36.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="product__discount__item">
                  <div
                    className="product__discount__item__pic set-bg"
                    data-setbg="img/product/discount/pd-3.jpg"
                    style={{ backgroundImage: `url(${Pd3})` }}
                  >
                    <div className="product__discount__percent">-20%</div>
                    <ul className="product__item__pic__hover">
                      <li>
                        <a href="void(0)">
                          <i className="fa fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="void(0)">
                          <i className="fa fa-retweet"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="void(0)"
                          onClick={(event) => addToCatrt(event)}
                        >
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__discount__item__text">
                    <span>Dried Fruit</span>
                    <h5>
                      <a href="void(0)">Mixed Fruitss</a>
                    </h5>
                    <div className="product__item__price">
                      $30.00 <span>$36.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="product__discount__item">
                  <div
                    className="product__discount__item__pic set-bg"
                    data-setbg="img/product/discount/pd-4.jpg"
                    style={{ backgroundImage: `url(${Pd4})` }}
                  >
                    <div className="product__discount__percent">-20%</div>
                    <ul className="product__item__pic__hover">
                      <li>
                        <a href="void(0)">
                          <i className="fa fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="void(0)">
                          <i className="fa fa-retweet"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="void(0)"
                          onClick={(event) => addToCatrt(event)}
                        >
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__discount__item__text">
                    <span>Dried Fruit</span>
                    <h5>
                      <a href="void(0)">Raisin’n’nuts</a>
                    </h5>
                    <div className="product__item__price">
                      $30.00 <span>$36.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="product__discount__item">
                  <div
                    className="product__discount__item__pic set-bg"
                    data-setbg="img/product/discount/pd-5.jpg"
                    style={{ backgroundImage: `url(${Pd5})` }}
                  >
                    <div className="product__discount__percent">-20%</div>
                    <ul className="product__item__pic__hover">
                      <li>
                        <a href="void(0)">
                          <i className="fa fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="void(0)">
                          <i className="fa fa-retweet"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="void(0)"
                          onClick={(event) => addToCatrt(event)}
                        >
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__discount__item__text">
                    <span>Dried Fruit</span>
                    <h5>
                      <a href="void(0)">Raisin’n’nuts</a>
                    </h5>
                    <div className="product__item__price">
                      $30.00 <span>$36.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="product__discount__item">
                  <div
                    className="product__discount__item__pic set-bg"
                    data-setbg="img/product/discount/pd-6.jpg"
                    style={{ backgroundImage: `url(${Pd6})` }}
                  >
                    <div className="product__discount__percent">-20%</div>
                    <ul className="product__item__pic__hover">
                      <li>
                        <a href="void(0)">
                          <i className="fa fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="void(0)">
                          <i className="fa fa-retweet"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="void(0)"
                          onClick={(event) => addToCatrt(event)}
                        >
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__discount__item__text">
                    <span>Dried Fruit</span>
                    <h5>
                      <a href="void(0)">Raisin’n’nuts</a>
                    </h5>
                    <div className="product__item__price">
                      $30.00 <span>$36.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="filter__item">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="filter__sort">
                <span>Sort By</span>

                <select>
                  <option value="0">name</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="filter__found">
                <h6>
                  <span>45</span> Products found
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-3">
              <div className="filter__option">
                <span className="icon_grid-2x2"></span>
                <span className="icon_ul"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {freshMeat.slice(0, 3).map((item) => {
            console.log({ item });
            return (
              <div key={item.id} className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg={item.image}
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <ul className="product__item__pic__hover">
                      <li>
                        <a href="void(0)">
                          <i className="fa fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="void(0)">
                          <i className="fa fa-retweet"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="void(0)"
                          onClick={(event) => addToCatrt(event)}
                        >
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <a href="void(0)">{item.title}</a>
                    </h6>
                    <h5>{item.price}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row">
          {vegetables.slice(1, 4).map((item) => {
            console.log({ item });
            return (
              <div key={item.id} className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg={item.image}
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <ul className="product__item__pic__hover">
                      <li>
                        <a href="void(0)">
                          <i className="fa fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="void(0)">
                          <i className="fa fa-retweet"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="void(0)"
                          onClick={(event) => addToCatrt(event)}
                        >
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <a href="void(0)">{item.title}</a>
                    </h6>
                    <h5>{item.price}</h5>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="row">
            {fastfood.slice(1, 4).map((item) => {
              console.log({ item });
              return (
                <div key={item.id} className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      data-setbg={item.image}
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <ul className="product__item__pic__hover">
                        <li>
                          <a href="void(0)">
                            <i className="fa fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a href="void(0)">
                            <i className="fa fa-retweet"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="void(0)"
                            onClick={(event) => addToCatrt(event)}
                          >
                            <i className="fa fa-shopping-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>
                        <a href="void(0)">{item.title}</a>
                      </h6>
                      <h5>{item.price}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            {oatmeal.slice(1, 4).map((item) => {
              console.log({ item });
              return (
                <div key={item.id} className="col-lg-4 col-md-6 col-sm-6">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      data-setbg={item.image}
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <ul className="product__item__pic__hover">
                        <li>
                          <a href="void(0)">
                            <i className="fa fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a href="void(0)">
                            <i className="fa fa-retweet"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="void(0)"
                            onClick={(event) => addToCatrt(event)}
                          >
                            <i className="fa fa-shopping-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>
                        <a href="void(0)">{item.title}</a>
                      </h6>
                      <h5>{item.price}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="product__pagination">
          <a href="void(0)">1</a>
          <a href="void(0)">2</a>
          <a href="void(0)">3</a>
          <a href="void(0)">
            <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDiscount;
