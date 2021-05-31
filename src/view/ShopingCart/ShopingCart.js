import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../components/UI/Breadcrumb/Breadcrumb";
import { addCartRequest, deleteProductRequest } from "../../store/actions";

const ShopingCart = (props) => {
  const cart = useSelector((state) => state.cartReducer.data);
  console.log(cart);
  const { productId, qty } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addCartRequest(productId, qty));
    }
  }, []);

  const onclickRemoveFromCart = (productId) => {
    dispatch(deleteProductRequest(productId));
  };
  return (
    <div>
      <Breadcrumb title="Shopping Cart" />
      <section className="shoping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th className="shoping__product">Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart && cart.length === 0 ? (
                      <div>Cart is empty</div>
                    ) : (
                      cart &&
                      cart.map((item) => {
                        // <Item key={item.product} item={item} />
                        return (
                          <tr>
                            <td key={item.id} className="shoping__cart__item">
                              <img src={item.image} alt="" />
                              <h5>{item.title}</h5>
                            </td>
                            <td className="shoping__cart__price">
                              {item.price}
                            </td>
                            <td className="shoping__cart__quantity">
                              <div className="quantity">
                                <div className="pro-qty">
                                  <input type="text" qtyValue={item.quantity} />
                                </div>
                              </div>
                            </td>
                            <td className="shoping__cart__total">
                              {" "}
                              ${Math.floor(item.price * item.quantity)}
                            </td>
                            <td className="shoping__cart__item__close">
                              <button
                                onClick={() =>
                                  onclickRemoveFromCart(item.product)
                                }
                                className="icon_close"
                              ></button>
                            </td>
                          </tr>
                        );
                      })
                    )}

                    {/* <tr>
                      <td className="shoping__cart__item">
                        <img src="img/cart/cart-1.jpg" alt="" />
                        <h5>Vegetable’s Package</h5>
                      </td>
                      <td className="shoping__cart__price">$55.00</td>
                      <td className="shoping__cart__quantity">
                        <div className="quantity">
                          <div className="pro-qty">
                            <input type="text" value="1" />
                          </div>
                        </div>
                      </td>
                      <td className="shoping__cart__total">$110.00</td>
                      <td className="shoping__cart__item__close">
                        <span className="icon_close"></span>
                      </td>
                    </tr>
                    <tr>
                      <td className="shoping__cart__item">
                        <img src="img/cart/cart-2.jpg" alt="" />
                        <h5>Fresh Garden Vegetable</h5>
                      </td>
                      <td className="shoping__cart__price">$39.00</td>
                      <td className="shoping__cart__quantity">
                        <div className="quantity">
                          <div className="pro-qty">
                            <input type="text" value="1" />
                          </div>
                        </div>
                      </td>
                      <td className="shoping__cart__total">$39.99</td>
                      <td className="shoping__cart__item__close">
                        <span className="icon_close"></span>
                      </td>
                    </tr>
                    <tr>
                      <td className="shoping__cart__item">
                        <img src="img/cart/cart-3.jpg" alt="" />
                        <h5>Organic Bananas</h5>
                      </td>
                      <td className="shoping__cart__price">$69.00</td>
                      <td className="shoping__cart__quantity">
                        <div className="quantity">
                          <div className="pro-qty">
                            <input type="text" value="1" />
                          </div>
                        </div>
                      </td>
                      <td className="shoping__cart__total">$69.99</td>
                      <td className="shoping__cart__item__close">
                        <span className="icon_close"></span>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__btns">
                <a href="#" className="primary-btn cart-btn">
                  CONTINUE SHOPPING
                </a>
                <a href="#" className="primary-btn cart-btn cart-btn-right">
                  <span className="icon_loading"></span>
                  Upadate Cart
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__continue">
                <div className="shoping__discount">
                  <h5>Discount Codes</h5>
                  <form action="#">
                    <input type="text" placeholder="Enter your coupon code" />
                    <button type="submit" className="site-btn">
                      APPLY COUPON
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__checkout">
                <h5>Cart Total</h5>
                <ul>
                  <li>
                    Subtotal <span>$454.98</span>
                  </li>
                  <li>
                    Total <span>$454.98</span>
                  </li>
                </ul>
                <a href="#" className="primary-btn">
                  PROCEED TO CHECKOUT
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopingCart;
