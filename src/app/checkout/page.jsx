import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CheckoutPage = () => {
  return (

<>
<Header/>
{/* Page Title/Header Start */}
<div className="page-title-section section" data-bg-image="assets/images/bg/page-title-1.webp">
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="page-title">
          <h1 className="title">Checkout</h1>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Checkout</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Page Title/Header End */}





        <div className="section section-padding">
          <div className="container">
            <div className="checkout-coupon">
              <p className="coupon-toggle">Have a coupon? <a href="#checkout-coupon-form" data-bs-toggle="collapse">Click here to enter your code</a></p>
              <div id="checkout-coupon-form" className="collapse">
                <div className="coupon-form">
                  <p>If you have a coupon code, please apply it below.</p>
                  <form action="#" className="learts-mb-n10">
                    <input className="learts-mb-10" type="text" placeholder="Coupon code" />
                    <button className="btn btn-dark btn-outline-hover-dark learts-mb-10">apply coupon</button>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="section-title2">
              <h2 className="title">Billing details</h2>
            </div>
            
            <form action="#" className="checkout-form learts-mb-50">
              <div className="row">
                <div className="col-md-6 col-12 learts-mb-20">
                  <label htmlFor="bdFirstName">First Name <abbr className="required">*</abbr></label>
                  <input type="text" id="bdFirstName" />
                </div>
                <div className="col-md-6 col-12 learts-mb-20">
                  <label htmlFor="bdLastName">Last Name <abbr className="required">*</abbr></label>
                  <input type="text" id="bdLastName" />
                </div>
                <div className="col-12 learts-mb-20">
                  <label htmlFor="bdCompanyName">Company name (optional)</label>
                  <input type="text" id="bdCompanyName" />
                </div>
                <div className="col-12 learts-mb-20">
                  <label htmlFor="bdCountry">Country <abbr className="required">*</abbr></label>
                  <select id="bdCountry" className="select2-basic">
                    <option value="">Select a country…</option>
                    {/* Country options remain the same */}
                  </select>
                </div>
                <div className="col-12 learts-mb-20">
                  <label htmlFor="bdAddress1">Street address <abbr className="required">*</abbr></label>
                  <input type="text" id="bdAddress1" placeholder="House number and street name" />
                </div>
                <div className="col-12 learts-mb-20">
                  <label htmlFor="bdAddress2" className="sr-only">Apartment, suite, unit etc. (optional)</label>
                  <input type="text" id="bdAddress2" placeholder="Apartment, suite, unit etc. (optional)" />
                </div>
                <div className="col-12 learts-mb-20">
                  <label htmlFor="bdTownOrCity">Town / City <abbr className="required">*</abbr></label>
                  <input type="text" id="bdTownOrCity" />
                </div>
                <div className="col-12 learts-mb-20">
                  <label htmlFor="bdDistrict">District <abbr className="required">*</abbr></label>
                  <input type="text" id="bdTownOrCity" />

                </div>
                <div className="col-12 learts-mb-20">
                  <label htmlFor="bdPostcode">Postcode / ZIP (optional)</label>
                  <input type="text" id="bdPostcode" />
                </div>
                <div className="col-md-6 col-12 learts-mb-20">
                  <label htmlFor="bdEmail">Email address <abbr className="required">*</abbr></label>
                  <input type="text" id="bdEmail" />
                </div>
                <div className="col-md-6 col-12 learts-mb-30">
                  <label htmlFor="bdPhone">Phone <abbr className="required">*</abbr></label>
                  <input type="text" id="bdPhone" />
                </div>
                <div className="col-12 learts-mb-40">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Create an account?</label>
                  </div>
                </div>
                <div className="col-12 learts-mb-20">
                  <label htmlFor="bdOrderNote">Order Notes (optional)</label>
                  <textarea id="bdOrderNote" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                </div>
              </div>
            </form>
            
            <div className="section-title2 text-center">
              <h2 className="title">Your order</h2>
            </div>
            
            <div className="row learts-mb-n30">
              <div className="col-lg-6 order-lg-2 learts-mb-30">
                <div className="order-review">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="name">Product</th>
                        <th className="total">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="name">Walnut Cutting Board&nbsp; <strong className="quantity">×&nbsp;1</strong></td>
                        <td className="total"><span>£100.00</span></td>
                      </tr>
                      <tr>
                        <td className="name">Pizza Plate Tray&nbsp; <strong className="quantity">×&nbsp;1</strong></td>
                        <td className="total"><span>£22.00</span></td>
                      </tr>
                      <tr>
                        <td className="name">Minimalist Ceramic Pot - Pearl river, Large&nbsp; <strong className="quantity">×&nbsp;1</strong></td>
                        <td className="total"><span>£120.00</span></td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="subtotal">
                        <th>Subtotal</th>
                        <td><span>£242.00</span></td>
                      </tr>
                      <tr className="total">
                        <th>Total</th>
                        <td><strong><span>£242.00</span></strong></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              
              <div className="col-lg-6 order-lg-1 learts-mb-30">
                <div className="order-payment">
                  <div className="payment-method">
                    <div className="accordion" id="paymentMethod">
                      <div className="card active">
                        <div className="card-header">
                          <button data-bs-toggle="collapse" data-bs-target="#checkPayments">Check payments</button>
                        </div>
                        <div id="checkPayments" className="collapse show" data-bs-parent="#paymentMethod">
                          <div className="card-body">
                            <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header">
                          <button data-bs-toggle="collapse" data-bs-target="#cashkPayments">Cash on delivery</button>
                        </div>
                        <div id="cashkPayments" className="collapse" data-bs-parent="#paymentMethod">
                          <div className="card-body">
                            <p>Pay with cash upon delivery.</p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header">
                          <button data-bs-toggle="collapse" data-bs-target="#payPalPayments">
                            PayPal <Image src="/images/others/pay-2.webp" alt="PayPal" width={50} height={20} />
                          </button>
                        </div>
                        <div id="payPalPayments" className="collapse" data-bs-parent="#paymentMethod">
                          <div className="card-body">
                            <p>Pay via PayPal; you can pay with your credit card if you don't have a PayPal account.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="payment-note">
                      Your personal data will be used to process your order, support your experience throughout this website, 
                      and for other purposes described in our privacy policy.
                    </p>
                    <button className="btn btn-dark btn-outline-hover-dark">place order</button>
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

export default CheckoutPage;