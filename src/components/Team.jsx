import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "react-bootstrap/Container";
import Slider from "react-slick";
import slide1 from "../assets/images/png/Collin.png";
import slide2 from "../assets/images/png/Pharaox.png";
import slide3 from "../assets/images/png/Zach.png";
import slide4 from "../assets/images/png/Arlen.png";

function Team() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centreMode: true,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="py_team">
        <h2 className="text-center ff_audiowide fs_xl fw-normal lh_normal text-black mb-5 pb-2">
          <span className="team_line position-relative ff-Audiowide">Team</span>
        </h2>
        <Container className="custom_container">
          <Slider {...settings}>
            <div className="px-2 outline">
              <img src={slide1} alt="GirlWithBlackJacket" className="w-100" />
              <h4 className="ff-Montserrat fs-md4 fw-semibold lh_normal text-black mt-3 mb-1">
                Collin
              </h4>
              <p className="ff-Montserrat fs-sm6 fw-normal lh_150 text-black mb-3">
                Founder
              </p>
            </div>
            <div className="px-2 outline">
              <img src={slide2} alt="GirlWithBlackJacket" className="w-100" />
              <h4 className="ff-Montserrat fs-md4 fw-semibold lh_normal text-black mt-3 mb-1">
                Pharaox
              </h4>
              <p className="ff-Montserrat fs-sm6 fw-normal lh_150 text-black mb-3">
                Founder
              </p>
            </div>
            <div className="px-2 outline">
              <img src={slide3} alt="GirlWithBlackJacket" className="w-100" />
              <h4 className="ff-Montserrat fs-md4 fw-semibold lh_normal text-black mt-3 mb-1">
                Zach
              </h4>
              <p className="ff-Montserrat fs-sm6 fw-normal lh_150 text-black mb-3">
                CM
              </p>
            </div>
            <div className="px-2 outline">
              <img src={slide4} alt="GirlWithBlackJacket" className="w-100" />
              <h4 className="ff-Montserrat fs-md4 fw-semibold lh_normal text-black mt-3 mb-1">
                Arlen
              </h4>
              <p className="ff-Montserrat fs-sm6 fw-normal lh_150 text-black mb-3">
                CM
              </p>
            </div>
          </Slider>
        </Container>
      </div>
    </div>
  );
}

export default Team;
