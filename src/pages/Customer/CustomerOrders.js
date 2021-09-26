// import React from 'react';

// function CustomerOrders() {
//   return <div>cutomer orders</div>;
// }

// export default CustomerOrders;

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import order from '../../Assets/images/order.PNG';
import { fetchViewCatering } from '../../ReduxApi/viewCatering/ViewCateringAction';
import './CusOrder.scss';

function CustomerOrders({ userData, fetchViewCatering }) {
  useEffect(() => {
    fetchViewCatering();
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
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.servicescatering,
});

const mapDispatchToProps = (dispatch) => ({
  fetchViewCatering: () => dispatch(fetchViewCatering()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerOrders);
