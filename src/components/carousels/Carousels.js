import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import "./carousels.css"

function Carousels() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img src={img1} alt="First Slide" className="w-100" />
          <Carousel.Caption className="d-flex justify-content-center align-items-center">
            <div className="caption-box">
              <h3>Jorge Luis Borges </h3>
              <p>
                "I have always imagined that Paradise will be a kind of a
                Library."
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} alt="Second Slide" className="w-100" />
          <Carousel.Caption className="d-flex justify-content-center align-items-center">
            <div className="caption-box">
              <h3>Walter Savage Landor </h3>
              <p>"Nothing is pleasanter than exploring a library."</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img3} alt="Third Slide" className="w-100" />
          <Carousel.Caption className="d-flex justify-content-center align-items-center">
            <div className="caption-box">
              <h3>Albert Einstein </h3>
              <p>
                "The only thing that you absolutely have to know, is the
                location of the library."
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels
