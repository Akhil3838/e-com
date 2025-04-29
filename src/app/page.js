"use client";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
    <Header/>

     {/* Slider main container Start */}
     <div className="home2-slider swiper-container">
        <div className="swiper-wrapper">
          {/* Slide 1 */}
          <div
            className="home2-slide-item swiper-slide"
            data-swiper-autoplay="5000"
            data-bg-color="#EEE5DD"
          >
            <div className="home2-slide1-image">
              <img
                src="/images/slider/home2/slider-1-1.webp"
                alt="Slide One Image"
              />

              <div className="home2-slide1-product1">
                <button className="slide-pointer">
                  <span>+</span>
                </button>
                <div className="slide-product">
                  <div className="image">
                    <img
                      src="/images/slider/home2/slider-1-2.webp"
                      alt="Slide Product"
                    />
                  </div>
                  <h6 className="title">Country Feast set</h6>
                  <span className="price">$39.00</span>
                </div>
              </div>
            </div>
            <div className="home2-slide-content">
              <h5 className="sub-title">DAILY OFFER</h5>
              <h2 className="title">Country Feast Set</h2>
              <div className="link">
                <a href="shop.html">shop collection</a>
              </div>
            </div>
            <div className="home2-slide-pages">
              <span className="current">1</span>
              <span className="border"></span>
              <span className="total">3</span>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className="home2-slide-item swiper-slide"
            data-swiper-autoplay="5000"
            data-bg-color="#F5F1F1"
          >
            <div className="home2-slide2-image">
              <img
                src="/images/slider/home2/slider-2-1.webp"
                alt="Slide Two Image"
              />

              <div className="home2-slide2-product1">
                <button className="slide-pointer">
                  <span>+</span>
                </button>
                <div className="slide-product">
                  <div className="image">
                    <img
                      src="/images/slider/home2/slider-2-2.webp"
                      alt="Slide Product"
                    />
                  </div>
                  <h6 className="title">Country Feast set</h6>
                  <span className="price">$39.00</span>
                </div>
              </div>

              <div className="home2-slide2-product2">
                <button className="slide-pointer">
                  <span>+</span>
                </button>
                <div className="slide-product">
                  <div className="image">
                    <img
                      src="/images/slider/home2/slider-2-3.webp"
                      alt="Slide Product"
                    />
                  </div>
                  <h6 className="title">Country Feast set</h6>
                  <span className="price">$39.00</span>
                </div>
              </div>
            </div>
            <div className="home2-slide-content">
              <h5 className="sub-title">DAILY OFFER</h5>
              <h2 className="title">DESIGNS FOR YOU</h2>
              <div className="link">
                <a href="shop.html">shop collection</a>
              </div>
            </div>
            <div className="home2-slide-pages">
              <span className="current">2</span>
              <span className="border"></span>
              <span className="total">3</span>
            </div>
          </div>

          {/* Slide 3 */}
          <div
            className="home2-slide-item swiper-slide"
            data-swiper-autoplay="5000"
            data-bg-color="#F1DED0"
          >
            <div className="home2-slide3-image">
              <img
                src="/images/slider/home2/slider-3-1.webp"
                alt="Slide Three Image"
              />

              <div className="home2-slide3-product1">
                <button className="slide-pointer">
                  <span>+</span>
                </button>
                <div className="slide-product">
                  <div className="image">
                    <img
                      src="/images/slider/home2/slider-3-2.webp"
                      alt="Slide Product"
                    />
                  </div>
                  <h6 className="title">Country Feast set</h6>
                  <span className="price">$39.00</span>
                </div>
              </div>

              <div className="home2-slide3-product2">
                <button className="slide-pointer">
                  <span>+</span>
                </button>
                <div className="slide-product">
                  <div className="image">
                    <img
                      src="/images/slider/home2/slider-3-3.webp"
                      alt="Slide Product"
                    />
                  </div>
                  <h6 className="title">Country Feast set</h6>
                  <span className="price">$39.00</span>
                </div>
              </div>
            </div>
            <div className="home2-slide-content">
              <h5 className="sub-title">DAILY OFFER</h5>
              <h2 className="title">Country Feast Set</h2>
              <div className="link">
                <a href="shop.html">shop collection</a>
              </div>
            </div>
            <div className="home2-slide-pages">
              <span className="current">3</span>
              <span className="border"></span>
              <span className="total">3</span>
            </div>
          </div>
        </div>

        <div className="home2-slider-prev swiper-button-prev">
          <i className="ti-angle-left"></i>
        </div>
        <div className="home2-slider-next swiper-button-next">
          <i className="ti-angle-right"></i>
        </div>
      </div>
      {/* Slider main container End */}

      <div class="section section-padding" data-bg-image="/images/bg/home-2.webp">
        <div class="container">
            <div class="row learts-mb-n30">

                <div class="col-lg-5 col-12 ms-auto align-self-center learts-mb-30">
                    <div class="about-us">
                        <div class="inner">
                            <img class="logo " src="/images/logo/logo-3.webp" alt="Site Logo"/>
                            <h2 class="title">Making & crafting</h2>
                            <span class="special-title">Handicraft shop</span>
                            <p>Crafting beautiful stuff with our own hands and the help from useful tools is a wonderful process, where you can enjoy yourself while pulling out some ideas and busy perfecting your work.</p>
                            <a href="#" class="link">Online Store</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-5 col-md-6 col-12 ms-auto learts-mb-30">
                    <div class="category-banner2">
                        <a href="shop.html" class="inner">
                            <div class="image"><img src="/images/banner/category/banner-s2-1.webp" alt=""/></div>
                            <div class="content">
                                <h3 class="title">Toys<span class="number">6 items</span></h3>
                            </div>
                        </a>
                        <span class="banner-desc right">NEW COLLECTION</span>
                    </div>
                </div>

                <div class="col-lg-5 col-md-6 col-12 learts-mb-30">
                    <div class="category-banner2">
                        <a href="shop.html" class="inner">
                            <div class="image"><img src="/images/banner/category/banner-s2-2.webp" alt=""/></div>
                            <div class="content">
                                <h3 class="title">Kniting & Sewing<span class="number">4 items</span></h3>
                            </div>
                        </a>
                        <span class="banner-desc right">SALE UP TO 40%</span>
                    </div>
                </div>

                <div class="col-lg-5 col-md-6 col-12 ms-auto learts-mb-30">
                    <div class="section-padding pb-0 d-none d-lg-block"></div>
                    <div class="category-banner2">
                        <a href="shop.html" class="inner">
                            <div class="image"><img src="/images/banner/category/banner-s2-3.webp" alt=""/></div>
                            <div class="content">
                                <h3 class="title">Gift ideas<span class="number">16 items</span></h3>
                            </div>
                        </a>
                        <span class="banner-desc right">BEST SELLERS</span>
                    </div>
                </div>

                <div class="col-lg-5 col-md-6 col-12 ms-auto learts-mb-30">
                    <div class="section learts-pt-40 d-none d-lg-block"></div>
                    <div class="category-banner2">
                        <a href="shop.html" class="inner">
                            <div class="image"><img src="/images/banner/category/banner-s2-4.webp" alt=""/></div>
                            <div class="content">
                                <h3 class="title">Home Decor<span class="number">16 items</span></h3>
                            </div>
                        </a>
                        <span class="banner-desc left">BEST SELLERS</span>
                    </div>
                </div>

                <div className="d-flex align-items-center col-lg-5 col-12 ms-auto learts-mb-30">
                    <div className="sale-banner3">
                        <span className="special-title">Spring sale</span>
                        <h2 className="title" data-text="ss – 18">Sale up to 10% all</h2>
                        <a href="#" className="link">ONLINE STORE</a>
                    </div>
                </div>

            </div>
        </div>
    </div>

    {/* <!-- Gallery Section Start --> */}
    <div class="section section-padding border-top">
        <div class="container">

            {/* <!-- Section Title Start --> */}
            <div class="section-title2 text-center">
                <h3 class="sub-title">Follow us on Instagram</h3>
                <h2 class="title">@learts_shop</h2>
            </div>
            {/* <!-- Section Title End --> */}

            <div class="instafeed instafeed-carousel instafeed-carousel1">
                <a class="instafeed-item" href="#">
                    <img src="/images/instagram/instagram-1.webp" alt="instagram image" />
                    <i class="fab fa-instagram"></i>
                </a>
                <a class="instafeed-item" href="#">
                    <img src="/images/instagram/instagram-2.webp" alt="instagram image" />
                    <i class="fab fa-instagram"></i>
                </a>
                <a class="instafeed-item" href="#">
                    <img src="/images/instagram/instagram-3.webp" alt="instagram image" />
                    <i class="fab fa-instagram"></i>
                </a>
                <a class="instafeed-item" href="#">
                    <img src="/images/instagram/instagram-4.webp" alt="instagram image" />
                    <i class="fab fa-instagram"></i>
                </a>
                <a class="instafeed-item" href="#">
                    <img src="/images/instagram/instagram-4.webp" alt="instagram image" />
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    </div>
    {/* <!-- Gallery Section End --> */}


