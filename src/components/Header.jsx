import React from "react";
import { Link } from "react-router-dom";
import NavLogo from "../assets/images/png/NavLogo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Twitter } from "./IconImage";
import { Instagram } from "./IconImage";
import { Discoard } from "./IconImage";
import Gunman from "../assets/images/png/GunMan.png";
import HeaderLogo from "../assets/images/png/HeaderLogo.png";

const Header = () => {
  function opennav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hiddden");
    document.getElementById("menubtn-icon").classList.toggle("cross");
  }
  return (
    <div className="Bg_black">
      <div>
        <Container className="custum_container">
          <div className="d-flex align-items-center justify-content-between py-2">
            <img
              src={NavLogo}
              alt="NavLogo"
              className="w-100 mw_128 h-100 curser_pointer"
            />
            <ul
              id="navbar"
              className="d-flex gap-4 mb-0 flex-column list-unstyled flex-lg-row justify-content-center align-items-center mobile_view z_index_3"
            >
              <li className="link hover_border position-relative">
                <Link
                  onClick={opennav}
                  className="nav-link text-white fs-sm6 fw-normal ff-Audiowide"
                  to="/About"
                >
                  About
                </Link>
              </li>
              <li className="link hover_border position-relative">
                <Link
                  onClick={opennav}
                  to="/CryptoStraps"
                  className="text-white fs-sm6 fw-normal ff-Audiowide"
                >
                  CryptoStraps
                </Link>
              </li>
              <li className="link hover_border position-relative">
                <Link
                  onClick={opennav}
                  to="/Team"
                  className="text-white fs-sm6 fw-normal ff-Audiowide"
                >
                  Team
                </Link>
              </li>
              <li className="link hover_border position-relative">
                <Link
                  onClick={opennav}
                  to="Faq"
                  className="text-white fs-sm6 fw-normal ff-Audiowide"
                >
                  Faq
                </Link>
              </li>
              <li className="link hover_border position-relative">
                <Link
                  onClick={opennav}
                  to="Footer"
                  className="text-white fs-sm6 fw-normal ff-Audiowide"
                >
                  Light Paper
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-baseline nav_button gap-2 position-relative z-1">
              <Twitter />
              <Instagram />
              <Discoard />
            </div>
            <div
              id="menubtn-icon"
              onClick={opennav}
              className="d-lg-none d-block z_index_3 pe-2 pt-2"
            >
              <div className="line"></div>
              <div className="line1 my-2"></div>
              <div className="line2"></div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container className="custum_container pt-3 pt-lg-0">
          <Row className="justify-content-lg-between justify-content-center align-items-center">
            <Col
              xs={11}
              sm={12}
              lg={6}
              xl={5}
              className="d-flex flex-column justify-content-center align-items-lg-start align-items-center"
            >
              <img
                src={HeaderLogo}
                alt="HeaderLogo"
                className="w-100 max_w_344 max_h_239"
                data-aos="fade-right"
                data-aos-duration="400"
              />
              <h1
                className="ff-Audiowide fs-md8 fw-normal lh_normal text-white text-center mb-lg-5"
                data-aos="fade-right"
                data-aos-duration="400"
              >
                Web3 Gaming Reimagined
              </h1>
              <div className="text-center">
                <button
                  href="#"
                  className="ff-Audiowide fs-sm6 fw-normal text-black get_btn d-inline-block me-3 mt-3"
                  data-aos="fade-right"
                  data-aos-duration="400"
                >
                  Get Started
                </button>
                <button
                  href="#"
                  className="ff-Audiowide fs-sm6 fw-normal text-white learn_btn d-inline-block ms-sm-1 ms-0 mt-3"
                  data-aos="fade-right"
                  data-aos-duration="400"
                >
                  Learn More
                </button>
              </div>
            </Col>
            <Col
              xs={11}
              sm={10}
              lg={5}
              xl={6}
              className="d-flex flex-column justify-content-lg-start justify-content-center align-items-center"
            >
              <img
                src={Gunman}
                alt="Gunman"
                className="w-100 mt-lg-0 mt-5"
                data-aos="fade-up"
                data-aos-duration="2000"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Header;
