import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function register() {
  return (
    <>
      <div className="section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="user-login-register bg-light p-5">
                
                {/* Centered image */}
                <div className="text-center mb-3">
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

                <div className="login-register-title text-center">
                  <h2 className="title">Sign Up</h2>
                  <p className="desc">Great to have you back!</p>
                </div>

                <div className="login-register-form">
                  <form action="#">
                    <div className="row learts-mb-n50">
                      <div className="col-12 learts-mb-50">
                        <input type="email" placeholder="Username or email address" />
                      </div>
                      <div className="col-12 learts-mb-50">
                        <input type="password" placeholder="Password" />
                      </div>
                      <div className="col-12 learts-mb-50">
                        <input type="password" placeholder="R-enter Password" />
                      </div>
                      <div className="col-12 text-center learts-mb-50">
                        <button className="btn btn-dark btn-outline-hover-dark">Sign Up</button>
                      </div>
                      <div className="col-12 learts-mb-50">
                        <div className="row learts-mb-n20">
                          <div className="col-12 learts-mb-20">
                            <div className="form-check">
                              <input type="checkbox" className="form-check-input" id="rememberMe" />
                              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                            </div>
                          </div>
                          <div className="col-12 learts-mb-20">
                            <a href="lost-password.html" className="fw-400">Lost your password?</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default register
