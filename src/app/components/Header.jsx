import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <>
      {/* Header Section Start */}
      <div className="header-section section section-fluid bg-white d-none d-xl-block">
        <div className="container">
          <div className="row align-items-center">

            {/* Header Logo Start */}
            <div className="col-auto">
            <div className="header-logo">
  <Link href="/">
    <Image
      src="/images/logo/logo-2.webp"
      alt="Learts Logo"
      width={150} // adjust to your design
      height={50} // adjust to your design
      priority // optional: for faster loading
    />
  </Link>
</div>            </div>
            {/* Header Logo End */}

            {/* Search Start */}
            <div className="col-auto me-auto">
              <nav className="site-main-menu site-main-menu-left menu-height-100 justify-content-center">
                <ul>
                  <li className="has-childre"><a href="/"><span className="menu-text">Home</span></a>
                  </li>
                  <li className="has-childre"><a href="/shopping"><span className="menu-text">Shop</span></a>
                  </li>
                  <li className="has-childre"><a href="/"><span className="menu-text">AboutUs</span></a>
                  </li>
                  <li className="has-childre"><a href="/"><span className="menu-text">ContactUs</span></a>
                  </li>
                  {/* <li className="has-childre"><a href="#"><span className="menu-text">Blog</span></a>
                  </li> */}
                  {/* <li className="has-children"><a href="#"><span className="menu-text">Pages</span></a>
                  </li> */}
                </ul>
              </nav>
            </div>
            {/* Search End */}

            {/* Search Start */}
            <div className="col-auto d-none d-xl-block">
              <div className="header2-search">
                <form action="#">
                  <input type="text" placeholder="Search..." />
                  <button className="btn"><i className="fas fa-search"></i></button>
                </form>
              </div>
            </div>
            {/* Search End */}

            {/* Header Tools Start */}
            <div className="col-auto">
              <div className="header-tools justify-content-end">
                <div className="header-login">
                  <a href="my-account.html"><i className="far fa-user"></i></a>
                </div>
                <div className="header-wishlist">
                  <a href="#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="far fa-heart"></i></a>
                </div>
                <div className="header-cart">
                  <a href="#offcanvas-cart" className="offcanvas-toggle"><span className="cart-count">3</span><i className="fas fa-shopping-cart"></i></a>
                </div>
              </div>
            </div>
            {/* Header Tools End */}

          </div>
        </div>
      </div>
      {/* Header Section End */}


      <div className="sticky-header section bg-white section-fluid d-none d-xl-block">
  <div className="container">
    <div className="row align-items-center">

      {/* Header Logo Start */}
      <div className="col-xl-auto col">
        <div className="header-logo">
          <a href="index.html">
            <img src="/images/logo/logo-2.webp" alt="Learts Logo" />
          </a>
        </div>
      </div>
      {/* Header Logo End */}

      {/* Search Start */}
      <div className="col-auto me-auto d-none d-xl-block">
        <nav className="site-main-menu site-main-menu-left justify-content-center">
          <ul>
            <li className="has-children">
              <a href="/"><span className="menu-text">Home</span></a>
              <ul className="sub-menu mega-menu">
                <li>
                  <a href="#" className="mega-menu-title"><span className="menu-text">HOME GROUP</span></a>
                  <ul>
                    <li>
                      <img className="mmh_img" src="/images/demo/menu/home-01.webp" alt="home-01" />
                      <a href="index.html"><span className="menu-text">Arts Propelled</span></a>
                    </li>
                    <li>
                      <img className="mmh_img" src="/images/demo/menu/home-02.webp" alt="home-02" />
                      <a href="index-2.html"><span className="menu-text">Decor Thriving</span></a>
                    </li>
                    <li>
                      <img className="mmh_img" src="/images/demo/menu/home-03.webp" alt="home-03" />
                      <a href="index-3.html"><span className="menu-text">Savvy Delight</span></a>
                    </li>
                    <li>
                      <img className="mmh_img" src="/images/demo/menu/home-04.webp" alt="home-04" />
                      <a href="index-4.html"><span className="menu-text">Perfect Escapes</span></a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="index-2.html" className="mega-menu-title"><span className="menu-text">HOME GROUP</span></a>
                  <ul>
                    <li>
                      <img className="mmh_img" src="/images/demo/menu/home-05.webp" alt="home-05" />
                      <a href="index-5.html"><span className="menu-text">Kitchen Cozy</span></a>
                    </li>
                    <li>
                      <img className="mmh_img" src="/images/demo/menu/home-06.webp" alt="home-06" />
                      <a href="index-6.html"><span className="menu-text">Dreamy Designs</span></a>
                    </li>
                    <li>
                      <img className="mmh_img" src="/images/demo/menu/home-07.webp" alt="home-07" />
                      <a href="index-7.html"><span className="menu-text">Crispy Recipes</span></a>
                    </li>
                    <li>
                      <img className="mmh_img" src="/images/demo/menu/home-08.webp" alt="home-08" />
                      <a href="index-8.html"><span className="menu-text">Decoholic Chic</span></a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="index-2.html" className="mega-menu-title"><span className="menu-text">HOME GROUP</span></a>
                  <ul>
                    <li>
                      <img className="mmh_img" src="/images/demo/menu/home-9.webp" alt="home-9" />
                      <a href="index-9.html"><span className="menu-text">Reblended Dish</span></a>
                    </li>
                    <li>
                      <img className="mmh_img" src="/images/demo/menu/home-10.webp" alt="home-10" />
                      <a href="index-10.html"><span className="menu-text">Craftin House</span></a>
                    </li>
                    <li>
                      <img className="mmh_img" src="/images/demo/menu/home-11.webp" alt="home-11" />
                      <a href="index-11.html"><span className="menu-text">Craftswork Biz</span></a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="menu-banner">
                    <img src="/images/banner/menu-banner-1.webp" alt="Home Menu Banner" />
                  </a>
                </li>
              </ul>
            </li>

            {/* Additional menu items like Shop, Project, Elements, Blog can be converted similarly */}
          </ul>
        </nav>
      </div>
      {/* Search End */}

    </div>
  </div>
