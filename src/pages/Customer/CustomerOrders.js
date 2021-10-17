/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Card, Spin, BackTop } from 'antd';
import { useHistory } from 'react-router-dom';
import { ToTopOutlined } from '@ant-design/icons';
import moment from 'moment';

import order from '../../Assets/images/order.PNG';
import { fetchViewCatering } from '../../ReduxApi/viewOrders/viewCatering/ViewCateringAction';
import { fetchViewSallonOrder } from '../../ReduxApi/viewOrders/viewSaloonBooking/Saloonbooking.actions';
import { fetchViewOrderStatus } from '../../ReduxApi/orderStatus/OrderStatus.action';
import { setSelectedEmail } from '../../ReduxApi/CarRental/CarActions';
import {
  fetchOrdersPhotography,
  setSelectedPrice,
  setSelectedDealer,
} from '../../ReduxApi/viewDealerOrders/viewPhotographyOrders/PhotographyOrder.action';
import { fetchOrdersHall } from '../../ReduxApi/viewDealerOrders/hallOrder/HallOrder.action';
import { fetchViewCarBooking } from '../../ReduxApi/viewOrders/viewCarRental/CarBookingorder.action';
import './CusOrder.scss';

function CustomerOrders({
  carData,
  userData,
  setSelectedEmail,
  fetchViewCatering,
  fetchViewCarBooking,
  fetchViewSallonOrder,
  fetchViewOrderStatus,
  fetchOrdersPhotography,
  fetchOrdersHall,
  setSelectedPrice,
  setSelectedDealer,
}) {
  const orders = useSelector((state) => state.viewStatusorder);
  // eslint-disable-next-line no-unused-vars
  const [show, setShow] = useState(false);

  const history = useHistory();

  useEffect(() => {
    fetchViewCatering();
    fetchViewCarBooking();
    fetchViewSallonOrder();
    fetchViewOrderStatus();
    fetchOrdersPhotography();
    fetchOrdersHall();
    setSelectedPrice();
    setSelectedEmail();
    setSelectedDealer();
  }, []);

  const bookHandler = (userData) => {
    setSelectedPrice(userData.price);
    setSelectedDealer(userData.photographyType);
    setSelectedEmail(userData.email);
    console.log(setSelectedEmail(userData.email));
    console.log(setSelectedDealer(userData.photographyType));
    console.log(setSelectedPrice(userData.price));

    history.push('/customer-payment');
  };
  console.log(carData);

  return userData.loading ? (
    <Spin size="large" />
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <img className="customer-view-order-img" src={order} alt="order" />

      <p className="customer-irder-view-heading">View Your order here!</p>

      <Card className="photography-order-customer-view">
        {orders &&
          orders.viewOrderStatus &&
          orders.viewOrderStatus.map((user) => (
            <p>
              <p className="booked-heading-customer-order">You have booked</p>
              <p className="service-name-cus">{user.serviceName}</p>
              <p className="order-heading-customer-order">Your order is </p>
              <p className="acc-service-name-cus">{user.orderStatus}</p>
              <p className="order-date-cu-order">Your order date is</p>
              <p className="function-date-cus-order">
                {' '}
                {moment(user.functionDate).format('MMMM Do YYYY')}
              </p>

              <p className="bill-is">Bill is</p>
              <p className="cus-price"> {user.price}</p>

              <button
                className="pay-btn-customer"
                type="button"
                onClick={() => bookHandler(user)}
              >
                pay
              </button>
            </p>
          ))}
      </Card>

      <BackTop>
        <div>
          <ToTopOutlined className="icons" />
        </div>
      </BackTop>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.servicescatering,
  photographyData: state.viewPhotographyOrders,
  hallOrderData: state.viewHallDealerOrder,
  carData: state.viewCarRentalOrders,
});

const mapDispatchToProps = (dispatch) => ({
  fetchViewCatering: () => dispatch(fetchViewCatering()),
  fetchViewCarBooking: () => dispatch(fetchViewCarBooking()),
  fetchViewSallonOrder: () => dispatch(fetchViewSallonOrder()),
  fetchViewOrderStatus: () => dispatch(fetchViewOrderStatus()),
  fetchOrdersPhotography: () => dispatch(fetchOrdersPhotography()),
  setSelectedPrice: (price) => dispatch(setSelectedPrice(price)),
  setSelectedDealer: (dealer) => dispatch(setSelectedDealer(dealer)),
  setSelectedEmail: (email) => dispatch(setSelectedEmail(email)),
  fetchOrdersHall: () => dispatch(fetchOrdersHall()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerOrders);
