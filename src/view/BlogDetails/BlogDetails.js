import React from "react";
import sr1 from "../../assets/img/blog/sidebar/sr-1.jpg";
import sr2 from "../../assets/img/blog/sidebar/sr-2.jpg";
import sr3 from "../../assets/img/blog/sidebar/sr-3.jpg";
import DetailsPic from "../../assets/img/blog/details/details-pic.jpg";
import DetailsAuthor from "../../assets/img/blog/details/details-author.jpg";
import Breadcrumb from "../../components/UI/Breadcrumb/Breadcrumb";

const BlogDetails = () => {
  return (
    <div>
      <Breadcrumb title="Bolg Details" />
      <section className="blog-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5 order-md-1 order-2">
              <div className="blog__sidebar">
                <div className="blog__sidebar__search">
                  <form action="#">
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
            <div className="col-lg-8 col-md-7 order-md-1 order-1">
              <div className="blog__details__text">
                <img src={DetailsPic} alt="detailsPic" />
                <p>
                  Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam
                  vehicula elementum sed sit amet dui. Curabitur non nulla sit
                  amet nisl tempus convallis quis ac lectus. Mauris blandit
                  aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna
                  justo, lacinia eget consectetur sed, convallis at tellus. Sed
                  porttitor lectus nibh. Donec sollicitudin molestie malesuada.
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus. Proin eget tortor risus. Donec rutrum congue leo eget
                  malesuada. Curabitur non nulla sit amet nisl tempus convallis
                  quis ac lectus. Donec sollicitudin molestie malesuada. Nulla
                  quis lorem ut libero malesuada feugiat. Curabitur arcu erat,
                  accumsan id imperdiet et, porttitor at sem.
                </p>
                <h3>
                  The corner window forms a place within a place that is a
                  resting point within the large space.
                </h3>
                <p>
                  The study area is located at the back with a view of the vast
                  nature. Together with the other buildings, a congruent story
                  has been managed in which the whole has a reinforcing effect
                  on the components. The use of materials seeks connection to
                  the main house, the adjacent stables
                </p>
              </div>
              <div className="blog__details__content">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="blog__details__author">
                      <div className="blog__details__author__pic">
                        <img src={DetailsAuthor} alt="DetailsAuthor" />
                      </div>
                      <div className="blog__details__author__text">
                        <h6>Michael Scofield</h6>
                        <span>Admin</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="blog__details__widget">
                      <ul>
                        <li>
                          <span>Categories:</span> Food
                        </li>
                        <li>
                          <span>Tags:</span> All, Trending, Cooking, Healthy
                          Food, Life Style
                        </li>
                      </ul>
                      <div className="blog__details__social">
                        <a href="void(0)">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="void(0)">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="void(0)">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="void(0)">
                          <i className="fa fa-linkedin"></i>
                        </a>
                        <a href="void(0)">
                          <i className="fa fa-envelope"></i>
                        </a>
                      </div>
                    </div>
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

export default BlogDetails;
