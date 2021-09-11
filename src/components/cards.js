import React from 'react'
import { Card, Col, Row } from 'antd';
import photographer from "../Assets/images/photography.jpg"
import car from "../Assets/images/car.png"
import saloon from "../Assets/images/saloon.jpg"
import food from "../Assets/images/fod.jpg"
import halll from "../Assets/images/hall.jpg"
import "./cards.scss";
import { NavLink } from 'react-router-dom';

function cards(props) {
 


    return (
      <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card  className="card-title"  title="Photographer" bordered={false}>
         <img  className="cards-img" src={photographer} alt="photographer"/>
        </Card>
      </Col>
      <Col span={8}>
        <Card className="card-title" title="Car Rental" bordered={false}>
          <img className="cards-img"  src={car} alt="saloon"/>
        </Card>
      </Col>
      <Col span={8}>
        <Card className="card-title" title="Saloon" bordered={false}>
        <img className="cards-img"  src={saloon} alt="saloon"/>

        </Card>
      </Col>
    </Row>
    <br/>
    <Row>
      <Col style={{marginLeft:'200px'}} span={8}>
      <Card className="card-title" title="Wedding Hall" bordered={false}>
        <NavLink to="/hall-search">
        <img className="cards-img"  src={halll} alt="saloon"/>
        </NavLink>
        </Card>
      </Col>
      <Col style={{marginLeft:'50px'}} span={8}>
      <Card className="card-title" title="Catering" bordered={false}>
        <img className="cards-img"  src={food} alt="saloon"/>
        </Card>
      </Col>
    </Row>
  </div>
    )
}

export default cards
