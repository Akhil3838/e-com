import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function page() {
  return (
    <>

    <Header/>
    {/* Page Title/Header Start */}
<div className="page-title-section section" data-bg-image="/images/bg/page-title-1.webp">
  <div className="container">
    <div className="row">
      <div className="col">

        <div className="page-title">
          <h1 className="title">Cart</h1>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Cart</li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</div>
{/* Page Title/Header End */}






    <div className="section section-padding">
  <div className="container">
    <form className="cart-form" action="#">
      <table className="cart-wishlist-table table">
        <thead>
          <tr>
            <th className="name" colSpan="2">Product</th>
            <th className="price">Price</th>
            <th className="quantity">Quantity</th>
            <th className="subtotal">Total</th>
            <th className="remove">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="thumbnail">
              <a href="product-details.html">
                <img src="/images/product/cart-product-1.webp" alt="cart-product-1" />
              </a>
            </td>
            <td className="name">
              <a href="product-details.html">Walnut Cutting Board</a>
            </td>
            <td className="price"><span>£100.00</span></td>
            <td className="quantity">
              <div className="product-quantity">
                <span className="qty-btn minus"><i className="ti-minus"></i></span>
                <input type="text" className="input-qty" defaultValue="1" />
                <span className="qty-btn plus"><i className="ti-plus"></i></span>
              </div>
            </td>
            <td className="subtotal"><span>£100.00</span></td>
            <td className="remove"><a href="#" className="btn">×</a></td>
          </tr>
          <tr>
            <td className="thumbnail">
              <a href="product-details.html">
                <img src="/images/product/cart-product-2.webp" alt="cart-product-2" />
              </a>
            </td>
            <td className="name">
              <a href="product-details.html">Lucky Wooden Elephant</a>
            </td>
            <td className="price"><span>£35.00</span></td>
            <td className="quantity">
              <div className="product-quantity">
                <span className="qty-btn minus"><i className="ti-minus"></i></span>
                <input type="text" className="input-qty" defaultValue="1" />
                <span className="qty-btn plus"><i className="ti-plus"></i></span>
              </div>
            </td>
            <td className="subtotal"><span>£35.00</span></td>
            <td className="remove"><a href="#" className="btn">×</a></td>
          </tr>
          <tr>
            <td className="thumbnail">
              <a href="product-details.html">
                <img src="/images/product/cart-product-3.webp" alt="cart-product-3" />
              </a>
            </td>
            <td className="name">
              <a href="product-details.html">Fish Cut Out Set</a>
            </td>
            <td className="price"><span>£9.00</span></td>
            <td className="quantity">
              <div className="product-quantity">
                <span className="qty-btn minus"><i className="ti-minus"></i></span>
                <input type="text" className="input-qty" defaultValue="1" />
                <span className="qty-btn plus"><i className="ti-plus"></i></span>
              </div>
            </td>
            <td className="subtotal"><span>£9.00</span></td>
            <td className="remove"><a href="#" className="btn">×</a></td>
          </tr>
        </tbody>
      </table>

      <div className="row justify-content-between mb-n3">
        <div className="col-auto mb-3">
          <div className="cart-coupon">
            <input type="text" placeholder="Enter your coupon code" />
            <button className="btn"><i className="fas fa-gift"></i></button>
          </div>
        </div>
        <div className="col-auto">
          <a className="btn btn-light btn-hover-dark mr-3 mb-3" href="shop.html">Continue Shopping</a>
          <button className="btn btn-dark btn-outline-hover-dark mb-3">Update Cart</button>
        </div>
      </div>
    </form>

    <div className="cart-totals mt-5">
      <h2 className="title">Cart totals</h2>
      <table>
        <tbody>
          <tr className="subtotal">
            <th>Subtotal</th>
            <td><span className="amount">£242.00</span></td>
          </tr>
          <tr className="total">
            <th>Total</th>
            <td><strong><span className="amount">£242.00</span></strong></td>
          </tr>
        </tbody>
      </table>
      <a href="checkout.html" className="btn btn-dark btn-outline-hover-dark">Proceed to checkout</a>
    </div>
  </div>
</div>
 <Footer/>
    </>
  )
}

export default page