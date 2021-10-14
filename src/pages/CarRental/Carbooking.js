/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Card, DatePicker, Input, Form, Select, Button, Row, Col } from 'antd';
import carBooking from '../../Assets/images/carBooking.jpg';
import { fetchbookCar } from '../../ReduxApi/carBooking/CarBooking.action';

import { fetchAllDealers } from '../../ReduxApi/ViewDealerServices/viewDealers/Dealer.action';
// import useFields from '../../components/Hooks/useFields';

import './Carbooking.scss';

const { Option } = Select;
function Carbooking({ fetchAllDealers, dealer, price, email }) {
  const dispatch = useDispatch();
  const numOfPeople = useRef(null);

  const [] = useState({
    functionDate: '',
    functionType: '',
    numOfPeople: '',
    carType: '',
    serviceName: dealer,
    dealerEmail: '',
    orderStatus: 'Pending',

    email: '',
    price,
  });
  useEffect(() => {
    fetchAllDealers();
    numOfPeople.current.focus();
    // numOfPeople.current.value=""

    // numOfPeople.current.style.color = 'red';
  }, []);
  function addCarRental(payload) {
    dispatch(fetchbookCar(payload));
  }
  function formSubmit(e) {
    const payload = {
      functionDate: e.functionDate,
      functionTime: e.functionTime,

      numOfPeople: e.numOfPeople,
      carType: e.carType,
      serviceName: dealer,
      dealerEmail: email,
      price,
      orderStatus: 'Pending',

      email: localStorage.getItem('email'),
    };
    // numOfPeople.current.focus();
    // numOfPeople.current.style.color = 'red';
    addCarRental(payload);
  }

  // console.log(dealer, 'hi', price);
  return (
    <div>
      <Row>
        <Col xs={{ span: 17, offset: 4 }} lg={{ span: 2, offset: 8 }}>
          <img className="car-booking-main-image" src={carBooking} alt="car" />
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12, offset: 8 }} lg={{ span: 9, offset: 7 }}>
          <Card className="car-booking-card">
            <h1 className="booking-h1-main-heading">{dealer} </h1>

            <Form onFinish={(e) => formSubmit(e)}>
              <Form.Item
                className="date-picker-booking-car"
                label="Function Date"
                name="functionDate"
              >
                <DatePicker className="ant-input" />
              </Form.Item>
              <Form.Item
                name="functionTime"
                label="Function Time"
                className="date-picker-booking-car"
                style={{ marginLeft: '-10px' }}
                rules={[
                  {
                    required: true,
                    message: 'Please select Function Time!',
                  },
                ]}
              >
                <Select placeholder="select your Function Time">
                  <Option value="lunch">Lunch</Option>
                  <Option value="dinner">Dinner</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="carType"
                label="Car type"
                className="car-type"
                rules={[
                  {
                    required: true,
                    message: 'Please select Function Time!',
                  },
                ]}
              >
                <Select placeholder="select your car type">
                  <Option value="Select Option">Select Option</Option>
                  <Option value="Corolla">Corolla</Option>
                  <Option value="Bus">Bus</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="No. of peoples"
                name="numOfPeople"
                className="date-picker-booking-car"
              >
                <Input style={{ marginTop: '-15px' }} ref={numOfPeople} />
              </Form.Item>
              <Button htmlType="submit" className="book-now-button-food">
                Book Now
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
const mapStateToProps = (state) => ({
  userData: state.viewdealers,
  dealer: state.viewCarRentalServices.selectedDealer,
  price: state.viewCarRentalServices.setSelectedPrice,
  email: state.viewCarRentalServices.selectedEmail,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllDealers: () => dispatch(fetchAllDealers()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Carbooking);