</div>


<div className="mobile-header bg-white section d-xl-none">
  <div className="container">
    <div className="row align-items-center">

      {/* Header Logo Start */}
      <div className="col">
        <div className="header-logo">
          <a href="index.html">
            <img src="/images/logo/logo-2.webp" alt="Learts Logo" />
          </a>
        </div>
      </div>
      {/* Header Logo End */}

      {/* Header Tools Start */}
      <div className="col-auto">
        <div className="header-tools justify-content-end">
          <div className="header-login d-none d-sm-block">
            <a href="my-account.html"><i className="far fa-user"></i></a>
          </div>
          <div className="header-search d-none d-sm-block">
            <a href="#offcanvas-search" className="offcanvas-toggle"><i className="fas fa-search"></i></a>
          </div>
          <div className="header-wishlist d-none d-sm-block">
            <a href="#offcanvas-wishlist" className="offcanvas-toggle">
              <span className="wishlist-count">3</span>
              <i className="far fa-heart"></i>
            </a>
          </div>
          <div className="header-cart">
            <a href="#offcanvas-cart" className="offcanvas-toggle">
              <span className="cart-count">3</span>
              <i className="fas fa-shopping-cart"></i>
            </a>
          </div>
          <div className="mobile-menu-toggle">
            <a href="#offcanvas-mobile-menu" className="offcanvas-toggle">
              <svg viewBox="0 0 800 600">
                <path
                  d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                  className="top"
                />
                <path d="M300,320 L540,320" className="middle" />
                <path
                  d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                  className="bottom"
                  transform="translate(480, 320) scale(1, -1) translate(-480, -318)"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Header Tools End */}

    </div>
  </div>
</div>


