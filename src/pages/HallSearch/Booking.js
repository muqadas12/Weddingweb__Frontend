import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Card, DatePicker, Form, Input, Select, Button } from 'antd';
import { fetchbookingHallServices } from '../../ReduxApi/bookHall/BookHall.action';
import { fetchAllDealers } from '../../ReduxApi/ViewDealerServices/viewDealers/Dealer.action';
import bookingHall from '../../Assets/images/hallBook.jpg';
import './Booking.scss';

const { Option } = Select;

function Booking({ fetchAllDealers, dealer, price, email }) {
  const dispatch = useDispatch();
  const [] = useState({
    functionDate: '',
    functionTime: '',
    functionType: '',
    numOfPeople: '',
    serviceName: '',
    price: '',
    email: '',
    dealerEmail: '',
  });
  useEffect(() => {
    fetchAllDealers();
  }, []);
  const bookHall = (payload) => {
    dispatch(fetchbookingHallServices(payload));
  };
  function formSubmit(e) {
    const payload = {
      functionDate: e.functionDate,
      functionTime: e.functionTime,
      functionType: e.functionType,
      numOfPeople: e.numOfPeople,
      serviceName: dealer,
      dealerEmail: email,
      price,

      email: localStorage.getItem('email'),
    };
    bookHall(payload);
  }

  return (
    <div>
      <img src={bookingHall} alt="bookingHall" />
      <Card className="card-booking-booking-hall">
        <h1 className="h1-booking">{dealer}</h1>
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
const mapStateToProps = (state) => ({
  userData: state.viewdealers,
  dealer: state.searchHallreducer.selectedDealer,
  price: state.searchHallreducer.setSelectedPrice,
  email: state.searchHallreducer.setSelectedEmail,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllDealers: () => dispatch(fetchAllDealers()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Booking);
