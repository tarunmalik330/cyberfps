import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CryptoImg from "../assets/images/png/CryptoStrap.png";

const CryptoStraps = () => {
  return (
    <div>
      <div className="bg-black py_cryptostrap">
        <Container className="custum_container">
          <Row className="align-items-center justify-content-center">
            <Col lg={6} className="col-sm-12 col-10" data-aos="zoom-in">
              <img src={CryptoImg} alt="CryptoImg" className="w-100 mw_432" />
            </Col>
            <Col lg={6} className="col-sm-12 col-11 pt-5 pt-lg-0">
              <h2
                className="ff-Audiowide fw-normal text-white fs-lg4 position-relative"
                data-aos="zoom-in-up"
              >
                CryptoStraps{" "}
              </h2>
              <div className="blue_line pb-1" data-aos="zoom-in-up"></div>
              <p
                className="ff-Montserrat fs-sm6 fw-normal text-white lh_150 mw_568 opacity-75 pt-2"
                data-aos="zoom-in-up"
              >
                CryptoStraps are firearms pushing the boundaries of 3D animated
                art. CyberFPS will be powered by CryptoStraps $AMMO and is
                directly integrated with the existing CryptoStraps NFTs. You
                will be able to use CryptoStraps NFTs in-game and the
                visuals/graphics of CyberFPS are designed by the CryptoStraps 3D
                Studio.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CryptoStraps;
