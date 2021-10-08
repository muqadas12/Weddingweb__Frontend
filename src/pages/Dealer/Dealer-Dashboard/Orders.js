import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Form, Select, Button } from 'antd';
import { fetchOrders } from '../../../ReduxApi/viewDealerOrders/CateringOrders/Orders.action';
import { fetchOrderStatus } from '../../../ReduxApi/orderStatus/OrderStatus.action';
import { fetchOrdersSaloon } from '../../../ReduxApi/viewDealerOrders/saloonOrders/SaloonOrder.action';
import { fetchDealerOrdersPhotography } from '../../../ReduxApi/viewDealerOrders/viewPhotographyOrders/PhotographyOrder.action';
import { fetchdealerCarOrders } from '../../../ReduxApi/viewDealerOrders/carRentalOrders/CarRentalOrders.action';
import { fetchOrdersDealerHall } from '../../../ReduxApi/viewDealerOrders/hallOrder/HallOrder.action';
import viewCustomerOrder from '../../../Assets/images/viewCustomerOrder.png';
import './Order.scss';
import { setSelectedDealer } from '../../../ReduxApi/CarRental/CarActions';

const { Option } = Select;
function Orders({
  userData,
  halldata,
  fetchOrders,
  fetchOrdersDealerHall,
  fetchOrdersSaloon,
  fetchDealerOrdersPhotography,
  photographyData,
  fetchdealerCarOrders,
  cardealer,
  dealer,
}) {
  // eslint-disable-next-line no-unused-vars
  const saloonSer = useSelector((state) => state.viewDealerSaloonOrder);
  const dispatch = useDispatch();
  const [] = useState({
    orderStatus: '',
    serviceName: '',
  });
  function addStatus(payload) {
    dispatch(fetchOrderStatus(payload));
  }
  const formSubmit = (e) => {
    const payload = {
      orderStatus: e.orderStatus,
      serviceName: dealer,
    };
    addStatus(payload);
  };

  useEffect(() => {
    fetchOrders();
    fetchOrdersDealerHall();
    fetchdealerCarOrders();
    fetchOrdersSaloon();
    setSelectedDealer();
    fetchDealerOrdersPhotography();
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

      <h1 className="view-customer-order-heading">View Customer Order</h1>
      <br />
      <>
        {halldata &&
          halldata.dealerHallOrders &&
          halldata.dealerHallOrders.map((user) => (
            <div>
              <p className="photography-type">{user.photographyType}</p>
              <p className="photography-type-order-dealer">
                <p style={{ marginLeft: '40px' }}> Hall of </p>
                <br />
                <p className="service-name-dealer-view"> {user.serviceName}</p>
              </p>

              <p className="photography-type-order-dealer-price">
                {`at Rs ${user.price}`}
              </p>
              <p className="photography-type-order-dealer">{user.email}</p>
              <>
                <Form onFinish={(e) => formSubmit(e)}>
                  <Form.Item
                    name="orderStatus"
                    label="Give Order Status"
                    className="order-status-dropdown-dealer-photographer"
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
                    className="assign-status-order-btn-dealer-orders"
                  >
                    Assign
                  </Button>
                </Form>
              </>
            </div>
          ))}
      </>
      <>
        {photographyData &&
          photographyData.photographyOrders &&
          photographyData.photographyOrders.map((user) => (
            <div>
              <p className="photography-type">{user.photographyType}</p>
              <p className="photography-type-order-dealer">
                <p style={{ marginLeft: '40px' }}> {'of '}</p>
                <br />
                <p className="service-name-dealer-view"> {user.serviceName}</p>
              </p>

              <p className="photography-type-order-dealer-price">
                {`at Rs ${user.price}`}
              </p>
              <p className="photography-type-order-dealer">{user.email}</p>
              <>
                <Form onFinish={(e) => formSubmit(e)}>
                  <Form.Item
                    name="orderStatus"
                    label="Give Order Status"
                    className="order-status-dropdown-dealer-photographer"
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
                    className="assign-status-order-btn-dealer-orders"
                  >
                    Assign
                  </Button>
                </Form>
              </>
            </div>
          ))}
      </>
      <div className="photography-order-dealer-view">
        {cardealer &&
          cardealer.carOrdersDealer &&
          cardealer.carOrdersDealer.map((user) => (
            <div>
              <p className="carType-type-order-dealer">{user.carType}</p>
              <p className="photography-type-customer-select">
                <p style={{ marginLeft: '60px' }}> {'of '}</p>
                <br />
                <p className="service-name-dealer-view"> {user.serviceName}</p>
              </p>

              <p className="car-type-customer-select-price">
                {`at Rs ${user.price}`}
              </p>
              <p className="customer-order-email-car">{user.email}</p>
              <>
                <Form onFinish={(e) => formSubmit(e)}>
                  <Form.Item
                    name="orderStatus"
                    label="Give Order Status"
                    className="order-status-dropdown-muqaddas"
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
                    className="assign-status-order-btn-muqaddas-orders"
                  >
                    Assign
                  </Button>
                </Form>
              </>
            </div>
          ))}
      </div>
      <div>
        {userData &&
          userData.orders &&
          userData.orders.map((user) => (
            <p>
              <div className="card-view-order-of-customer-catering-dealer">
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
                <>
                  <Form onFinish={(e) => formSubmit(e)}>
                    <Form.Item
                      name="orderStatus"
                      label="Give Order Status"
                      className="order-status-dropdown-catering-dealer"
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
                      className="assign-status-order-btn-dealer-orders-catering"
                    >
                      Assign
                    </Button>
                  </Form>
                </>
              </div>
            </p>
          ))}
      </div>
      <div>
        {saloonSer &&
          saloonSer.dealerSaloonOrders &&
          saloonSer.dealerSaloonOrders.map((user) => (
            <p>
              <div className="card-view-order-of-customer">
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
                <>
                  <Form onFinish={(e) => formSubmit(e)}>
                    <Form.Item
                      name="orderStatus"
                      label="Give Order Status"
                      className="order-status-dropdown-muqaddas"
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
                      className="assign-status-order-btn-saloon-dealer-orders"
                    >
                      Assign
                    </Button>
                  </Form>
                </>
              </div>
            </p>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.viewOrders,
  photographyData: state.viewPhotographyOrders,
  halldata: state.viewHallDealerOrder,
  cardealer: state.viewDealerCarOrder,
  dealer: state.viewphotographerServices.selectedDealer,
  price: state.viewphotographerServices.setSelectedPrice,
  email: state.viewphotographerServices.selectedEmail,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrders()),
  fetchOrdersSaloon: () => dispatch(fetchOrdersSaloon()),
  fetchDealerOrdersPhotography: () => dispatch(fetchDealerOrdersPhotography()),
  fetchdealerCarOrders: () => dispatch(fetchdealerCarOrders()),
  setSelectedDealer: (dealer) => dispatch(setSelectedDealer(dealer)),
  fetchOrdersDealerHall: () => dispatch(fetchOrdersDealerHall()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