<div className="mobile-header sticky-header bg-white section d-xl-none">
  <div className="container">
    <div className="row align-items-center">

      {/* Header Logo Start */}
      <div className="col">
        <div className="header-logo">
          <a href="index.html">
            <img src="/images/logo/logo-2.webp" alt="Learts Logo" />
          </a>
        </div>
      </div>
      {/* Header Logo End */}

      {/* Header Tools Start */}
      <div className="col-auto">
        <div className="header-tools justify-content-end">
          <div className="header-login d-none d-sm-block">
            <a href="my-account.html"><i className="far fa-user"></i></a>
          </div>
          <div className="header-search d-none d-sm-block">
            <a href="#offcanvas-search" className="offcanvas-toggle"><i className="fas fa-search"></i></a>
          </div>
          <div className="header-wishlist d-none d-sm-block">
            <a href="#offcanvas-wishlist" className="offcanvas-toggle">
              <span className="wishlist-count">3</span>
              <i className="far fa-heart"></i>
            </a>
          </div>
          <div className="header-cart">
            <a href="#offcanvas-cart" className="offcanvas-toggle">
              <span className="cart-count">3</span>
              <i className="fas fa-shopping-cart"></i>
            </a>
          </div>
          <div className="mobile-menu-toggle">
            <a href="#offcanvas-mobile-menu" className="offcanvas-toggle">
              <svg viewBox="0 0 800 600">
                <path
                  d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                  className="top"
                />
                <path
                  d="M300,320 L540,320"
                  className="middle"
                />
                <path
                  d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                  className="bottom"
                  transform="translate(480, 320) scale(1, -1) translate(-480, -318)"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Header Tools End */}

    </div>
  </div>
</div>


<div id="offcanvas-search" className="offcanvas offcanvas-search">
  <div className="inner">
    <div className="offcanvas-search-form">
      <button className="offcanvas-close">×</button>
      <form action="#">
        <div className="row mb-n3">
          <div className="col-lg-8 col-12 mb-3">
            <input type="text" placeholder="Search Products..." />
          </div>
          <div className="col-lg-4 col-12 mb-3">
            <select className="search-select select2-basic">
              <option value="0">All Categories</option>
              <option value="kids-babies">Kids &amp; Babies</option>
              <option value="home-decor">Home Decor</option>
              <option value="gift-ideas">Gift ideas</option>
              <option value="kitchen">Kitchen</option>
              <option value="toys">Toys</option>
              <option value="kniting-sewing">Kniting &amp; Sewing</option>
              <option value="pots">Pots</option>
            </select>
          </div>
        </div>
      </form>
    </div>
    <p className="search-description text-body-light mt-2">
      <span># Type at least 1 character to search</span>{" "}
      <span># Hit enter to search or ESC to close</span>
    </p>
  </div>
</div>

<div id="offcanvas-wishlist" className="offcanvas offcanvas-wishlist">
  <div className="inner">
    <div className="head">
      <span className="title">Wishlist</span>
      <button className="offcanvas-close">×</button>
    </div>
    <div className="body customScroll">
      <ul className="minicart-product-list">
        <li>
          <a href="product-details.html" className="image">
            <img src="/images/product/cart-product-1.webp" alt="Cart product" />
          </a>
          <div className="content">
            <a href="product-details.html" className="title">Walnut Cutting Board</a>
            <span className="quantity-price">
              1 x <span className="amount">$100.00</span>
            </span>
            <a href="#" className="remove">×</a>
          </div>
        </li>
        <li>
          <a href="product-details.html" className="image">
            <img src="/images/product/cart-product-2.webp" alt="Cart product" />
          </a>
          <div className="content">
            <a href="product-details.html" className="title">Lucky Wooden Elephant</a>
            <span className="quantity-price">
              1 x <span className="amount">$35.00</span>
            </span>
            <a href="#" className="remove">×</a>
          </div>
        </li>
        <li>
          <a href="product-details.html" className="image">
            <img src="/images/product/cart-product-3.webp" alt="Cart product" />
          </a>
          <div className="content">
            <a href="product-details.html" className="title">Fish Cut Out Set</a>
            <span className="quantity-price">
              1 x <span className="amount">$9.00</span>
            </span>
            <a href="#" className="remove">×</a>
          </div>
        </li>
      </ul>
    </div>
    <div className="foot">
      <div className="buttons">
        <a href="wishlist.html" className="btn btn-dark btn-hover-primary">view wishlist</a>
      </div>
    </div>
  </div>
