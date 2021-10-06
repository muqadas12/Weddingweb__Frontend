import React, { useState } from 'react';
import { Form, Select, Button } from 'antd';
import { connect, useDispatch } from 'react-redux';

import { fetchOrderStatus } from '../../../ReduxApi/orderStatus/OrderStatus.action';

function OrderStatus() {
  const { Option } = Select;
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
  return (
    <div>
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
    </div>
  );
}
const mapStateToProps = (state) => ({
  userData: state.viewOrders,
  photographyData: state.viewPhotographyOrders,
  cardealer: state.viewDealerCarOrder,
  dealer: state.viewphotographerServices.selectedDealer,
  price: state.viewphotographerServices.setSelectedPrice,
  email: state.viewphotographerServices.selectedEmail,
});

export default connect(mapStateToProps, null)(OrderStatus);
