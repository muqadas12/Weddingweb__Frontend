import React from 'react';
import aboutUsImg from '../../Assets/images/about.png';
import './About.scss';

function About() {
  return (
    <div>
      <img className="about-us-img" src={aboutUsImg} alt="aboutus" />
      <p className="first-heading-about-us">Welcome to Wanclouds Weds</p>
      <p className="second-heading-about-us">
        We are glad and greatful that you are here
      </p>

      <p className="description-about-us">
        Wanclouds weds is platform that allow you to make your dreams true of a
        perfect wedding.
      </p>
      <p className="description-about-us">
        It help you providing the facility to book wedding hall,Car rental,
        Catering, Saloon and Photography.We deal with best dealers to provide
        you quality based services
      </p>
    </div>
  );
}

export default About;
