/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Col, Row } from 'antd';
import { NavLink } from 'react-router-dom';
import useHover from './Hooks/useHover';
import photographer from '../Assets/images/photography.jpg';
import car from '../Assets/images/car.png';
import saloon from '../Assets/images/saloon.jpg';
import food from '../Assets/images/fod.jpg';
import halll from '../Assets/images/hall.jpg';
import './cards.scss';

function cards(props) {
  const { hovering, onMouseOver, onMouseLeave } = useHover();
  const cardinfo = [
    { title: 'Photographer', img: photographer, linkto: '/photography' },
    { title: 'Car Rental', img: car, linkto: '/car-rental-services' },
    { title: 'Saloon', img: saloon, linkto: '/saloon-services' },
    { title: 'Wedding Hall', img: halll, linkto: '/hall-search' },
    { title: 'Catering', img: food, linkto: '/cateringservices' },
  ];
  const renderdCard = (card, index) => (
    <Card
      key="index"
      className="card-title"
      title={card.title}
      bordered={false}
    >
      <NavLink to={card.linkto}>
        <img
          className="cards-img-photo"
          src={card.img}
          alt="photographer"
          onMouseLeave={onMouseLeave}
          onMouseOver={onMouseOver}
        />
      </NavLink>
    </Card>
  );
  return (
    <div className="trying">
      {React.useMemo(() => cardinfo.map(renderdCard), [cardinfo])}
    </div>
  );
}

export default cards;
