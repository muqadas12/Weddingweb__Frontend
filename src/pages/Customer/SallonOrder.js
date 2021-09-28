// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { Card } from 'antd';
// import { Link } from 'react-router-dom';
// import order from '../../Assets/images/order.PNG';
// import { fetchViewSallonOrder } from '../../ReduxApi/viewOrders/viewCatering/ViewCateringAction';
// import './CusOrder.scss';

// function CustomerOrders({ userData, fetchViewSallonOrder }) {
//   useEffect(() => {
//     fetchViewSallonOrder();
//   }, []);

//   return userData.loading ? (
//     <h2>Loading....</h2>
//   ) : userData.error ? (
//     <h2>{userData.error}</h2>
//   ) : (
//     <div>
//       <img className="customer-view-order-img" src={order} alt="order" />
//       <p className="customer-irder-view-heading">View Your order here!</p>
//       {userData.viewSaloonorder.functionDate}
//       {userData.viewSaloonorder.makeupType}
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   userData: state.servicescatering,
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchViewSallonOrder: () => dispatch(fetchViewSallonOrder()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CustomerOrders);
