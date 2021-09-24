import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, DatePicker, Form, Input, Select, Button, Row, Col } from 'antd';
import carBooking from '../../Assets/images/carBooking.jpg';
import { fetchbookCar } from '../../ReduxApi/carBooking/CarBooking.action';
import './Carbooking.scss';

const { Option } = Select;
function Carbooking() {
  const dispatch = useDispatch();
  const [] = useState({
    functionDate: '',
    functionType: '',
    numOfPeople: '',
  });
  function addCarRental(payload) {
    dispatch(fetchbookCar(payload));
  }
  function formSubmit(e) {
    const payload = {
      functionDate: e.functionDate,
      functionTime: e.functionTime,
      numOfPeople: e.numOfPeople,
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
                label="No. of peoples"
                name="numOfPeople"
                className="date-picker-booking-car"
              >
                <Input style={{ marginTop: '-15px' }} />
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

export default Carbooking;
