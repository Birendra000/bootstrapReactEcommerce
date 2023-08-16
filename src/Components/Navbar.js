import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cartStore = useSelector((store) => store.cartStore);
  const items_in_cart = cartStore.cart_items;
  const no_of_items = items_in_cart.length;

  const [search, setsearch] = useState("");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"/contact"}>
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/product"}>
                  Product
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type={search}
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setsearch(e.target.value)}
              />
              <button
                className="btn btn-outline-success text-danger"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>

          <div className="col-3 d-flex justify-content-evenly ">
            <Link to={"/register"}>
              <i className="bi bi-person-plus color text-light fw-bolder fs-5 "></i>
            </Link>

            <Link to={"/login"}>
              <i className="bi bi-box-arrow-left text-light fw-bolder fs-5"></i>
            </Link>

            <Link to={"/cart"}>
              <i className="bi bi-cart3 text-light fw-bolder fs-5"></i>
              <span>({no_of_items})</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
