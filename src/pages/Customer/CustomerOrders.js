import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import order from '../../Assets/images/order.PNG';
import { fetchViewCatering } from '../../ReduxApi/viewOrders/viewCatering/ViewCateringAction';
import { fetchViewSallonOrder } from '../../ReduxApi/viewOrders/viewSaloonBooking/Saloonbooking.actions';
import { fetchViewOrderStatus } from '../../ReduxApi/orderStatus/OrderStatus.action';

import './CusOrder.scss';

function CustomerOrders({
  userData,
  fetchViewCatering,
  fetchViewSallonOrder,
  fetchViewOrderStatus,
}) {
  const saloon = useSelector((state) => state.viewSaloonorder);
  const orders = useSelector((state) => state.viewStatusorder);

  useEffect(() => {
    fetchViewCatering();
    fetchViewSallonOrder();
    fetchViewOrderStatus();
  }, []);

  return userData.loading ? (
    <h2>Loading....</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <img className="customer-view-order-img" src={order} alt="order" />
      <p className="customer-irder-view-heading">View Your order here!</p>
      <Card className="card-view-orders">
        <p className="Function-date-Customer-order">Service Category:</p>
        <p
          className="service-category-view-customer
        "
        >
          {' '}
          {userData.viewCatering.serviceCategory}
        </p>
        <p className="Function-date-Customer-order">Customer Email:</p>
        <p
          className="cus-email-view-customer
        "
        >
          {' '}
          {userData.viewCatering.email}
        </p>
        <p className="Function-date-Customer-order">Service Name:</p>
        <p
          className="service-name-view-customer
        "
        >
          {' '}
          {userData.viewCatering.serviceName}
        </p>
        <p className="Function-date-Customer-order">Function date:</p>
        <p
          className="function-date-view-customer
        "
        >
          {' '}
          {userData.viewCatering.functionDate}
        </p>
        <br />
        <p className="Function-date-Customer-order">Function Time:</p>
        <p className="function-time-view-customer">
          {' '}
          {userData.viewCatering.functionTime}
        </p>
        <br />
        <p className="Function-date-Customer-order">Function Type:</p>
        <p className="function-time-view-customer">
          {' '}
          {userData.viewCatering.functionType}
        </p>
        <br />
        <p className="Function-date-Customer-order">Number of people:</p>
        <p className="function-NumOfPeople-view-customer">
          {userData.viewCatering.numOfPeople}
        </p>
        <br />
        <p className="Function-date-Customer-order">Order Status:</p>
        <p className="function-NumOfPeople-view-customer">
          {orders &&
            orders.viewOrderStatus &&
            orders.viewOrderStatus.map((user) => (
              <p>
                <p>
                  {' '}
                  {user.orderStatus === 'Accepted' ? (
                    <Link to="/customer-payment">
                      <p style={{ marginLeft: '-25px' }}>
                        {' '}
                        Your order is <p style={{ color: 'green' }}>
                          accepted
                        </p>{' '}
                        Click here to pay
                      </p>
                    </Link>
                  ) : (
                    'wait'
                  )}{' '}
                </p>
              </p>
            ))}
        </p>
      </Card>
      <Card className="card-view-orders">
        <p className="Function-date-Customer-order">Service Category:</p>
        <p
          className="service-category-view-customer
        "
        >
          {' '}
          {saloon.viewSaloonorder.serviceCategory}
        </p>
        <p className="Function-date-Customer-order">Customer Email:</p>
        <p
          className="cus-email-view-customer
        "
        >
          {' '}
          {saloon.viewSaloonorder.email}
        </p>
        <p className="Function-date-Customer-order">Service Name:</p>
        <p
          className="service-name-view-customer
        "
        >
          {' '}
          {saloon.viewSaloonorder.serviceName}
        </p>
        <p className="Function-date-Customer-order">Function date:</p>
        <p
          className="function-date-view-customer
        "
        >
          {' '}
          {saloon.viewSaloonorder.functionDate}
        </p>
        <br />
        <p className="Function-date-Customer-order">Function Time:</p>
        <p className="function-time-view-customer">
          {' '}
          {saloon.viewSaloonorder.functionTime}
        </p>
        <br />
        <p className="Function-date-Customer-order">Makeup Type:</p>
        <p className="function-time-view-customer">
          {' '}
          {saloon.viewSaloonorder.makeupType}
        </p>
        <br />
      </Card>
      {/* {orders.viewOrderStatus.orderStatus} */}
      {/* {orders &&
        orders.viewOrderStatus &&
        orders.viewOrderStatus.map((user) => (
          <p>
            <p> {user.orderStatus} </p>
          </p>
        ))} */}
      {/* <Link to="/view-Order-Status">View order status</Link> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.servicescatering,
});

const mapDispatchToProps = (dispatch) => ({
  fetchViewCatering: () => dispatch(fetchViewCatering()),
  fetchViewSallonOrder: () => dispatch(fetchViewSallonOrder()),
  fetchViewOrderStatus: () => dispatch(fetchViewOrderStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerOrders);
