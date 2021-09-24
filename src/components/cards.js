import React from "react";
import { Card, Col, Row } from "antd";
import photographer from "../Assets/images/photography.jpg";
import car from "../Assets/images/car.png";
import saloon from "../Assets/images/saloon.jpg";
import food from "../Assets/images/fod.jpg";
import halll from "../Assets/images/hall.jpg";
import "./cards.scss";
import { NavLink } from "react-router-dom";

function cards() {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card className="card-title" title="Photographer" bordered={false}>
            <NavLink to="/photography">
              <img
                className="cards-img-photo"
                src={photographer}
                alt="photographer"
              />
            </NavLink>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="card-title" title="Car Rental" bordered={false}>
            <NavLink to="/car-rental-services">
              <img className="cards-img-car" src={car} alt="car" />
            </NavLink>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="card-title" title="Saloon" bordered={false}>
            <NavLink to="/saloon-services">
              <img className="cards-img-saloon" src={saloon} alt="saloon" />
            </NavLink>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col style={{ marginLeft: "200px" }} span={8}>
          <Card
            className="card-title-hall"
            title="Wedding Hall"
            bordered={false}
          >
            <NavLink to="/hall-search">
              <img className="cards-img-hall" src={halll} alt="saloon" />
            </NavLink>
          </Card>
        </Col>
        <Col>
          <Card className="card-title-food" title="Catering" bordered={false}>
            <NavLink to="/cateringservices">
              <img className="cards-img-food" src={food} alt="food" />
            </NavLink>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default cards;
