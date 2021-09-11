import React from 'react'
import { Carousel } from 'antd';
import c1 from "../Assets/images/c1.jpg"
import c2 from "../Assets/images/c22.jpg"
import c3 from "../Assets/images/c3.jpg"

function Carouselcomp() {
    return (
        <div>
            <Carousel autoplay>
    <div>
      <h3 ><img src={c1} alt="crousel-one-img"/></h3>
    </div>
    <div>
      <h3><img src={c2} alt="crousel-two-img"/></h3>
    </div>
    <div>
      <h3><img src={c3} alt="crousel-three-img"/></h3>
    </div>
   
  </Carousel>
        </div>
    )
}

export default Carouselcomp;
