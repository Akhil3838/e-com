import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ProductDetails = () => {
  return (
<>
<Header/>
        <div className="section section-padding border-bottom">
          <div className="container">
            <div className="row learts-mb-n40">
              {/* Product Images Start */}
              <div className="col-lg-6 col-12 learts-mb-40">
                <div className="product-images">
                  <button
                    className="product-gallery-popup hintT-left"
                    data-hint="Click to enlarge"
                    data-images={JSON.stringify([
                      {
                        src: "/images/product/single/1/product-zoom-1.webp",
                        w: 700,
                        h: 1100,
                      },
                      {
                        src: "/images/product/single/1/product-zoom-2.webp",
                        w: 700,
                        h: 1100,
                      },
                      {
                        src: "/images/product/single/1/product-zoom-3.webp",
                        w: 700,
                        h: 1100,
                      },
                      {
                        src: "/images/product/single/1/product-zoom-4.webp",
                        w: 700,
                        h: 1100,
                      },
                    ])}
                  >
                    <i className="fas fa-expand"></i>
                  </button>
                  <a
                    href="https://www.youtube.com/watch?v=1jSsy7DtYgc"
                    className="product-video-popup video-popup hintT-left"
                    data-hint="Click to see video"
                  >
                    <i className="fas fa-play"></i>
                  </a>
                  <div className="product-gallery-slider">
                    {[1, 2, 3, 4].map((num) => (
                      <div
                        key={num}
                        className="product-zoom"
                        data-image={`/images/product/single/1/product-zoom-${num}.webp`}
                      >
                        <img
                          src={`/images/product/single/1/product-${num}.webp`}
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                  <div className="product-thumb-slider">
                    {[1, 2, 3, 4].map((num) => (
                      <div key={num} className="item">
                        <img
                          src={`/images/product/single/1/product-thumb-${num}.webp`}
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Product Images End */}
    
              {/* Product Summary Start */}
              <div className="col-lg-6 col-12 learts-mb-40">
                <div className="product-summery">
                  <div className="product-nav">
                    <a href="#">
                      <i className="fas fa-long-arrow-alt-left"></i>
                    </a>
                    <a href="#">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                  <div className="product-ratings">
                    <span className="star-rating">
                      <span className="rating-active" style={{ width: "100%" }}>
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
                      Easy clip-on handle – Hold the brush and dustpan together for
                      storage; the dustpan edge is serrated to allow easy scraping
                      off the hair without entanglement. High-quality bristles – no
                      burr damage, no scratches, thick and durable, comfortable to
                      remove dust and smaller particles.
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
                      className="btn btn-icon btn-outline-body btn-hover-dark hintT-top"
                      data-hint="Add to Wishlist"
                    >
                      <i className="far fa-heart"></i>
                    </a>
                    <a href="#" className="btn btn-dark btn-outline-hover-dark">
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </a>
                    <a
                      href="#"
                      className="btn btn-icon btn-outline-body btn-hover-dark hintT-top"
                      data-hint="Compare"
                    >
                      <i className="fas fa-random"></i>
                    </a>
                  </div>
                  <div className="product-brands">
                    <span className="title">Brands</span>
                    <div className="brands">
                      <a href="#">
                        <img src="/images/brands/brand-3.webp" alt="" />
                      </a>
                      <a href="#">
                        <img src="/images/brands/brand-8.webp" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="product-meta">
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
                                <a href="#">learts</a>
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


        <div className="section section-padding border-bottom">
    <div className="container">
        <ul className="nav product-info-tab-list">
            <li><a className="active" data-bs-toggle="tab" href="#tab-description">Description</a></li>
            <li><a data-bs-toggle="tab" href="#tab-pwb_tab">Brand</a></li>
            <li><a data-bs-toggle="tab" href="#tab-additional_information">Additional information</a></li>
            <li><a data-bs-toggle="tab" href="#tab-reviews">Reviews (3)</a></li>
        </ul>
        <div className="tab-content product-infor-tab-content">
            <div className="tab-pane fade show active" id="tab-description">
                <div className="row">
                    <div className="col-lg-10 col-12 mx-auto">
                        <p>Easy clip-on handle – Hold the brush and dustpan together for storage; the dustpan edge is serrated to allow easy scraping off the hair without entanglement. High-quality bristles – no burr damage, no scratches, thick and durable, comfortable to remove dust and smaller particles. Rubber lip – The rubber lip on the front of the dustpan helps to remove all dust at once.</p>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="tab-pwb_tab">
                <div className="row learts-mb-n30">
                    <div className="col-12 learts-mb-30">
                        <div className="row learts-mb-n10">
                            <div className="col-lg-2 col-md-3 col-12 learts-mb-10"><img src="assets/images/brands/brand-3.webp" alt="" /></div>
                            <div className="col learts-mb-10">
                                <p>We’ve worked with numerous industries and famous fashion brands around the world. We have also created tremendous impacts on fashion manufacturing and online sales. When we partner with an eCommerce agency, we connect every activity to set the trend and win customers’ trust. We make sure our customers are always happy with our products.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 learts-mb-30">
                        <div className="row learts-mb-n10">
                            <div className="col-lg-2 col-md-3 col-12 learts-mb-10"><img src="assets/images/brands/brand-8.webp" alt="" /></div>
                            <div className="col learts-mb-10">
                                <p>Prior to Houdini, there have been many clothing brands that achieved such a roaring success. However, there’s no other brand that can obtain such a precious position like us. We have successfully built our site to make more people know about our products as well as our motto. We’ve been the inspiration for many other small and medium-sized businesses.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="tab-additional_information">
                <div className="row">
                    <div className="col-lg-8 col-md-10 col-12 mx-auto">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>Size</td>
                                        <td>Large, Medium, Small</td>
                                    </tr>
                                    <tr>
                                        <td>Color</td>
                                        <td>Black, White</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="tab-reviews">
                <div className="product-review-wrapper">
                    <span className="title">3 reviews for Cleaning Dustpan & Brush</span>
                    <ul className="product-review-list">
                        <li>
                            <div className="product-review">
                                <div className="thumb"><img src="assets/images/review/review-1.webp" alt="" /></div>
                                <div className="content">
                                    <div className="ratings">
                                        <span className="star-rating">
                                            <span className="rating-active" style={{ width: "100%" }}>ratings</span>
                                        </span>
                                    </div>
                                    <div className="meta">
                                        <h5 className="title">Edna Watson</h5>
                                        <span className="date">November 27, 2020</span>
                                    </div>
                                    <p>Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="product-review">
                                <div className="thumb"><img src="assets/images/review/review-2.webp" alt="" /></div>
                                <div className="content">
                                    <div className="ratings">
                                        <span className="star-rating">
                                            <span className="rating-active" style={{ width: "80%" }}>ratings</span>
                                        </span>
                                    </div>
                                    <div className="meta">
                                        <h5 className="title">Scott James</h5>
                                        <span className="date">November 27, 2020</span>
                                    </div>
                                    <p>Thanks for always keeping your WordPress themes up to date. Your level of support and dedication is second to none.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="product-review">
                                <div className="thumb"><img src="assets/images/review/review-3.webp" alt="" /></div>
                                <div className="content">
                                    <div className="ratings">
                                        <span className="star-rating">
                                            <span className="rating-active" style={{ width: "60%" }}>ratings</span>
                                        </span>
                                    </div>
                                    <div className="meta">
                                        <h5 className="title">Owen Christ</h5>
                                        <span className="date">November 27, 2020</span>
                                    </div>
                                    <p>Good Product!</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <span className="title">Add a review</span>
                    <div className="review-form">
                        <p className="note">Your email address will not be published. Required fields are marked *</p>
                        <form action="#">
                            <div className="row learts-mb-n30">
                                <div className="col-md-6 col-12 learts-mb-30"><input type="text" placeholder="Name *" /></div>
                                <div className="col-md-6 col-12 learts-mb-30"><input type="email" placeholder="Email *" /></div>
                                <div className="col-12 learts-mb-10">
                                    <div className="form-rating">
                                        <span className="title">Your rating</span>
                                        <span className="rating"><span className="star"></span></span>
                                    </div>
                                </div>
                                <div className="col-12 learts-mb-30"><textarea placeholder="Your Review *"></textarea></div>
                                <div className="col-12 text-center learts-mb-30"><button className="btn btn-dark btn-outline-hover-dark">Submit</button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<Footer/>
    
</>




  );
};

export default ProductDetails;
