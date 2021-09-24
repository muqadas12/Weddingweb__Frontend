import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchUsers } from '../../ReduxApi/ViewProfile/userAction';
import viewProfile from '../../Assets/images/viewProfile.jpg';
import './viewProfile.scss';

function ViewProfile({ userData, fetchUsers }) {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    role: '',
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const displayInfo = () => {
    console.log(localStorage.getItem('email'), ' email from display');
    axios
      .post('http://localhost:2000/api/users/dashboard', {
        email: localStorage.getItem('email'),
      })
      .then((res) => {
        setUserInfo({
          name: res.data.existingUser.name,
          email: res.data.existingUser.email,
          phoneNumber: res.data.existingUser.phoneNumber,
          address: res.data.existingUser.address,
          role: res.data.existingUser.role,
        });

        console.log(res.data.existingUser, 'res from display');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    displayInfo();
  }, []);

  return userData.loading ? (
    <h2>Loading....</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <img
        className="view-customer-profile"
        src={viewProfile}
        alt="viewProfile"
      />
      <div />
      <div>
        <p className="view-profile-customer">
          {' '}
          Welcome!
          {userInfo.name}
        </p>
        <div className="user-customer-profile-info">
          Your user name: <p className="info-display">{userInfo.name}</p>
          Your email:<p className="info-display">{userInfo.email}</p>
          Your PhoneNo:<p className="info-display">{userInfo.phoneNumber}</p>
          Your Address:<p className="info-display">{userInfo.address}</p>
          You are SignUp with the{' '}
          <p className="info-display">{userInfo.role} role</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile);
