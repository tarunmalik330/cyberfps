import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutImg from "../assets/images/png/AboutImg.png";

export const AboutUs = () => {
  return (
    <div>
      <div className="cyber_bg_img py_cyber">
        <Container className="custom_container">
          <Row className="align-items-center justify-content-center">
            <Col lg={6} className="col-sm-12 col-11">
              <h2 className="ff-Audiowide text-black fw-normal fs-lg4 position-relative">
                What is <span className="text_sky">CyberFPS</span>
              </h2>
              <div className="blue_line pt-3 pb-3"></div>
              <p className="ff-Montserrat fw-normal fs-sm6 text_grey mw_562 pb-3">
                CyberFPS is centered around 5v5 Search & Destroy style combat
                with P2E mechanics featuring the $AMMO Token and deep
                integrations within the CryptoStraps ecosystem.
              </p>
              <p className="ff-Montserrat fw-normal fs-sm6 text_grey mw_562">
                CyberFPS pits 2 teams of 5 players against each other with the
                objective being to attack or defend depending on which side you
                start on. This "Search & Destroy" style combat has been
                implemented in many popular FPS titles and is a high-skill cap
                game mode.
              </p>
            </Col>
            <Col lg={6} className="col-sm-12 col-11 pt-3 pt-lg-0">
              <img src={AboutImg} alt="AboutImg" className="w-100 mw_528" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default AboutUs;
