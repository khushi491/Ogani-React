import React from "react";
import Logo from "../../../assets/img/logo.png";

const Footer = () => {
  return (
    <div>
      <footer class="footer spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer__about">
                <div class="footer__about__logo">
                  <a href="./index.html">
                    <img src={Logo} alt="Logo" />
                  </a>
                </div>
                <ul>
                  <li>Address: 60-49 Road 11378 New York</li>
                  <li>Phone: +65 11.188.888</li>
                  <li>Email: hello@colorlib.com</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
              <div class="footer__widget">
                <h6>Useful Links</h6>
                <ul>
                  <li>
                    <a href="void(0)">About Us</a>
                  </li>
                  <li>
                    <a href="void(0)">About Our Shop</a>
                  </li>
                  <li>
                    <a href="void(0)">Secure Shopping</a>
                  </li>
                  <li>
                    <a href="void(0)">Delivery infomation</a>
                  </li>
                  <li>
                    <a href="void(0)">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="void(0)">Our Sitemap</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="void(0)">Who We Are</a>
                  </li>
                  <li>
                    <a href="void(0)">Our Services</a>
                  </li>
                  <li>
                    <a href="void(0)">Projects</a>
                  </li>
                  <li>
                    <a href="void(0)">Contact</a>
                  </li>
                  <li>
                    <a href="void(0)">Innovation</a>
                  </li>
                  <li>
                    <a href="void(0)">Testimonials</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="footer__widget">
                <h6>Join Our Newsletter Now</h6>
                <p>
                  Get E-mail updates about our latest shop and special offers.
                </p>
                <form action="void(0)">
                  <input type="text" placeholder="Enter your mail" />
                  <button type="submit" class="site-btn">
                    Subscribe
                  </button>
                </form>
                <div class="footer__widget__social">
                  <a href="void(0)">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="void(0)">
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a href="void(0)">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="void(0)">
                    <i class="fa fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="footer__copyright">
                <div class="footer__copyright__text">
                  <p>
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  </p>
                </div>
                <div class="footer__copyright__payment">
                  <img src="img/payment-item.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
