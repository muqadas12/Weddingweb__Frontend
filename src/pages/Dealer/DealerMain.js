/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import dealerdashboardpic from '../../Assets/images/dealer.jpg';
import './Dealer-main.scss';
import dealerProfile from '../../Assets/images/profile.PNG';
import updateProfile from '../../Assets/images/updateProfile.PNG';
import addServices from '../../Assets/images/addSer.PNG';
import viewServices from '../../Assets/images/viewServices.PNG';
import order from '../../Assets/images/orders.PNG';
import updateSer from '../../Assets/images/updateSer.PNG';

import logoutCustomer from '../../Assets/images/logoutCustomer.PNG';

function DealerMain() {
  const logout = () => {
    localStorage.clear();
    window.location.href = '/sign-in';
  };
  return (
    <div>
      <img
        src={dealerdashboardpic}
        className="dealer-main-page-img"
        alt="dealerdashboardImg"
      />

      <img
        className="view-profile-dealer-main-page"
        src={dealerProfile}
        alt="ViewProfile"
      />
      <Link to="/dealer-view-profile">
        {' '}
        <p className="Link-to-profile-page">View Profile</p>
      </Link>
      <img
        className="update-profile-dealer"
        src={updateProfile}
        alt="update-profile"
      />
      <Link to="/dealer-update-profile">
        <p className="link-to-update-profile">Update Profile</p>
      </Link>
      <img
        src={addServices}
        className="add-services-dealer-page"
        alt="addServices"
      />
      <Link to="/dealer-add-services">
        <p className="Link-to-add-services-page">Add Services</p>
      </Link>
      <img
        className="view-services-dealer"
        src={viewServices}
        alt="viewServices"
      />
      <Link to="/dealer-view-services">
        <p className="Link-to-view-services-page">View Services</p>
      </Link>
      <img src={order} className="orderviewimg" alt="orders-img" />
      <Link to="/dealer-view-orders">
        <p className="link-to-dealers-order">View Orders</p>
      </Link>
      <img
        className="updateServiceimg"
        src={updateSer}
        alt="updateService-img"
      />
      <Link to="/dealer-update-services/:id">
        <p className="update-services-link">Update Services</p>
      </Link>

      <img
        className="logout-icon-customer"
        onClick={logout}
        src={logoutCustomer}
        alt="logoutCustomer"
      />
    </div>
  );
}

export default DealerMain;
