import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
          <div className="col-md-4 d-flex align-items-center">
            <Link
              to={"/bot"}
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <i class="bi bi-puzzle"></i>
            </Link>
            <span className="mb-3 mb-md-0 text-muted">
              &copy; 2022 Company, Inc
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex text-light fw-bolder fs-5">
            <li className="ms-3">
              <Link className="text-muted" to={"https://www.instagram.com/"}>
                <i class="bi bi-instagram"></i>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="text-muted" to={"https://www.facebook.com/"}>
                <i class="bi bi-facebook"></i>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="text-muted" to={"https://www.spotify.com/"}>
                <i class="bi bi-spotify"></i>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
