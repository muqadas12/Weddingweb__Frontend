/* eslint-disable no-unused-vars */
import React from 'react';
import useRandomColor from '../../components/Hooks/useRandomColor';

import aboutUsImg from '../../Assets/images/about.png';
import './About.scss';

function About() {
  const { color, chnageColor } = useRandomColor();

  return (
    <div
      className="bgg"
      style={{ width: '205vh', height: '100vh', backgroundColor: `#${color}` }}
    >
      <img className="about-us-img" src={aboutUsImg} alt="aboutus" />
      <button
        className="btn-color-change-custom-hook"
        type="button"
        onClick={chnageColor}
      >
        Change Bg Color
      </button>
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
