"use client";
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'


function Footer() {
  return (
    <>
    <div className="footer2-section section section-padding mt-5">
    <div className="container">
        <div className="row learts-mb-n40">

            <div className="col-lg-6 learts-mb-40">
                <div className="widget-about">
                <Link href="/">
    <Image
      src="/images/logo1.png"
      alt="Learts Logo"
      width={150} // adjust to your design
      height={100} // adjust to your design
      priority // optional: for faster loading
    />
  </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque recusandae commodi mollitia facere iure nisi, laudantium quis quas perferendis a minus dolores.</p>
                </div>
            </div>

            <div className="col-lg-4 learts-mb-40">
                <div className="row">
                    <div className="col">
                        <ul className="widget-list">
                            <li><a href="/">About us</a></li>
                            <li><a href="/shopping">Shop</a></li>
                            <li><a href="/">Contact us</a></li>
                            <li><a href="/login">Orders</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="widget-list">
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Support Policy</a></li>
                            <li><a href="#">Size Guide</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-lg-2 learts-mb-40">
                <ul className="widget-list">
                    <li> <i className="fab fa-twitter"></i> <a href="https://www.twitter.com/">Twitter</a></li>
                    <li> <i className="fab fa-facebook-f"></i> <a href="https://www.facebook.com/">Facebook</a></li>
                    <li> <i className="fab fa-instagram"></i> <a href="https://www.instagram.com/">Instagram</a></li>
                    <li> <i className="fab fa-youtube"></i> <a href="https://www.youtube.com/">Youtube</a></li>
                </ul>
            </div>

        </div>
    </div>
</div>




      <div className="footer2-copyright section">
        <div className="container">
          <p className="copyright text-center">
            &copy; 2023 learts. All Rights Reserved
          </p>
        </div>
      </div>

      {/* Modal */}
      <div className="quickViewModal modal fade" id="quickViewModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button className="close" data-bs-dismiss="modal">
              &times;
            </button>
            <div className="row learts-mb-n30">
              {/* Product Images Start */}
              <div className="col-lg-6 col-12 learts-mb-30">
                <div className="product-images">
                  <div className="product-gallery-slider-quickview">
                    <div
                      className="product-zoom"
                      data-image="/images/product/single/1/product-zoom-1.webp"
                    >
                      <img
                        src="/images/product/single/1/product-1.webp"
                        alt=""
                      />
                    </div>
                    <div
                      className="product-zoom"
                      data-image="/images/product/single/1/product-zoom-2.webp"
                    >
                      <img
                        src="/images/product/single/1/product-2.webp"
                        alt=""
                      />
                    </div>
                    <div
                      className="product-zoom"
                      data-image="/images/product/single/1/product-zoom-3.webp"
                    >
                      <img
                        src="/images/product/single/1/product-3.webp"
                        alt=""
                      />
                    </div>
                    <div
                      className="product-zoom"
                      data-image="/images/product/single/1/product-zoom-4.webp"
                    >
                      <img
                        src="/images/product/single/1/product-4.webp"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Product Images End */}

              {/* Product Summary Start */}
              <div className="col-lg-6 col-12 overflow-hidden position-relative learts-mb-30">
                <div className="product-summery customScroll">
                  <div className="product-ratings">
                    <span className="star-rating">
                      <span
                        className="rating-active"
                        style={{ width: '100%' }}
                      >
                        ratings
                      </span>
                    </span>
                    <a href="#reviews" className="review-link">
                      (<span className="count">3</span> customer reviews)
                    </a>
                  </div>
                  <h3 className="product-title">Cleaning Dustpan & Brush</h3>
                  <div className="product-price">£38.00 – £50.00</div>
                  <div className="product-description">
                    <p>
                      Easy clip-on handle – Hold the brush and dustpan together
                      for storage; the dustpan edge is serrated to allow easy
                      scraping off the hair without entanglement. High-quality
                      bristles – no burr damage, no scratches, thick and
                      durable, comfortable to remove dust and smaller particles.
                    </p>
                  </div>
                  <div className="product-variations">
                    <table>
                      <tbody>
                        <tr>
                          <td className="label">
                            <span>Size</span>
                          </td>
                          <td className="value">
                            <div className="product-sizes">
                              <a href="#">Large</a>
                              <a href="#">Medium</a>
                              <a href="#">Small</a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="label">
                            <span>Color</span>
                          </td>
                          <td className="value">
                            <div className="product-colors">
                              <a href="#" data-bg-color="#000000"></a>
                              <a href="#" data-bg-color="#ffffff"></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="label">
                            <span>Quantity</span>
                          </td>
                          <td className="value">
                            <div className="product-quantity">
                              <span className="qty-btn minus">
                                <i className="ti-minus"></i>
                              </span>
                              <input
                                type="text"
                                className="input-qty"
                                defaultValue="1"
                              />
                              <span className="qty-btn plus">
                                <i className="ti-plus"></i>
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="product-buttons">
                    <a
                      href="#"
                      className="btn btn-icon btn-outline-body btn-hover-dark"
                    >
                      <i className="far fa-heart"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-dark btn-outline-hover-dark"
                    >
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-outline-body btn-hover-dark"
                    >
                      <i className="fas fa-random"></i>
                    </a>
                  </div>
                  <div className="product-brands">
                    <span className="title">Brands</span>
                    <div className="brands">
                      <a href="#">
                        <img
                          src="/images/brands/brand-3.webp"
                          alt=""
                        />
                      </a>
                      <a href="#">
                        <img
                          src="/images/brands/brand-8.webp"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="product-meta mb-0">
                    <table>
                      <tbody>
                        <tr>
                          <td className="label">
                            <span>SKU</span>
                          </td>
                          <td className="value">0404019</td>
                        </tr>
                        <tr>
                          <td className="label">
                            <span>Category</span>
                          </td>
                          <td className="value">
                            <ul className="product-category">
                              <li>
                                <a href="#">Kitchen</a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="label">
                            <span>Tags</span>
                          </td>
                          <td className="value">
                            <ul className="product-tags">
                              <li>
                                <a href="#">handmade</a>
                              </li>
                              <li>
                                <a href="#">learts</a>
                              </li>
                              <li>
                                <a href="#">mug</a>
                              </li>
                              <li>
                                <a href="#">product</a>
                              </li>
                              <li>
                                <a href="#">login</a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="label">
                            <span>Share on</span>
                          </td>
                          <td className="va">
                            <div className="product-share">
                              <a href="#">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                              <a href="#">
                                <i className="fab fa-twitter"></i>
                              </a>
                              <a href="#">
                                <i className="fab fa-google-plus-g"></i>
                              </a>
                              <a href="#">
                                <i className="fab fa-pinterest"></i>
                              </a>
                              <a href="#">
                                <i className="far fa-envelope"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* Product Summary End */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
