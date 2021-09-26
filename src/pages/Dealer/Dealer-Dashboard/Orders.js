import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { fetchOrders } from '../../../ReduxApi/viewDealerOrders/Orders.action';

function Orders({ userData, fetchOrders }) {
  useEffect(() => {
    fetchOrders();
  }, []);

  return userData.loading ? (
    <h2>Loading....</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <div>
        {userData &&
          userData.orders &&
          userData.orders.map((user) => (
            <p>
              <Card
                title={user.foodType}
                style={{
                  width: 300,
                  marginLeft: '360px',
                  flexDirection: 'row',
                  marginTop: '10px',
                }}
              >
                <p>Cases: {user.foodType} </p>
                <p>Recovered:{user.functionType}</p>
              </Card>
            </p>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.viewOrders,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrders()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
