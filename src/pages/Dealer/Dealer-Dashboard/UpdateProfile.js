/* eslint-disable no-console */
/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react';
import { Form, Input } from 'antd';
import axios from 'axios';
import { connect } from 'react-redux';
import viewprof from '../../../Assets/images/viewProfiledealer.gif';
import {
  fetchUsersupdated,
  fetchupdated,
} from '../../../ReduxApi/updateProfile/userAction';
import './UpdateProfile.scss';

function updateProfile({ userData, onEdit }) {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    role: '',
    _id: '',
  });
  useEffect(() => {
    fetchUsersupdated();
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
          _id: res.data.existingUser._id,
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
  return userData.loadin ? (
    <h1>Loading..</h1>
  ) : userData.error ? (
    <p>{userData.error}</p>
  ) : (
    <div>
      <img className="dealer-profile" src={viewprof} alt="profile" />
      <div>
        <p className="view-profile-dealer">
          {' '}
          Welcome!
          {userInfo.name}
        </p>
        <div className="user-customer-profile-info">
          <Form>
            <Form.Item
              label="Username"
              name="name"
              onChange={(e) => {
                console.log(e.target.value);
                userInfo.name = e.target.value;
                console.log(userInfo);
                setUserInfo(userInfo);
              }}
              className="updated-name"
              rules={[
                { required: true, message: 'Please update your username!' },
              ]}
            >
              <Input placeholder={userInfo.name} />
            </Form.Item>

            <Form.Item
              label="email"
              name="email"
              onChange={(e) => {
                userInfo.email = e.target.value;
                setUserInfo(userInfo);
              }}
              className="updated-email"
              rules={[{ required: true, message: 'Please update your Email!' }]}
            >
              <Input placeholder={userInfo.email} />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              onChange={(e) => {
                userInfo.phoneNumber = e.target.value;
                setUserInfo(userInfo);
              }}
              className="updated-number"
              rules={[
                {
                  required: true,
                  message: 'Please update your phoneNumber!',
                },
              ]}
            >
              <Input placeholder={userInfo.phoneNumber} />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              onChange={(e) => {
                userInfo.address = e.target.value;
                setUserInfo(userInfo);
              }}
              className="updated-address"
              rules={[
                { required: true, message: 'Please update your username!' },
              ]}
            >
              <Input placeholder={userInfo.address} />
            </Form.Item>

            <Form.Item
              label="Role"
              name="role"
              onChange={(e) => {
                userInfo.role = e.target.value;
                setUserInfo(userInfo);
              }}
              className="updated-role"
              rules={[{ required: true, message: 'Please update your role!' }]}
            >
              <Input placeholder={userInfo.role} />
            </Form.Item>
          </Form>

          <br />
          <button type="button" onClick={() => onEdit(userInfo._id, userInfo)}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  userData: state.dealerProfile,
});

const mapDispatchToProps = (dispatch) => ({
  onEdit: (_id, userInfo) => {
    dispatch(fetchupdated(_id, userInfo));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(updateProfile);
