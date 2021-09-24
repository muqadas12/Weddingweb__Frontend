/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import Customermainpic from '../../../Assets/images/customerdashboard.jpg';
import CustomerIcon from '../../../Assets/images/customerIcon.jpg';
import viewCF from '../../../Assets/images/viewCustomerProfile.PNG';
import updateCP from '../../../Assets/images/updateCustomerProfile.PNG';
import viewOrder from '../../../Assets/images/viewOrders.PNG';
import logoutCustomer from '../../../Assets/images/logoutCustomer.PNG';
import './Customer-main.scss';

function Customermain() {
  const logout = () => {
    localStorage.clear();
    window.location.href = '/sign-in';
  };

  return (
    <div>
      <img
        className="customer-main-page-img"
        src={Customermainpic}
        alt="customer-main-page-img"
      />
      <Card className="Card-customer">
        <img className="CustomerIcon" src={CustomerIcon} alt="CustomerIcon" />
        <h1 className="h1-welcome-heading">Welcome!</h1>
        <p className="customer-page-info">
          This is the Customer Page
          <br />
          Here the customer can view profile.
          <br />
          Customer can also update profile and view order wheather they are
          accept or reject{' '}
        </p>
      </Card>
      <img
        className="customer-profile-img"
        src={viewCF}
        alt="viewCustomerProfile"
      />
      <Link to="customer-profile">
        <p className="view-customer-profile">View Customer Profile</p>
      </Link>
      <img
        className="update-profile-img"
        src={updateCP}
        alt="updateCustomerProfile"
      />
      <Link to="/customer-update-profile">
        <p className="update-cus-profile">Update Profile</p>
      </Link>
      <img className="viewOrder" src={viewOrder} alt="viewOrder" />
      <Link to="/customer-orders">
        <p className="view-orders-cus">View Orders</p>
      </Link>

      <img
        className="logout-icon-customer"
        onClick={logout}
        src={logoutCustomer}
        alt="logoutCustomer"
      />

      <div />
    </div>
  );
}

export default Customermain;
