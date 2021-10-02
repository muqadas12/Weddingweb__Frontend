/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { Card, DatePicker, Form, Select, Button, Row, Col } from 'antd';
import photographyimg from '../../Assets/images/photo.jpg';
import { fetchPhoto } from '../../ReduxApi/PhotographerBooking/PhotoBooking.action';
import { fetchAllDealers } from '../../ReduxApi/ViewDealerServices/viewDealers/Dealer.action';
import './Bookingphotography.scss';

const { Option } = Select;
function photobooking({ userData, fetchAllDealers, dealer, price }) {
  const history = useHistory();
  const { search } = useLocation();
  const name = new URLSearchParams(search).get('name');
  console.log(name);

  const dispatch = useDispatch();
  const [] = useState({
    functionDate: '',
    functionType: '',
    photographyType: '',
    serviceName: '',
    email: '',
    price,
  });
  function addCarRental(payload) {
    dispatch(fetchPhoto(payload));
  }
  useEffect(() => {
    fetchAllDealers();
  }, []);
  function formSubmit(e) {
    const payload = {
      functionDate: e.functionDate,
      functionTime: e.functionTime,
      photographyType: e.photographyType,
      serviceName: dealer,
      serviceCategory: e.serviceCategory,
      price,

      email: localStorage.getItem('email'),
    };
    addCarRental(payload);
  }
  console.log(dealer, 'hi');
  console.log(price, 'pricee');

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
            <h1 className="booking-h1-main-heading">{dealer}</h1>

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
                <Select placeholder="select your photography type">
                  <Option value="Select Option">Select Option</Option>
                  <Option value="Artist Photography">Artist Photography</Option>
                  <Option value="Modern Photography">Modern Photography</Option>
                </Select>
              </Form.Item>
              <Button
                htmlType="submit"
                onClick={() => history.goBack()}
                className="book-now-button-food"
              >
                Book Now
              </Button>
              {userData.viewdealer}
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
const mapStateToProps = (state) => ({
  userData: state.viewdealers,
  dealer: state.viewphotographerServices.selectedDealer,
  price: state.viewphotographerServices.setSelectedPrice,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllDealers: () => dispatch(fetchAllDealers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(photobooking);
