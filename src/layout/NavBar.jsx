import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import navLogo from "../assets/navLogo.png";
import cartLogo from "../assets/cart.png";
import locationLogo from "../assets/Location.png";
import guestLogo from "../assets/contact.png";
import allProductLogo from "../assets/plate.png";
import AuthDropDown from "../Component/AuthDropDown";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import Bag from "../Component/Bag";

const NavBar = ({cartItem}) => {
  const [authShow, setAuthShow] = useState(false);
  const [bagShow, setBagShow] = useState(false);
  return (
    <>
      <main className="container posisition-relative">
        <nav className="container d-flex justify-content-between align-items-center">
          {/* Section 1 */}
          <section className="d-flex justify-content-between align-items-center gap-3">
            {/* Div 1 */}
            <div>
              <Link to="/">
                <img src={navLogo} alt="nav-logo" className="img-fluid p-3" />
              </Link>
            </div>
            {/* Div 2 */}
            <div>
              <img
                src={locationLogo}
                alt="location-logo"
                className="d-none d-lg-block"
              />
            </div>
            <h5 className="text-danger d-none d-lg-block"> Lagos, Nigeria</h5>
          </section>
          {/* Section 2 */}
          <section className="d-flex justify-content-between  align-items-center  gap-4">
            <img
              src={allProductLogo}
              alt="all-product-logo"
              className="img-fluid"
            />
            <h5 className="d-none d-lg-block text-danger mt-3">
              {" "}
              All Products
            </h5>
            {/* div 1 */}
            <div
              className="d-flex gap-3 position-relative"
              role="button"
              onClick={() =>
                !authShow ? setAuthShow(true) : setAuthShow(false)
              }
            >
              <img src={guestLogo} alt="guest-logo" />
              <h5 className="d-none d-lg-block mt-3 text-info"> Hi, Guest </h5>
              {!authShow ? (
                <div className="d-none d-lg-block mt-3 text-secondary">
                  <GoChevronDown />
                </div>
              ) : (
                <div className="d-none d-lg-block mt-3 text-secondary">
                  <GoChevronUp />
                </div>
              )}
              <div className="position-absolute top-100 end-0 mt-3">
                {authShow && <AuthDropDown />}
              </div>
            </div>

            {/* div 2 */}

            <div
              onClick={() => (!bagShow ? setBagShow(true) : setBagShow(false))}
            >
              <div className="position-relative">
                <div
                  className="position-absolute top-0 start-100 translate-middle bg-danger text-light
     rounded-circle w-75 text-center h-75 fw-bold"
                >
                  <p> {cartItem.length} </p>
                </div>
                  <img role="button" src={cartLogo} alt="cart-logo" />
              </div>
            </div>
          </section>
        </nav>
        <div className="postion-absolute end-0"> {bagShow && <Bag />}</div>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
