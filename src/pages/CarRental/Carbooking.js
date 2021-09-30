import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Card, DatePicker, Form, Input, Select, Button, Row, Col } from 'antd';
import carBooking from '../../Assets/images/carBooking.jpg';
import { fetchbookCar } from '../../ReduxApi/carBooking/CarBooking.action';
import { fetchAllDealers } from '../../ReduxApi/ViewDealerServices/viewDealers/Dealer.action';

import './Carbooking.scss';

const { Option } = Select;
function Carbooking({ userData, fetchAllDealers }) {
  const dispatch = useDispatch();
  const [] = useState({
    functionDate: '',
    functionType: '',
    numOfPeople: '',
    serviceName: '',
    serviceCategory: '',
    email: '',
  });
  useEffect(() => {
    fetchAllDealers();
  }, []);
  function addCarRental(payload) {
    dispatch(fetchbookCar(payload));
  }
  function formSubmit(e) {
    const payload = {
      functionDate: e.functionDate,
      functionTime: e.functionTime,
      numOfPeople: e.numOfPeople,
      serviceName: e.serviceName,
      serviceCategory: e.serviceCategory,
      email: localStorage.getItem('email'),
    };
    addCarRental(payload);
  }

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
            <h1 className="booking-h1-main-heading">Book Your Car </h1>

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
                // className="function-time-car"

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
                name="serviceCategory"
                label="Select Service"
                className="date-picker-booking-car"
                style={{ marginLeft: '-10px' }}
                // className="function-time-car"

                rules={[
                  {
                    required: true,
                    message: 'Please select your service!',
                  },
                ]}
              >
                <Select placeholder="select your service">
                  <Option value="carRental">Car Rental</Option>
                  <Option value="photography">Photography</Option>
                  <Option value="hall">Hall Booking</Option>
                  <Option value="saloon">Saloon</Option>
                  <Option value="catering">Catering</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="No. of peoples"
                name="numOfPeople"
                className="date-picker-booking-car"
              >
                <Input style={{ marginTop: '-15px' }} />
              </Form.Item>
              {/* <Form.Item
                label="Service name"
                name="serviceName"
                className="date-picker-booking-car"
              >
                <select placeholder="select your service">
                  {userData.viewDealers.map((user) => (
                    <option key={user} name={user.serviceName}>
                      {user.serviceName}
                    </option>
                  ))}
                </select>
              </Form.Item> */}
              <Form.Item
                name="serviceName"
                label="Service Name"
                style={{
                  fontFamily: 'cursive',
                  width: '500px',
                  marginLeft: '16px',
                }}
              >
                {/* <Input style={{ marginTop: '-20px' }} /> */}
                <select
                  className="car-booking-services-name"
                  placeholder="select your service"
                >
                  {userData.viewDealers.map((user) => (
                    <option key={user} name={user.serviceName}>
                      {user.serviceName.toString()}
                    </option>
                  ))}
                </select>
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
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllDealers: () => dispatch(fetchAllDealers()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Carbooking);
