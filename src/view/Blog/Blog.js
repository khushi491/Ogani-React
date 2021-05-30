import React from "react";
import Breadcrumb from "../../components/UI/Breadcrumb/Breadcrumb";
import sr1 from "../../assets/img/blog/sidebar/sr-1.jpg";
import sr2 from "../../assets/img/blog/sidebar/sr-2.jpg";
import sr3 from "../../assets/img/blog/sidebar/sr-3.jpg";
import blog1 from "../../assets/img/blog/blog-1.jpg";
import blog2 from "../../assets/img/blog/blog-2.jpg";
import blog3 from "../../assets/img/blog/blog-3.jpg";
import blog4 from "../../assets/img/blog/blog-4.jpg";
import blog5 from "../../assets/img/blog/blog-5.jpg";
import blog6 from "../../assets/img/blog/blog-6.jpg";

const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <Breadcrumb title="Blog" />
      <section className="blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="blog__sidebar">
                <div className="blog__sidebar__search">
                  <form action="void(0)">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">
                      <span className="icon_search"></span>
                    </button>
                  </form>
                </div>
                <div className="blog__sidebar__item">
                  <h4>Categories</h4>
                  <ul>
                    <li>
                      <a href="void(0)">All</a>
                    </li>
                    <li>
                      <a href="void(0)">Beauty (20)</a>
                    </li>
                    <li>
                      <a href="void(0)">Food (5)</a>
                    </li>
                    <li>
                      <a href="void(0)">Life Style (9)</a>
                    </li>
                    <li>
                      <a href="void(0)">Travel (10)</a>
                    </li>
                  </ul>
                </div>
                <div className="blog__sidebar__item">
                  <h4>Recent News</h4>
                  <div className="blog__sidebar__recent">
                    <a href="void(0)" className="blog__sidebar__recent__item">
                      <div className="blog__sidebar__recent__item__pic">
                        <img src={sr1} alt="sr1" />
                      </div>
                      <div className="blog__sidebar__recent__item__text">
                        <h6>
                          09 Kinds Of Vegetables
                          <br /> Protect The Liver
                        </h6>
                        <span>MAR 05, 2019</span>
                      </div>
                    </a>
                    <a href="void(0)" className="blog__sidebar__recent__item">
                      <div className="blog__sidebar__recent__item__pic">
                        <img src={sr2} alt="sr2" />
                      </div>
                      <div className="blog__sidebar__recent__item__text">
                        <h6>
                          Tips You To Balance
                          <br /> Nutrition Meal Day
                        </h6>
                        <span>MAR 05, 2019</span>
                      </div>
                    </a>
                    <a href="void(0)" className="blog__sidebar__recent__item">
                      <div className="blog__sidebar__recent__item__pic">
                        <img src={sr3} alt="sr3" />
                      </div>
                      <div className="blog__sidebar__recent__item__text">
                        <h6>
                          4 Principles Help You Lose <br />
                          Weight With Vegetables
                        </h6>
                        <span>MAR 05, 2019</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="blog__sidebar__item">
                  <h4>Search By</h4>
                  <div className="blog__sidebar__item__tags">
                    <a href="void(0)">Apple</a>
                    <a href="void(0)">Beauty</a>
                    <a href="void(0)">Vegetables</a>
                    <a href="void(0)">Fruit</a>
                    <a href="void(0)">Healthy Food</a>
                    <a href="void(0)">Lifestyle</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__item">
                    <div className="blog__item__pic">
                      <img src={blog2} alt="blog2" />
                    </div>
                    <div className="blog__item__text">
                      <ul>
                        <li>
                          <i className="fa fa-calendar-o"></i> May 4,2019
                        </li>
                        <li>
                          <i className="fa fa-comment-o"></i> 5
                        </li>
                      </ul>
                      <h5>
                        <a href="void(0)">6 ways to prepare breakfast for 30</a>
                      </h5>
                      <p>
                        Sed quia non numquam modi tempora indunt ut labore et
                        dolore magnam aliquam quaerat{" "}
                      </p>
                      <a href="void(0)" className="blog__btn">
                        READ MORE <span className="arrow_right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__item">
                    <div className="blog__item__pic">
                      <img src={blog3} alt="blog3" />
                    </div>
                    <div className="blog__item__text">
                      <ul>
                        <li>
                          <i className="fa fa-calendar-o"></i> May 4,2019
                        </li>
                        <li>
                          <i className="fa fa-comment-o"></i> 5
                        </li>
                      </ul>
                      <h5>
                        <a href="void(0)">Visit the clean farm in the US</a>
                      </h5>
                      <p>
                        Sed quia non numquam modi tempora indunt ut labore et
                        dolore magnam aliquam quaerat{" "}
                      </p>
                      <a href="void(0)" className="blog__btn">
                        READ MORE <span className="arrow_right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__item">
                    <div className="blog__item__pic">
                      <img src={blog1} alt="blog1" />
                    </div>
                    <div className="blog__item__text">
                      <ul>
                        <li>
                          <i className="fa fa-calendar-o"></i> May 4,2019
                        </li>
                        <li>
                          <i className="fa fa-comment-o"></i> 5
                        </li>
                      </ul>
                      <h5>
                        <a href="void(0)">Cooking tips make cooking simple</a>
                      </h5>
                      <p>
                        Sed quia non numquam modi tempora indunt ut labore et
                        dolore magnam aliquam quaerat{" "}
                      </p>
                      <a href="void(0)" className="blog__btn">
                        READ MORE <span className="arrow_right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__item">
                    <div className="blog__item__pic">
                      <img src={blog4} alt="blog4" />
                    </div>
                    <div className="blog__item__text">
                      <ul>
                        <li>
                          <i className="fa fa-calendar-o"></i> May 4,2019
                        </li>
                        <li>
                          <i className="fa fa-comment-o"></i> 5
                        </li>
                      </ul>
                      <h5>
                        <a href="void(0)">Cooking tips make cooking simple</a>
                      </h5>
                      <p>
                        Sed quia non numquam modi tempora indunt ut labore et
                        dolore magnam aliquam quaerat{" "}
                      </p>
                      <a href="void(0)" className="blog__btn">
                        READ MORE <span className="arrow_right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__item">
                    <div className="blog__item__pic">
                      <img src={blog4} alt="blog4" />
                    </div>
                    <div className="blog__item__text">
                      <ul>
                        <li>
                          <i className="fa fa-calendar-o"></i> May 4,2019
                        </li>
                        <li>
                          <i className="fa fa-comment-o"></i> 5
                        </li>
                      </ul>
                      <h5>
                        <a href="void(0)">
                          The Moment You Need To Remove Garlic From The Menu
                        </a>
                      </h5>
                      <p>
                        Sed quia non numquam modi tempora indunt ut labore et
                        dolore magnam aliquam quaerat{" "}
                      </p>
                      <a href="void(0)" className="blog__btn">
                        READ MORE <span className="arrow_right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__item">
                    <div className="blog__item__pic">
                      <img src={blog6} alt="blog6" />
                    </div>
                    <div className="blog__item__text">
                      <ul>
                        <li>
                          <i className="fa fa-calendar-o"></i> May 4,2019
                        </li>
                        <li>
                          <i className="fa fa-comment-o"></i> 5
                        </li>
                      </ul>
                      <h5>
                        <a href="void(0)">Cooking tips make cooking simple</a>
                      </h5>
                      <p>
                        Sed quia non numquam modi tempora indunt ut labore et
                        dolore magnam aliquam quaerat{" "}
                      </p>
                      <a href="void(0)" className="blog__btn">
                        READ MORE <span className="arrow_right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="product__pagination blog__pagination">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