{/* Shop Toolbar Start */}
<div className="shop-toolbar border-bottom">
  <div className="container">
    <div className="row learts-mb-n20">
    <h2 class="title" >Featured  Products</h2>

      {/* Isotop Filter Start */}
      {/* <div className="col-md col-12 align-self-center learts-mb-20">
        <div className="isotope-filter shop-product-filter" data-target="#shop-products">
          <button className="active" data-filter="*">all</button>
          <button data-filter=".new">New Products</button>
          <button data-filter=".sales">Sales Products</button>
        </div>
      </div> */}
      {/* Isotop Filter End */}

      {/* <div className="col-md-auto col-12 learts-mb-20">
        <ul className="shop-toolbar-controls">

          <li>
            <div className="product-sorting">
              <select className="nice-select">
                <option value="menu_order" selected="selected">Default sorting</option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="date">Sort by latest</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
              </select>
            </div>
          </li>
          <li>
            <div className="product-column-toggle d-none d-xl-flex">
              <button className="toggle active hintT-top" data-hint="5 Column" data-column="5"><i className="ti-layout-grid4-alt"></i></button>
              <button className="toggle hintT-top" data-hint="4 Column" data-column="4"><i className="ti-layout-grid3-alt"></i></button>
              <button className="toggle hintT-top" data-hint="3 Column" data-column="3"><i className="ti-layout-grid2-alt"></i></button>
            </div>
          </li>
          <li>
            <a className="product-filter-toggle" href="#product-filter">Filters</a>
          </li>

        </ul>
      </div> */}

    </div>
  </div>
