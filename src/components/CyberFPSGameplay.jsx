import React from "react";
import Container from "react-bootstrap/Container";
import Gameplay from "../assets/images/png/CyberGameplay.png";
import { Playbtn } from "./IconImage";

function CyberFPSGameplay() {
  return (
    <div>
      <Container className="custum_container pt_gameplay">
        <h2 className="fs-lg4 ff-Audiowide fw-normal text-center Cyberfps position-relative gameplay">
          CyberFPS <span className="text-teal">Gameplay</span>
        </h2>
        <div className="d-flex flex-column justify-content-center align-items-center position-relative pt-modal">
          <div
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="play_btn"
          >
            <Playbtn />
          </div>
          <img src={Gameplay} alt="Gameplay" className="w-100" />
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="btn-cross d-flex justify-content-center align-items-center position-absolute right-1 top-3">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="d-flex align-items-center justify-content-center h-500">
                <iframe
                  max-width="1160"
                  height="100%"
                  width="100%"
                  src="https://www.youtube.com/embed/ZlenY4qaORo?si=OEaKuqwwcLJOwHc-"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CyberFPSGameplay;
