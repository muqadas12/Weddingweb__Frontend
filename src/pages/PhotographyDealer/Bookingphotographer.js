import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Card, DatePicker, Form, Select, Button, Row, Col } from 'antd';
import photographyimg from '../../Assets/images/photo.jpg';
import { fetchPhoto } from '../../ReduxApi/PhotographerBooking/PhotoBooking.action';
import { fetchAllDealers } from '../../ReduxApi/ViewDealerServices/viewDealers/Dealer.action';

import './Bookingphotography.scss';

const { Option } = Select;
function Carbooking({ userData, fetchAllDealers, dealer }) {
  const dispatch = useDispatch();
  const [] = useState({
    functionDate: '',
    functionType: '',
    photographyType: '',
    serviceName: '',
    serviceCategory: '',
    email: '',
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
      serviceName: e.serviceName,
      serviceCategory: e.serviceCategory,

      email: localStorage.getItem('email'),
    };
    addCarRental(payload);
  }
  // console.log(dealer);

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
            <h1 className="booking-h1-main-heading">
              Book Your Photographer {dealer?.serviceName}
            </h1>

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
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllDealers: () => dispatch(fetchAllDealers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Carbooking);