</div>

<div id="offcanvas-cart" className="offcanvas offcanvas-cart">
  <div className="inner">
    <div className="head">
      <span className="title">Cart</span>
      <button className="offcanvas-close">×</button>
    </div>
    <div className="body customScroll">
      <ul className="minicart-product-list">
        <li>
          <a href="product-details.html" className="image">
            <img src="/images/product/cart-product-1.webp" alt="Cart product" />
          </a>
          <div className="content">
            <a href="product-details.html" className="title">Walnut Cutting Board</a>
            <span className="quantity-price">
              1 x <span className="amount">$100.00</span>
            </span>
            <a href="#" className="remove">×</a>
          </div>
        </li>
        <li>
          <a href="product-details.html" className="image">
            <img src="/images/product/cart-product-2.webp" alt="Cart product" />
          </a>
          <div className="content">
            <a href="product-details.html" className="title">Lucky Wooden Elephant</a>
            <span className="quantity-price">
              1 x <span className="amount">$35.00</span>
            </span>
            <a href="#" className="remove">×</a>
          </div>
        </li>
        <li>
          <a href="product-details.html" className="image">
            <img src="/images/product/cart-product-3.webp" alt="Cart product" />
          </a>
          <div className="content">
            <a href="product-details.html" className="title">Fish Cut Out Set</a>
            <span className="quantity-price">
              1 x <span className="amount">$9.00</span>
            </span>
            <a href="#" className="remove">×</a>
          </div>
        </li>
      </ul>
    </div>
    <div className="foot">
      <div className="sub-total">
        <strong>Subtotal :</strong>
        <span className="amount">$144.00</span>
      </div>
      <div className="buttons">
        <a href="/cart" className="btn btn-dark btn-hover-primary">view cart</a>
        <a href="checkout.html" className="btn btn-outline-dark">checkout</a>
      </div>
      <p className="minicart-message">Free Shipping on All Orders Over $100!</p>
    </div>
  </div>
</div>


