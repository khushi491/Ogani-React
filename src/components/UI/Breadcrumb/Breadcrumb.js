import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import BreadcrumbImg from "../../../assets/img/breadcrumb.jpg";

const routes = [{ path: "/shopGrid", breadcrumb: "Shop Grid" }];

const Breadcrumb = ({ title }) => {
  const breadcrumb = useBreadcrumbs(routes);

  return (
    <div>
      <section
        className="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb.jpg"
        style={{ backgroundImage: `url(${BreadcrumbImg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>{title}</h2>
                {breadcrumb.map(({ key, match, breadcrumb }) => {
                  return (
                    <span key={key} className="breadcrumb__option">
                      <Link to={match.url}>{breadcrumb}</Link>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Breadcrumb;
