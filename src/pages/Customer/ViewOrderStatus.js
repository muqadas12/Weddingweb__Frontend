import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';

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
              <p> {user.orderStatus} </p>
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