<div id="offcanvas-mobile-menu" className="offcanvas offcanvas-mobile-menu">
      <div className="inner customScroll">
        <div className="offcanvas-menu-search-form">
          <form action="#">
            <input type="text" placeholder="Search..." />
            <button><i className="fas fa-search"></i></button>
          </form>
        </div>
        <div className="offcanvas-menu">
          <ul>
            <li>
              <a href="#"><span className="menu-text">Home</span></a>
              <ul className="sub-menu">
                <li>
                  <a href="#"><span className="menu-text">Home Group</span></a>
                  <ul className="sub-menu">
                    <li><a href="index.html"><span className="menu-text">Arts Propelled</span></a></li>
                    <li><a href="index-2.html"><span className="menu-text">Decor Thriving</span></a></li>
                    <li><a href="index-3.html"><span className="menu-text">Savvy Delight</span></a></li>
                    <li><a href="index-4.html"><span className="menu-text">Perfect Escapes</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="#"><span className="menu-text">Home Group</span></a>
                  <ul className="sub-menu">
                    <li><a href="index-5.html"><span className="menu-text">Kitchen Cozy</span></a></li>
                    <li><a href="index-6.html"><span className="menu-text">Dreamy Designs</span></a></li>
                    <li><a href="index-7.html"><span className="menu-text">Crispy Recipes</span></a></li>
                    <li><a href="index-8.html"><span className="menu-text">Decoholic Chic</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="#"><span className="menu-text">Home Group</span></a>
                  <ul className="sub-menu">
                    <li><a href="index-9.html"><span className="menu-text">Reblended Dish</span></a></li>
                    <li><a href="index-10.html"><span className="menu-text">Craftin House</span></a></li>
                    <li><a href="index-11.html"><span className="menu-text">Craftswork Biz</span></a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#"><span className="menu-text">Shop</span></a>
              <ul className="sub-menu">
                <li>
                  <a href="#"><span className="menu-text">Shop Pages</span></a>
                  <ul className="sub-menu">
                    <li><a href="shop.html"><span className="menu-text">Shop No Sidebar</span></a></li>
                    <li><a href="shop-left-sidebar.html"><span className="menu-text">Shop Left Sidebar</span></a></li>
                    <li><a href="shop-right-sidebar.html"><span className="menu-text">Shop Right Sidebar</span></a></li>
                    <li><a href="shop-fullwidth-no-gutters.html"><span className="menu-text">Shop Fullwidth No Space</span></a></li>
                    <li><a href="shop-fullwidth.html"><span className="menu-text">Shop Fullwidth No Sidebar</span></a></li>
                    <li><a href="shop-fullwidth-left-sidebar.html"><span className="menu-text">Shop Fullwidth Left Sidebar</span></a></li>
                    <li><a href="shop-fullwidth-right-sidebar.html"><span className="menu-text">Shop Fullwidth Right Sidebar</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="#"><span className="menu-text">Product Pages</span></a>
                  <ul className="sub-menu">
                    <li><a href="product-details.html"><span className="menu-text">Basic</span></a></li>
                    <li><a href="product-details-fullwidth.html"><span className="menu-text">Fullwidth</span></a></li>
                    <li><a href="product-details-sticky.html"><span className="menu-text">Sticky Details</span></a></li>
                    <li><a href="product-details-sidebar.html"><span className="menu-text">Width Sidebar</span></a></li>
                    <li><a href="product-details-extra-content.html"><span className="menu-text">Extra Content</span></a></li>
                    <li><a href="product-details-image-variation.html"><span className="menu-text">Variations Images</span></a></li>
                    <li><a href="product-details-group.html"><span className="menu-text">Bought Together</span></a></li>
                    <li><a href="product-details-360.html"><span className="menu-text">Product 360</span></a></li>
                    <li><a href="product-details-background.html"><span className="menu-text">Product with Background</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="mega-menu-title"><span className="menu-text">PRODUCT & Other PAGES</span></a>
                  <ul className="sub-menu">
                    <li><a href="shopping-cart.html"><span className="menu-text">Shopping Cart</span></a></li>
                    <li><a href="checkout.html"><span className="menu-text">Checkout</span></a></li>
                    <li><a href="order-tracking.html"><span className="menu-text">Order Tracking</span></a></li>
                    <li><a href="wishlist.html"><span className="menu-text">Wishlist</span></a></li>
                    <li><a href="login-register.html"><span className="menu-text">Customer Login</span></a></li>
                    <li><a href="my-account.html"><span className="menu-text">My Account</span></a></li>
                    <li><a href="lost-password.html"><span className="menu-text">Lost Password</span></a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#"><span className="menu-text">Project</span></a>
              <ul className="sub-menu">
                <li><a href="portfolio-3-columns.html"><span className="menu-text">Portfolio 3 Columns</span></a></li>
                <li><a href="portfolio-4-columns.html"><span className="menu-text">Portfolio 4 Columns</span></a></li>
                <li><a href="portfolio-5-columns.html"><span className="menu-text">Portfolio 5 Columns</span></a></li>
                <li><a href="portfolio-details.html"><span className="menu-text">Portfolio Details</span></a></li>
              </ul>
            </li>
            <li>
              <a href="#"><span className="menu-text">Elements</span></a>
              <ul className="sub-menu">
                <li>
                  <a href="#" className="mega-menu-title"><span className="menu-text">Column One</span></a>
                  <ul className="sub-menu">
                    <li><a href="elements-products.html"><span className="menu-text">Product Styles</span></a></li>
                    <li><a href="elements-products-tabs.html"><span className="menu-text">Product Tabs</span></a></li>
                    <li><a href="elements-product-sale-banner.html"><span className="menu-text">Product & Sale Banner</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="mega-menu-title"><span className="menu-text">Column Two</span></a>
                  <ul className="sub-menu">
                    <li><a href="elements-category-banner.html"><span className="menu-text">Category Banner</span></a></li>
                    <li><a href="elements-team.html"><span className="menu-text">Team Member</span></a></li>
                    <li><a href="elements-testimonials.html"><span className="menu-text">Testimonials</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="mega-menu-title"><span className="menu-text">Column Three</span></a>
                  <ul className="sub-menu">
                    <li><a href="elements-instagram.html"><span className="menu-text">Instagram</span></a></li>
                    <li><a href="elements-map.html"><span className="menu-text">Google Map</span></a></li>
                    <li><a href="elements-icon-box.html"><span className="menu-text">Icon Box</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="mega-menu-title"><span className="menu-text">Column Four</span></a>
                  <ul className="sub-menu">
                    <li><a href="elements-buttons.html"><span className="menu-text">Buttons</span></a></li>
                    <li><a href="elements-faq.html"><span className="menu-text">FAQs / Toggles</span></a></li>
                    <li><a href="elements-brands.html"><span className="menu-text">Brands</span></a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#"><span className="menu-text">Blog</span></a>
              <ul className="sub-menu">
                <li>
                  <a href="#"><span className="menu-text">Standard Layout</span></a>
                  <ul className="sub-menu">
                    <li><a href="blog-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                    <li><a href="blog-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                    <li><a href="blog-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="#"><span className="menu-text">Grid Layout</span></a>
                  <ul className="sub-menu">
                    <li><a href="blog-grid-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                    <li><a href="blog-grid-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                    <li><a href="blog-grid-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="#"><span className="menu-text">List Layout</span></a>
                  <ul className="sub-menu">
                    <li><a href="blog-list-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                    <li><a href="blog-list-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                    <li><a href="blog-list-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="#"><span className="menu-text">Masonry Layout</span></a>
                  <ul className="sub-menu">
                    <li><a href="blog-masonry-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                    <li><a href="blog-masonry-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                    <li><a href="blog-masonry-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="#"><span className="menu-text">Single Post Layout</span></a>
                  <ul className="sub-menu">
                    <li><a href="blog-details-right-sidebar.html"><span className="menu-text">Right Sidebar</span></a></li>
                    <li><a href="blog-details-left-sidebar.html"><span className="menu-text">Left Sidebar</span></a></li>
                    <li><a href="blog-details-fullwidth.html"><span className="menu-text">Full Width</span></a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#"><span className="menu-text">Pages</span></a>
              <ul className="sub-menu">
                <li><a href="about-us.html"><span className="menu-text">About us</span></a></li>
                <li><a href="about-us-2.html"><span className="menu-text">About us 02</span></a></li>
                <li><a href="contact-us.html"><span className="menu-text">Contact us</span></a></li>
                <li><a href="coming-soon.html"><span className="menu-text">Coming Soon</span></a></li>
                <li><a href="404.html"><span className="menu-text">Page 404</span></a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="offcanvas-buttons">
          <div className="header-tools">
            <div className="header-login">
              <a href="my-account.html"><i className="far fa-user"></i></a>
            </div>
            <div className="header-wishlist">
              <a href="wishlist.html"><span>3</span><i className="far fa-heart"></i></a>
            </div>
            <div className="header-cart">
              <a href="shopping-cart.html"><span className="cart-count">3</span><i className="fas fa-shopping-cart"></i></a>
            </div>
          </div>
        </div>
        <div className="offcanvas-social">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>

    <div className="offcanvas-overlay"></div>







      



    </>
  );
}

export default Header;