</div>
{/* Shop Toolbar End */}

{/* Product Filter Start */}
{/* <div id="product-filter" className="product-filter bg-light">
  <div className="container">
  </div>
</div> */}
{/* Product Filter End */}

<div className="section learts-mt-70">
  <div className="container">
    {/* Products Start */}
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">

      {/* <div className="grid-sizer col-1"></div> */}

      

      <div className="grid-item col featured mt-3">
        <div className="product">
          <div className="product-thumb">
            <a href="product-details.html" className="image">
              <img src="/images/product/s328/product-17.webp" alt="Product Image" />
              <img className="image-hover " src="/images/product/s328/product-17-hover.webp" alt="Product Image" />
            </a>
            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
          </div>
          <div className="product-info">
            <h6 className="title"><a href="product-details.html">3D Attractive Pot</a></h6>
            <span className="price">
              $90.00
            </span>
            <div className="product-buttons">
              <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
              <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
              <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-item col new mt-3">
        <div className="product">
          <div className="product-thumb">
            <a href="product-details.html" className="image">
              <span className="product-badges">
                <span className="outofstock"><i className="far fa-frown"></i></span>
              </span>
              <img src="/images/product/s328/product-14.webp" alt="Product Image" />
              <img className="image-hover " src="/images/product/s328/product-14-hover.webp" alt="Product Image" />
            </a>
            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
          </div>
          <div className="product-info">
            <h6 className="title"><a href="product-details.html">Abstract Folded Pots</a></h6>
            <span className="price">
              $50.00 - $55.00
            </span>
            <div className="product-buttons">
              <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
              <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
              <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-item col featured mt-3">
        <div className="product">
          <div className="product-thumb">
            <span className="product-badges">
              <span className="hot">hot</span>
            </span>
            <a href="product-details.html" className="image">
              <img src="/images/product/s328/product-30.webp" alt="Product Image" />
              <img className="image-hover " src="/images/product/s328/product-30-hover.webp" alt="Product Image" />
            </a>
            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
          </div>
          <div className="product-info">
            <h6 className="title"><a href="product-details.html">Adhesive Tape Dispenser</a></h6>
            <span className="price">
              $15.00
            </span>
            <div className="product-buttons">
              <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
              <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
              <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-item col featured mt-3">
        <div className="product">
          <div className="product-thumb">
            <a href="product-details.html" className="image">
              <img src="/images/product/s328/product-17.webp" alt="Product Image" />
              <img className="image-hover " src="/images/product/s328/product-17-hover.webp" alt="Product Image" />
            </a>
            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
          </div>
          <div className="product-info">
            <h6 className="title"><a href="product-details.html">3D Attractive Pot</a></h6>
            <span className="price">
              $90.00
            </span>
            <div className="product-buttons">
              <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
              <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
              <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-item col new mt-3">
        <div className="product">
          <div className="product-thumb">
            <a href="product-details.html" className="image">
              <span className="product-badges">
                <span className="outofstock"><i className="far fa-frown"></i></span>
              </span>
              <img src="/images/product/s328/product-14.webp" alt="Product Image" />
              <img className="image-hover " src="/images/product/s328/product-14-hover.webp" alt="Product Image" />
            </a>
            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
          </div>
          <div className="product-info">
            <h6 className="title"><a href="product-details.html">Abstract Folded Pots</a></h6>
            <span className="price">
              $50.00 - $55.00
            </span>
            <div className="product-buttons">
              <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
              <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
              <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-item col featured mt-3">
        <div className="product">
          <div className="product-thumb">
            <span className="product-badges">
              <span className="hot">hot</span>
            </span>
            <a href="product-details.html" className="image">
              <img src="/images/product/s328/product-30.webp" alt="Product Image" />
              <img className="image-hover " src="/images/product/s328/product-30-hover.webp" alt="Product Image" />
            </a>
            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
          </div>
          <div className="product-info">
            <h6 className="title"><a href="product-details.html">Adhesive Tape Dispenser</a></h6>
            <span className="price">
              $15.00
            </span>
            <div className="product-buttons">
              <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
              <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
              <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-item col featured mt-3">
        <div className="product">
          <div className="product-thumb">
            <a href="product-details.html" className="image">
              <img src="/images/product/s328/product-17.webp" alt="Product Image" />
              <img className="image-hover " src="/images/product/s328/product-17-hover.webp" alt="Product Image" />
            </a>
            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
          </div>
          <div className="product-info">
            <h6 className="title"><a href="product-details.html">3D Attractive Pot</a></h6>
            <span className="price">
              $90.00
            </span>
            <div className="product-buttons">
              <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
              <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
              <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-item col new mt-3">
        <div className="product">
          <div className="product-thumb">
            <a href="product-details.html" className="image">
              <span className="product-badges">
                <span className="outofstock"><i className="far fa-frown"></i></span>
              </span>
              <img src="/images/product/s328/product-14.webp" alt="Product Image" />
              <img className="image-hover " src="/images/product/s328/product-14-hover.webp" alt="Product Image" />
            </a>
            <a href="wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist"><i className="far fa-heart"></i></a>
          </div>
          <div className="product-info">
            <h6 className="title"><a href="product-details.html">Abstract Folded Pots</a></h6>
            <span className="price">
              $50.00 - $55.00
            </span>
            <div className="product-buttons">
              <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View"><i className="fas fa-search"></i></a>
              <a href="#" className="product-button hintT-top" data-hint="Add to Cart"><i className="fas fa-shopping-cart"></i></a>
              <a href="#" className="product-button hintT-top" data-hint="Compare"><i className="fas fa-random"></i></a>
            </div>
          </div>
        </div>
      </div>



      

      {/* Additional product items would continue here... */}

    </div>
    {/* Products End */}
    {/* <div className="text-center learts-mt-70">
      <a href="#" className="btn btn-dark btn-outline-hover-dark"><i className="ti-plus"></i> More</a>
    </div> */}
  </div>
</div>
<Footer/>
    </>
  );
}
