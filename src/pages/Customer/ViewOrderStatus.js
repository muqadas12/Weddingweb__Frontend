// import React from 'react';
// import { fetchViewOrderStatus } from '../../ReduxApi/orderStatus/OrderStatus.action';

// const viewOrderStatus = () => <div>hi</div>;
// export default viewOrderStatus;
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import order from '../../Assets/images/order.PNG';
import { fetchViewOrderStatus } from '../../ReduxApi/orderStatus/OrderStatus.action';
import './CusOrder.scss';

function CustomerOrders({ userData, fetchViewOrderStatus }) {
  useEffect(() => {
    fetchViewOrderStatus();
  }, []);

  return userData.loading ? (
    <h2>Loading....</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      {/* {userData &&
        userData.viewOrderStatus &&
        userData.viewOrderStatus.map((user) => <p>{user.orderStatus}</p>)} */}
      {userData &&
        userData.viewOrderStatus &&
        userData.viewOrderStatus.map((user) => (
          <p>
            <Card
              title={user.orderStatus}
              style={{
                width: 300,
                marginLeft: '360px',
                flexDirection: 'row',
                marginTop: '10px',
              }}
            >
              <p>Cases: {user.orderStatus} </p>
            </Card>
          </p>
        ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.viewStatusorder,
});

const mapDispatchToProps = (dispatch) => ({
  fetchViewOrderStatus: () => dispatch(fetchViewOrderStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerOrders);
