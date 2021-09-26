import React, { useState } from 'react';
import { Card, DatePicker, Form, Input, Select, Button, Row, Col } from 'antd';
import { useDispatch } from 'react-redux';
import './Bookfood.scss';
import { fetchFoodServices } from '../../ReduxApi/bookFood/BookCatering.action';
import cateringBooking from '../../Assets/images/cateringBooking.png';

const { Option } = Select;

function Bookfood() {
  const dispatch = useDispatch();
  const [] = useState({
    functionDate: '',
    functionTime: '',
    functionType: '',
    numOfPeople: '',
    foodType: '',
    email: '',
  });
  function bookcateringFood(payload) {
    dispatch(fetchFoodServices(payload));
  }
  function formSubmit(e) {
    const payload = {
      functionDate: e.functionDate,
      functionTime: e.functionTime,
      functionType: e.functionType,
      numOfPeople: e.numOfPeople,
      foodType: e.foodType,
      email: localStorage.getItem('email'),
    };
    bookcateringFood(payload);
  }
  return (
    <div>
      <img
        className="book-catering-image"
        src={cateringBooking}
        alt="cateringbooking"
      />
      <Row>
        <Col xs={{ span: 15, offset: 8 }} lg={{ span: 9, offset: 8 }}>
          <Card className="card-booking-food-catering">
            <h1 className="h1-food-booking">Book Your Food here!</h1>
            <Form onFinish={(e) => formSubmit(e)}>
              <Form.Item
                className="date-picker-booking-food"
                label="Function date"
                name="functionDate"
              >
                <DatePicker className="ant-input" />
              </Form.Item>
              <Form.Item
                label="Function Time"
                name="functionTime"
                className="date-picker-booking-food"
                rules={[
                  {
                    message: 'Please select Function Time!',
                  },
                ]}
              >
                <Select
                  placeholder="select your Function Time"
                  style={{ marginLeft: '2px' }}
                >
                  <Option value="lunch">Lunch</Option>
                  <Option value="dinner">Dinner</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Function Type"
                name="functionType"
                style={{ fontFamily: 'cursive' }}
                rules={[
                  {
                    required: true,
                    message: 'Please select Function Type!',
                  },
                ]}
              >
                <Select placeholder="select your Function Type">
                  <Option value="engagment">Engagment</Option>
                  <Option value="nikah">Nikah</Option>
                  <Option value="mehndi">Mehndi</Option>
                  <Option value="barat">Barat</Option>
                  <Option value="walima">Walima</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Food Type"
                name="foodType"
                style={{ fontFamily: 'cursive' }}
                rules={[
                  {
                    required: true,
                    message: 'Please select Food Type!',
                  },
                ]}
              >
                <Select
                  placeholder="select your Food Type"
                  className="foodtype-booking-catering"
                  style={{ width: '400px' }}
                >
                  <Option value="chicken">Chicken</Option>
                  <Option value="sweets">Sweets</Option>
                  <Option value="drinks">Drinks</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="numOfPeople"
                label="No of people"
                style={{
                  fontFamily: 'cursive',
                  width: '500px',
                  marginLeft: '16px',
                }}
              >
                <Input style={{ marginTop: '-20px' }} />
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

export default Bookfood;
