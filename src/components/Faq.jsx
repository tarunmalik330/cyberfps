import React from "react";
import Container from "react-bootstrap/Container";
import { Accordion } from "react-bootstrap";
import { Accrdnradius } from "./IconImage";
import { Accrdnradius_bttm } from "./IconImage";
// import { AccordianBtn } from "./IconImage";

export const Faq = () => {
  return (
    <div>
      <div>
        <div className="bg-black pb-5 pt-4">
          <Container className="pb-lg-5 pt-xl-4 Container-custom ">
            <h3 className="fs-lg4 fw-normal ff-Audiowide text-white text-center pt-4  mt-2 position-relative ">
              Faq
            </h3>
            <div className="faq_line text-center d-none d-lg-block"></div>
            <Accordion className="mx-auto pb-xl-5 mt-lg-5 pt-lg-5 pt-4">
              <Accordion.Item
                eventKey="0"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <Accrdnradius_bttm />
                <Accordion.Header className="ff-Montserrat fw-semibold fs-md4 text-white Accordion_Header">
                  Dui lectus auctor fermentum potenti enim. ?
                </Accordion.Header>
                <Accrdnradius />
                <Accordion.Body>
                  Dui lectus auctor fermentum potenti enim. Quam donec mauris
                  phasellus at auctor. Risus maecenas commodo eget tellus nullam
                  magna adipiscing facilisis a, nulla.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="1"
                className="mt-4"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <Accrdnradius_bttm />
                <Accordion.Header>
                  Placerat eros faucibus aliquam nunc, mattis
                </Accordion.Header>
                <Accrdnradius />
                <Accordion.Body>
                  Dui lectus auctor fermentum potenti enim. Quam donec mauris
                  phasellus at auctor. Risus maecenas commodo eget tellus nullam
                  magna adipiscing facilisis a, nulla.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="2"
                className="mt-4"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <Accrdnradius_bttm />
                <Accordion.Header>
                  Lorem nunc nunc risus viverra a
                </Accordion.Header>
                <Accrdnradius />
                <Accordion.Body>
                  Dui lectus auctor fermentum potenti enim. Quam donec mauris
                  phasellus at auctor. Risus maecenas commodo eget tellus nullam
                  magna adipiscing facilisis a, nulla.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="3"
                className="mt-4"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <Accrdnradius_bttm />
                <Accordion.Header>
                  In aliquet fusce id dictumst id
                </Accordion.Header>
                <Accrdnradius />
                <Accordion.Body>
                  Dui lectus auctor fermentum potenti enim. Quam donec mauris
                  phasellus at auctor. Risus maecenas commodo eget tellus nullam
                  magna adipiscing facilisis a, nulla.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="4"
                className="mt-4"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <Accrdnradius_bttm />
                <Accordion.Header>
                  Elementum pellentesque nisi, sagittis,{" "}
                </Accordion.Header>
                <Accrdnradius />
                <Accordion.Body>
                  Dui lectus auctor fermentum potenti enim. Quam donec mauris
                  phasellus at auctor. Risus maecenas commodo eget tellus nullam
                  magna adipiscing facilisis a, nulla.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        </div>
      </div>
    </div>
  );
};
export default Faq;
