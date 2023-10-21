import React from "react";
import cyberlogo from "../assets/images/png/CyberLogo.png";
import Container from "react-bootstrap/Container";
import { Twitter } from "./IconImage";
import { Instagram } from "./IconImage";
import { Discoard } from "./IconImage";
import Salona from "../assets/images/png/Solana.png";
import Engine from "../assets/images/png/UnrealEngine.png";

const Footer = () => {
  return (
    <>
      <div className="bg_white py_solana">
        <Container>
          <div className="text-center d-md-flex flex-cloumn justify-content-center">
            <img
              src={Salona}
              alt="Salona"
              className="w-100 max_w_385 max_h_225 me-md-5 me-0"
            />
            <img
              src={Engine}
              alt="Engine"
              className="w-100 max_w_263 max_h_225 mt-md-0 mt-sm-5 mt-4"
            />
          </div>
        </Container>
      </div>
      <div className="Bg_footer py-4 mb-2">
        <div className="text-center">
          <img src={cyberlogo} alt="cyberlogo" className="" />
        </div>
        <div className="pt-3 pb-5 gap-3 d-flex justify-content-center">
          <Twitter />
          <Instagram />
          <Discoard />
        </div>
        <hr className="w-100 text-white mb-4"></hr>
        <p className="ff-Montserrat fs-sm6 text-white fw-normal text-center mb-0">
          © Cyber FPS 2022
        </p>
      </div>
    </>
  );
};

export default Footer;
