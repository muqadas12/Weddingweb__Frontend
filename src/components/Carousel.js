import React from "react";
import { Carousel } from "antd";
import c1 from "../Assets/images/c1.jpg";
import c2 from "../Assets/images/c22.jpg";
import c3 from "../Assets/images/c3.jpg";

import "./Carousel.scss";
function Carouselcomp() {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <h3>
            <img
              className="responsive-crousel"
              src={c1}
              alt="crousel-one-img"
            />
          </h3>
        </div>
        <div>
          <h3>
            <img
              className="responsive-crousel-img2"
              src={c2}
              alt="crousel-two-img"
            />
          </h3>
        </div>
        <div>
          <h3>
            <img
              className="responsive-crousel-img3"
              src={c3}
              alt="crousel-three-img"
            />
          </h3>
        </div>
      </Carousel>
    </div>
  );
}

export default Carouselcomp;
