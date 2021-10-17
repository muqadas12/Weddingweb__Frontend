import React, { useState, useEffect } from 'react';
import { Card, DatePicker, Form, Input, Select, Button, Row, Col } from 'antd';
import { useDispatch, connect } from 'react-redux';
import './Bookfood.scss';
import { useHistory } from 'react-router-dom';
import { fetchFoodServices } from '../../ReduxApi/bookFood/BookCatering.action';
import { fetchAllDealers } from '../../ReduxApi/ViewDealerServices/viewDealers/Dealer.action';
import cateringBooking from '../../Assets/images/cateringBooking.png';

const { Option } = Select;

function Bookfood({ fetchAllDealers, email, dealer, price }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [] = useState({
    functionDate: '',
    functionTime: '',
    functionType: '',
    numOfPeople: '',
    serviceName: '',
    dealerEmail: '',
    email: '',
    foodType: '',
    price: '',
  });
  useEffect(() => {
    fetchAllDealers();
  }, []);
  function bookcateringFood(payload) {
    dispatch(fetchFoodServices(payload));
  }
  function formSubmit(e) {
    const payload = {
      functionDate: e.functionDate,
      functionTime: e.functionTime,
      functionType: e.functionType,
      numOfPeople: e.numOfPeople,
      serviceName: dealer,
      dealerEmail: email,
      foodType: e.foodType,
      price,
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
            <h1 className="h1-food-booking">{dealer}</h1>
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
                name="foodType"
                label="food type"
                className="date-picker-booking-car"
                style={{ marginLeft: '20px', width: '620px' }}
                rules={[
                  {
                    required: true,
                    message: 'Please select your menu!',
                  },
                ]}
              >
                <Select>
                  <Option value="Menu1">ChickenPulao </Option>
                  <Option value="sweets">Sweets</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="numOfPeople"
                label="No of people"
                style={{
                  fontFamily: 'cursive',
                  width: '800px',
                  marginLeft: '16px',
                }}
              >
                <Input style={{ marginTop: '-20px', width: '540px' }} />
              </Form.Item>
              <Button
                htmlType="submit"
                onClick={() => history.goBack()}
                className="book-now-button-food"
              >
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
  email: state.viewCateringService.selectedEmail,
  dealer: state.viewCarRentalServices.selectedDealer,
  price: state.viewCarRentalServices.setSelectedPrice,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllDealers: () => dispatch(fetchAllDealers()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Bookfood);
