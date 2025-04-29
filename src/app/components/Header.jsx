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
            <div className="header-logo p-2">
  <Link href="/">
    <Image
      src="/images/logo1.png"
      alt="Learts Logo"
      width={150} // adjust to your design
      height={100} // adjust to your design
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
                  <li className="has-childre"><a href="/"><span className="menu-text">About Us</span></a>
                  </li>
                  <li className="has-childre"><a href="/"><span className="menu-text">Contact Us</span></a>
                  </li>
                  <li className="has-childre"><a href="/login"><span className="menu-text">Login</span></a>
                  </li>
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
        <div className="header-logo p-2">
        <Link href="/">
    <Image
      src="/images/logo1.png"
      alt="Learts Logo"
      width={150} // adjust to your design
      height={100} // adjust to your design
      priority // optional: for faster loading
    />
  </Link>
        </div>
      </div>
      {/* Header Logo End */}

      {/* Search Start */}
      <div className="col-auto me-auto">
              <nav className="site-main-menu site-main-menu-left menu-height-100 justify-content-center">
                <ul>
                  <li className="has-childre"><a href="/"><span className="menu-text">Home</span></a>
                  </li>
                  <li className="has-childre"><a href="/shopping"><span className="menu-text">Shop</span></a>
                  </li>
                  <li className="has-childre"><a href="/"><span className="menu-text">About Us</span></a>
                  </li>
                  <li className="has-childre"><a href="/"><span className="menu-text">Contact Us</span></a>
                  </li>
                  <li className="has-childre"><a href="/login"><span className="menu-text">Login</span></a>
                  </li>

                  {/* <li className="has-childre"><a href="#"><span className="menu-text">Blog</span></a>
                  </li> */}
                  {/* <li className="has-children"><a href="#"><span className="menu-text">Pages</span></a>
                  </li> */}
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
        <Link href="/">
    <Image
      src="/images/logo1.png"
      alt="Learts Logo"
      width={150} // adjust to your design
      height={100} // adjust to your design
      priority // optional: for faster loading
    />
  </Link>

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
        <Link href="/">
    <Image
      src="/images/logo1.png"
      alt="Learts Logo"
      width={150} // adjust to your design
      height={100} // adjust to your design
      priority // optional: for faster loading
    />
  </Link>

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
              <a href="/"><span className="menu-text">Home</span></a>
            </li>
            <li>
              <a href="/shopping"><span className="menu-text">Shop</span></a>
            </li>
            <li>
              <a href="#"><span className="menu-text">About us</span></a>
            </li>
            <li>
              <a href="#"><span className="menu-text">Contact us</span></a>
            </li>
            <li>
              <a href="/login"><span className="menu-text">Login</span></a>
            </li>
          </ul>
        </div>
        <div className="offcanvas-buttons">
          <div className="header-tools">
            <div className="header-login">
              <a href="my-account.html"><i className="far fa-user"></i></a>
            </div>
            <div className="header-cart">
              <a href="/cart"><span className="cart-count">3</span><i className="fas fa-shopping-cart"></i></a>
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