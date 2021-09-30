import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Card, Form, Select, Button } from 'antd';
import { fetchOrders } from '../../../ReduxApi/viewDealerOrders/CateringOrders/Orders.action';
import { fetchOrderStatus } from '../../../ReduxApi/orderStatus/OrderStatus.action';
import { fetchOrdersSaloon } from '../../../ReduxApi/viewDealerOrders/saloonOrders/SaloonOrder.action';
import viewCustomerOrder from '../../../Assets/images/viewCustomerOrder.png';
import './Order.scss';

const { Option } = Select;
function Orders({ userData, fetchOrders, fetchOrdersSaloon }) {
  // eslint-disable-next-line no-unused-vars
  const saloonSer = useSelector((state) => state.viewDealerSaloonOrder);
  const dispatch = useDispatch();
  const [] = useState({
    orderStatus: '',
  });
  function addStatus(payload) {
    dispatch(fetchOrderStatus(payload));
  }
  const formSubmit = (e) => {
    const payload = {
      orderStatus: e.orderStatus,
    };
    addStatus(payload);
  };
  useEffect(() => {
    fetchOrders();
    fetchOrdersSaloon();
  }, []);

  return userData.loading ? (
    <h2>Loading....</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <img
        className="viewCustomerOrder-Img"
        src={viewCustomerOrder}
        alt="viewCustomerOrderImg"
      />
      {/* {saloonSer &&
        saloonSer.dealerSaloonOrders &&
        saloonSer.dealerSaloonOrders.map((user) => <p>{user.makeupType}</p>)} */}
      <h1 className="view-customer-order-heading">View Customer Order</h1>
      <div>
        {userData &&
          userData.orders &&
          userData.orders.map((user) => (
            <p>
              <Card className="card-view-order-of-customer">
                <p className="function-date-of-order-by-customer">
                  <p className="heading-function-date-customer-order">
                    Service Category
                  </p>
                  {user.serviceCategory}
                </p>
                <p className="function-date-of-order-by-customer">
                  <p className="heading-function-date-customer-order">
                    Service Name
                  </p>
                  {user.serviceName}
                </p>
                <p className="function-date-of-order-by-customer">
                  <p className="heading-function-date-customer-order">
                    Function date
                  </p>
                  {user.functionDate}
                </p>
                <p className="function-date-of-order-by-customer">
                  <p className="heading-function-date-customer-order">
                    Function Time
                  </p>
                  {user.functionTime}
                </p>
                <p className="function-type-of-order-by-customer">
                  <p className="heading-function-date-customer-order">
                    Function Type
                  </p>
                  {user.functionType}
                </p>
                <p className="food-type-of-order-by-customer">
                  <p className="heading-function-date-customer-order">
                    Food Type
                  </p>
                  {user.foodType}
                </p>
                <p className="num-of-people-of-order-by-customer">
                  <p className="heading-function-date-customer-order">
                    Number of people
                  </p>
                  {user.numOfPeople}
                </p>
                <p className="heading-function-date-customer-order">
                  Customer Email
                </p>
                <p className="email-of-order-by-customer">{user.email}</p>
              </Card>
            </p>
          ))}
        <Form onFinish={(e) => formSubmit(e)}>
          <Form.Item
            name="orderStatus"
            label="Give Order Status"
            className="order-status-dropdown"
            rules={[
              {
                required: true,
                message: 'Please select Order Status!',
              },
            ]}
          >
            <Select placeholder="select Order Status">
              <Option value="Accepted">Accepted</Option>
              <Option value="Pending">Pending</Option>
            </Select>
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="assign-status-order-btn"
          >
            Assign
          </Button>
        </Form>
      </div>
      <div>
        {/* {saloonSer &&
        saloonSer.dealerSaloonOrders &&
        saloonSer.dealerSaloonOrders.map((user) => <p>{user.makeupType}</p>)} */}
        {saloonSer &&
          saloonSer.dealerSaloonOrders &&
          saloonSer.dealerSaloonOrders.map((user) => (
            <p>
              <Card className="card-view-order-of-customer">
                <p className="function-date-of-order-by-customer">
                  <p className="heading-function-date-customer-order">
                    Service Category
                  </p>
                  {user.serviceCategory}
                </p>
                <p className="function-date-of-order-by-customer">
                  <p className="heading-function-date-customer-order">
                    Service Name
                  </p>
                  {user.serviceName}
                </p>
                <p className="function-date-of-order-by-customer">
                  <p className="heading-function-date-customer-order">
                    Function date
                  </p>
                  {user.functionDate}
                </p>
                <p className="function-date-of-order-by-customer">
                  <p className="heading-function-date-customer-order">
                    Function Time
                  </p>
                  {user.functionTime}
                </p>
                <p className="function-type-of-order-by-customer">
                  <p className="heading-function-date-customer-order">
                    Makeup Type
                  </p>
                  {user.makeupType}
                </p>

                <p className="heading-function-date-customer-order">
                  Customer Email
                </p>
                <p className="email-of-order-by-customer">{user.email}</p>
              </Card>
            </p>
          ))}
        <Form onFinish={(e) => formSubmit(e)}>
          <Form.Item
            name="orderStatus"
            label="Give Order Status"
            className="order-status-dropdown"
            rules={[
              {
                required: true,
                message: 'Please select Order Status!',
              },
            ]}
          >
            <Select placeholder="select Order Status">
              <Option value="Accepted">Accepted</Option>
              <Option value="Pending">Pending</Option>
            </Select>
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="assign-status-order-btn"
          >
            Assign
          </Button>
        </Form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.viewOrders,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrders()),
  fetchOrdersSaloon: () => dispatch(fetchOrdersSaloon()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
