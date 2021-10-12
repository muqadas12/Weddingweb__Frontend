import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Form, Button } from 'antd';
import { fetchOrders } from '../../../ReduxApi/viewDealerOrders/CateringOrders/Orders.action';
import { fetchOrderStatus } from '../../../ReduxApi/orderStatus/OrderStatus.action';
import { fetchOrdersSaloon } from '../../../ReduxApi/viewDealerOrders/saloonOrders/SaloonOrder.action';
import { fetchDealerOrdersPhotography } from '../../../ReduxApi/viewDealerOrders/viewPhotographyOrders/PhotographyOrder.action';
import { fetchdealerCarOrders } from '../../../ReduxApi/viewDealerOrders/carRentalOrders/CarRentalOrders.action';
import { fetchOrdersDealerHall } from '../../../ReduxApi/viewDealerOrders/hallOrder/HallOrder.action';
import viewCustomerOrder from '../../../Assets/images/viewCustomerOrder.png';
import './Order.scss';
import { setSelectedDealer } from '../../../ReduxApi/CarRental/CarActions';

// const { Option } = Select;
function Orders({
  userData,
  saloonData,
  halldata,
  fetchOrders,
  fetchOrdersDealerHall,
  fetchOrdersSaloon,
  fetchDealerOrdersPhotography,
  photographyData,
  fetchdealerCarOrders,
  cardealer,
}) {
  // eslint-disable-next-line no-unused-vars
  // const saloonSer = useSelector((state) => state.viewDealerSaloonOrder);
  const dispatch = useDispatch();
  const [] = useState({
    orderStatus: '',
    serviceName: '',
  });

  const [status, setStatus] = useState('');
  // console.log(status);

  function addStatus(payload) {
    dispatch(fetchOrderStatus(payload));
  }
  // const formSubmit = (e) => {
  //   const payload = {
  //     orderStatus: e.orderStatus,
  //     serviceName: dealer,
  //   };
  //   addStatus(payload);
  // };

  useEffect(() => {
    fetchOrders();
    fetchOrdersDealerHall();
    fetchdealerCarOrders();
    fetchOrdersSaloon();
    fetchDealerOrdersPhotography();
  }, []);

  const orderHandler = (userEmail, serviceName, price, functionDate) => {
    // console.log(e.orderStatus, 'im status');
    // console.log(userEmail, 'im email');
    // console.log(serviceName, 'im service');
    // console.log(price, 'im price');
    // console.log(functionDate, 'im functionDate');

    // console.log(status, 'im status');
    const payload = {
      // orderStatus: e.orderStatus,
      orderStatus: status,
      userEmail,
      serviceName,
      price,
      functionDate,
    };

    addStatus(payload);
  };

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
              <p className="hall-type-order-dealer">
                <p className="hall-heading"> Hall of </p>
                <br />
                <p className="service-name-dealer-view"> {user.serviceName}</p>
              </p>

              <p className="hall-type-order-dealer-price">{`at Rs ${user.price}`}</p>
              <p className="hall-type-order-dealer-email">{user.email}</p>
              <>
                <Form>
                  <Form.Item
                    name="orderStatus"
                    label="Give Order Status"
                    className="order-status-dropdown-dealer-hall"
                    rules={[
                      {
                        required: true,
                        message: 'Please select Order Status!',
                      },
                    ]}
                  >
                    <select
                      className="ant-input"
                      style={{ width: '160px' }}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="Select status">Select status</option>
                      <option value="Accepted">Accepted</option>

                      <option value="Pending">Pending</option>
                    </select>
                  </Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="assign-status-order-btn-dealer-orders"
                    onClick={() =>
                      orderHandler(
                        user.email,
                        user.serviceName,
                        user.price,
                        user.functionDate
                      )
                    }
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
              <p className="photography-types-order-dealer">
                {user.photographyType}
              </p>
              <p className="photography-type-order-dealer">
                <p className="of-photography"> {'of '}</p>
                <br />
                <p className="service-name-dealer-view-photography">
                  {' '}
                  {user.serviceName}
                </p>
              </p>

              <p className="photography-type-order-dealer-price-photographer">
                {`at Rs ${user.price}`}
              </p>
              <p className="photography-type-order-dealer-email">
                {`Customer email:${user.email}`}
              </p>
              <p className="photography-type-order-dealer-email">
                {user.orderStatus}
              </p>
              <>
                <Form>
                  <Form.Item
                    name="orderStatus"
                    label="Give Order Status"
                    className="order-status-dropdown-dealer-photographers"
                    rules={[
                      {
                        required: true,
                        message: 'Please select Order Status!',
                      },
                    ]}
                  >
                    <select
                      className="ant-input"
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="select status">select status</option>

                      <option value="Accepted">Accepted</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="assign-status-order-btn-dealer-orders"
                    onClick={() =>
                      orderHandler(
                        user.email,
                        user.serviceName,
                        user.price,
                        user.functionDate
                      )
                    }
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
                <Form>
                  <Form.Item
                    name="orderStatus"
                    label="Give Order Status"
                    className="order-status-dropdown-dealer-car-rent"
                    rules={[
                      {
                        required: true,
                        message: 'Please select Order Status!',
                      },
                    ]}
                  >
                    <select
                      className="ant-input"
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="Accepted">Accepted</option>
                      <option value="Accepted">Accepted</option>

                      <option value="Pending">Pending</option>
                    </select>
                  </Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="assign-status-order-btn-dealer-orders-carrent"
                    onClick={() =>
                      orderHandler(
                        user.email,
                        user.serviceName,
                        user.price,
                        user.functionDate
                      )
                    }
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
                <p className="function-servicename-catering-of-order-by-customer">
                  {user.serviceName}
                </p>
                <p className="function-date-of-order-by-customer">
                  {user.foodType}
                </p>
                <p className="function-date-of-order-by-customer">
                  {`at Rs ${user.price}`}
                </p>
                <p className="function-type-of-order-by-customer">
                  {user.functionType}
                </p>

                <p className="email-of-order-by-customer">{user.email}</p>
                <>
                  <Form>
                    <Form.Item
                      name="orderStatus"
                      label="Give Order Status"
                      className="order-status-dropdown-dealer-catering"
                      rules={[
                        {
                          required: true,
                          message: 'Please select Order Status!',
                        },
                      ]}
                    >
                      <select
                        className="ant-input"
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="Accepted">Accepted</option>
                        <option value="Accepted">Accepted</option>

                        <option value="Pending">Pending</option>
                      </select>
                    </Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="assign-status-order-btn-dealer-orders-catering"
                      onClick={() =>
                        orderHandler(
                          user.email,
                          user.serviceName,
                          user.price,
                          user.functionDate
                        )
                      }
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
        <div className="photography-order-dealer-view">
          {saloonData &&
            saloonData.dealerSaloonOrders &&
            saloonData.dealerSaloonOrders.map((user) => (
              <div>
                <p className="makeUpType-type-order-dealer">
                  {user.makeupType}
                </p>
                <p className="photography-type-customer-select">
                  <p style={{ marginLeft: '60px' }}> {'of '}</p>
                  <br />
                  <p className="service-name-dealer-view">
                    {' '}
                    {user.serviceName}
                  </p>
                </p>

                <p className="car-type-customer-select-price">
                  {`at Rs ${user.price}`}
                </p>
                <p className="customer-order-email-car">{user.email}</p>
                <>
                  <Form>
                    <Form.Item
                      name="orderStatus"
                      label="Give Order Status"
                      className="order-status-dropdown-dealer-car-rent"
                      rules={[
                        {
                          required: true,
                          message: 'Please select Order Status!',
                        },
                      ]}
                    >
                      <select
                        className="ant-input"
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="Accepted">Accepted</option>
                        <option value="Accepted">Accepted</option>

                        <option value="Pending">Pending</option>
                      </select>
                    </Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="assign-status-order-btn-dealer-orders-carrent"
                      onClick={() =>
                        orderHandler(
                          user.email,
                          user.serviceName,
                          user.price,
                          user.functionDate
                        )
                      }
                    >
                      Assign
                    </Button>
                  </Form>
                </>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.viewOrders,
  saloonData: state.viewDealerSaloonOrder,
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
