import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, DatePicker, Form, Input, Select, Button, Row, Col } from 'antd';
import photographyimg from '../../Assets/images/photo.jpg';
import { fetchPhoto } from '../../ReduxApi/PhotographerBooking/PhotoBooking.action';
import './Bookingphotography.scss';

const { Option } = Select;
function Carbooking() {
  const dispatch = useDispatch();
  const [] = useState({
    functionDate: '',
    functionType: '',
    photographyType: '',
  });
  function addCarRental(payload) {
    dispatch(fetchPhoto(payload));
  }
  function formSubmit(e) {
    const payload = {
      functionDate: e.functionDate,
      functionTime: e.functionTime,
      photographyType: e.photographyType,
    };
    addCarRental(payload);
  }

  return (
    <div>
      <Row>
        <img
          className="photography-main-image-booking"
          src={photographyimg}
          alt="phot"
        />
      </Row>
      <br />
      <Row>
        <Col xs={{ span: 12, offset: 8 }} lg={{ span: 9, offset: 7 }}>
          <Card className="card-photography">
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
                name="photographyType"
                label="Photography"
                className="date-picker-booking-car"
                style={{ marginLeft: '-2px' }}
                rules={[
                  {
                    required: true,
                    message: 'Please select Function Time!',
                  },
                ]}
              >
                <Select placeholder="select your Function Time">
                  <Option value="Select Option">Select Option</Option>
                  <Option value="Artist Photography">Artist Photography</Option>
                  <Option value="Modern Photography">Modern Photography</Option>
                </Select>
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
