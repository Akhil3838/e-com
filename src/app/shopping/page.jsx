import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Shopping() {
  return (
    <>

    <Header/>

    <div className="page-title-section section" data-bg-image="/images/bg/page-title-1.webp">
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="page-title">
          <h1 className="title">Shop</h1>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Products</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

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
<div id="product-filter" className="product-filter bg-light">
  <div className="container">
  </div>
</div>
{/* Product Filter End */}

<div className="section learts-mt-70">
  <div className="container">
    {/* Products Start */}
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">

      {/* <div className="grid-sizer col-1"></div> */}

      

      <div className="grid-item col featured mt-3">
        <div className="product">
          <div className="product-thumb">
            <a href="/productdetails" className="image">
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
            <a href="/productdetails" className="image">
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
            <a href="/productdetails" className="image">
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
            <a href="/productdetails" className="image">
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
            <a href="/productdetails" className="image">
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
            <a href="/productdetails" className="image">
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
            <a href="/productdetails" className="image">
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
            <a href="/productdetails" className="image">
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
  )
}

export default Shopping