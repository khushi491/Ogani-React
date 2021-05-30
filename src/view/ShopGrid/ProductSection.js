import React, { useState } from "react";
import { useSelector } from "react-redux";
import LetestProduct from "./LetestProduct";
import ProductDiscount from "./ProductDiscount";
import Sidebar from "./Sidebar";

const ProductSection = () => {
  const [product, setProduct] = useState();
  const { freshMeat } = useSelector((state) => state.shopReducer);
  const { vegetables } = useSelector((state) => state.shopReducer);
  const { fastfood } = useSelector((state) => state.shopReducer);
  const { oatmeal } = useSelector((state) => state.shopReducer);

  const { item } = useSelector((state) => state.shopReducer);
  console.log({ item });

  console.log({ freshMeat });

  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-5">
            <div className="sidebar">
              <Sidebar />
              <LetestProduct />
            </div>
          </div>
          <div className="col-lg-9 col-md-7">
            <ProductDiscount />
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
                            <a href="void(0)">
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
                            <a href="void(0)">
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
                              <a href="void(0)">
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
                              <a href="void(0)">
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
      </div>
    </section>
  );
};

export default ProductSection;
