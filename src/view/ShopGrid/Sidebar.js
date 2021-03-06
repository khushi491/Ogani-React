import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar__item">
        <h4>Department</h4>
        <ul>
          <li>
            <a href="void(0)">Fresh Meat</a>
          </li>
          <li>
            <a href="void(0)">Vegetables</a>
          </li>
          <li>
            <a href="void(0)">Fruit & Nut Gifts</a>
          </li>
          <li>
            <a href="void(0)">Fresh Berries</a>
          </li>
          <li>
            <a href="void(0)">Ocean Foods</a>
          </li>
          <li>
            <a href="void(0)">Butter & Eggs</a>
          </li>
          <li>
            <a href="void(0)">Fastfood</a>
          </li>
          <li>
            <a href="void(0)">Fresh Onion</a>
          </li>
          <li>
            <a href="void(0)">Papayaya & Crisps</a>
          </li>
          <li>
            <a href="void(0)">Oatmeal</a>
          </li>
        </ul>
      </div>
      <div className="sidebar__item">
        <h4>Price</h4>
        <div className="price-range-wrap">
          <div
            className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
            data-min="10"
            data-max="540"
          >
            <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
            <span
              tabindex="0"
              className="ui-slider-handle ui-corner-all ui-state-default"
            ></span>
            <span
              tabindex="0"
              className="ui-slider-handle ui-corner-all ui-state-default"
            ></span>
          </div>
          <div className="range-slider">
            <div className="price-input">
              <input type="text" id="minamount" />
              <input type="text" id="maxamount" />
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar__item sidebar__item__color--option">
        <h4>Colors</h4>
        <div className="sidebar__item__color sidebar__item__color--white">
          <label for="white">
            White
            <input type="radio" id="white" />
          </label>
        </div>
        <div className="sidebar__item__color sidebar__item__color--gray">
          <label for="gray">
            Gray
            <input type="radio" id="gray" />
          </label>
        </div>
        <div className="sidebar__item__color sidebar__item__color--red">
          <label for="red">
            Red
            <input type="radio" id="red" />
          </label>
        </div>
        <div className="sidebar__item__color sidebar__item__color--black">
          <label for="black">
            Black
            <input type="radio" id="black" />
          </label>
        </div>
        <div className="sidebar__item__color sidebar__item__color--blue">
          <label for="blue">
            Blue
            <input type="radio" id="blue" />
          </label>
        </div>
        <div className="sidebar__item__color sidebar__item__color--green">
          <label for="green">
            Green
            <input type="radio" id="green" />
          </label>
        </div>
      </div>
      <div className="sidebar__item">
        <h4>Popular Size</h4>
        <div className="sidebar__item__size">
          <label for="large">
            Large
            <input type="radio" id="large" />
          </label>
        </div>
        <div className="sidebar__item__size">
          <label for="medium">
            Medium
            <input type="radio" id="medium" />
          </label>
        </div>
        <div className="sidebar__item__size">
          <label for="small">
            Small
            <input type="radio" id="small" />
          </label>
        </div>
        <div className="sidebar__item__size">
          <label for="tiny">
            Tiny
            <input type="radio" id="tiny" />
          </label>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
