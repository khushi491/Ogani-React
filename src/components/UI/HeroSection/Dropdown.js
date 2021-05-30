import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProductByCategoryRequest } from "../../../store/actions";

function Department() {
  const dispatch = useDispatch();
  return (
    <div className="hero__categories  ">
      <div className="hero__categories__all ">
        <i className="fa fa-bars"></i>
        <span>All departments</span>
      </div>

      <ul className="dropdown-menu">
        <li>
          <NavLink
            onClick={() => dispatch(getProductByCategoryRequest("freshMeat"))}
            to="/shopGrid"
          >
            Fresh Meat
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => dispatch(getProductByCategoryRequest(`vegetables`))}
            to="/shopGrid"
          >
            Vegetables
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() =>
              dispatch(getProductByCategoryRequest(`fruitAndNutGifts`))
            }
            to="/shopGrid"
          >
            Fruit & Nut Gifts
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() =>
              dispatch(getProductByCategoryRequest(`freshBerries`))
            }
            to="/shopGrid"
          >
            Fresh Berries
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => dispatch(getProductByCategoryRequest(`oceanFoods`))}
            to="/shopGrid"
          >
            Ocean Foods
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() =>
              dispatch(getProductByCategoryRequest(`butterAndEggs`))
            }
            to="/shopGrid"
          >
            Butter & Eggs
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => dispatch(getProductByCategoryRequest(`fastfood`))}
            to="/shopGrid"
          >
            Fastfood
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => dispatch(getProductByCategoryRequest(`freshOnion`))}
            to="/shopGrid"
          >
            Fresh Onion
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() =>
              dispatch(getProductByCategoryRequest(`papayaAndCrisps`))
            }
            to="/shopGrid"
          >
            Papayaya & Crisps
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => dispatch(getProductByCategoryRequest(`oatmeal`))}
            to="/shopGrid"
          >
            Oatmeal
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Department;
