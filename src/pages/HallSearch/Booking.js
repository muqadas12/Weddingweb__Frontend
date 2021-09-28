import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, DatePicker, Form, Input, Select, Button } from 'antd';
import { fetchbookingHallServices } from '../../ReduxApi/bookHall/BookHall.action';
import bookingHall from '../../Assets/images/hallBook.jpg';
import './Booking.scss';

const { Option } = Select;

function Booking() {
  const dispatch = useDispatch();
  const [] = useState({
    functionDate: '',
    functionTime: '',
    functionType: '',
    numOfPeople: '',
    serviceName: '',
    serviceCategory: '',
    email: '',
  });
  const bookHall = (payload) => {
    dispatch(fetchbookingHallServices(payload));
  };
  function formSubmit(e) {
    const payload = {
      functionDate: e.functionDate,
      functionTime: e.functionTime,
      functionType: e.functionType,
      numOfPeople: e.numOfPeople,
      serviceName: e.serviceName,
      serviceCategory: e.serviceCategory,

      email: localStorage.getItem('email'),
    };
    bookHall(payload);
  }

  return (
    <div>
      <img src={bookingHall} alt="bookingHall" />
      <Card className="card-booking-booking-hall">
        <h1 className="h1-booking">Booking</h1>
        <Form onFinish={(e) => formSubmit(e)}>
          <Form.Item
            label="Function Date"
            name="functionDate"
            className="functinTime-booking-hall-labels"
          >
            <DatePicker className="date-picker-booking-hall" />
          </Form.Item>
          <Form.Item
            name="functionTime"
            label="Function Time"
            className="functinTime-booking-hall-labels"
            rules={[
              {
                required: true,
                message: 'Please select Function Time!',
              },
            ]}
          >
            <Select
              placeholder="select your Function Time"
              className="function-time-booking-hall"
            >
              <Option value="lunch">Lunch</Option>
              <Option value="dinner">Dinner</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="functionType"
            label="Function Type"
            className="functinTime-booking-hall-labels"
            rules={[
              {
                required: true,
                message: 'Please select Function Type!',
              },
            ]}
          >
            <Select
              placeholder="select your Function Type"
              className="function-type-booking-hall"
            >
              <Option value="engagment">Engagment</Option>
              <Option value="nikah">Nikah</Option>
              <Option value="mehndi">Mehndi</Option>
              <Option value="barat">Barat</Option>
              <Option value="walima">Walima</Option>
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
            name="serviceName"
            label="Service Name"
            style={{
              fontFamily: 'cursive',
              width: '500px',
              marginLeft: '16px',
            }}
          >
            <Input style={{ marginTop: '-20px' }} />
          </Form.Item>
          <Form.Item
            label="Num Of people"
            name="numOfPeople"
            className="functinTime-booking-hall-labels"
          >
            <Input className="num-people-booking-hall" />
          </Form.Item>
          <Button htmlType="submit" className="book-now-btton-bookinghall">
            Book Now
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default Booking;
