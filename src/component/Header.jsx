import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ cartAllProduct }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 bg-secondary d-flex justify-content-between px-5">
          <ul className="d-flex gap-5 align-items-center m-0 p-0 py-3">
            <NavLink
              to="/"
              className="list-unstyled text-light p-0 pointer text-decoration-none"
            >
              Kart Karo
            </NavLink>
            <li className="list-unstyled text-light p-0 pointer">ABOUT</li>
            <li className="list-unstyled text-light p-0 pointer">CONTACT</li>
          </ul>

          <ul className="m-0 p-0 py-3 position-relative d-flex gap-4">
            {/* Login Button */}
            <NavLink to="/login" className="list-unstyled text-light p-0 pointer">
              <i className="fa-solid fa-user fs-3"></i>
            </NavLink>

            {/* Cart Button */}
            <NavLink to="/cart" className="list-unstyled text-light p-0 pointer">
              <i className="fa-solid fa-cart-shopping fs-3"></i>
            </NavLink>
            <span
              className="text-decoration-none count rounded-pill text-dark position-absolute top-0"
              style={{ backgroundColor: "orange", right: "-45%" }}
            >
              {cartAllProduct?.length}
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
