import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";

import axios from "axios";
import viewprof from "../../../Assets/images/viewProfiledealer.gif";
import {
  fetchUsersupdated,
  fetchupdated,
} from "../../../ReduxApi/updateProfile/userAction";
import { connect } from "react-redux";
import "./UpdateProfile.scss";
function ViewProfile({ userData, fetchDealers }) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    role: "",
    _id: "",
  });
  useEffect(() => {
    fetchUsersupdated();
  }, []);
  const displayInfo = () => {
    console.log(localStorage.getItem("email"), " email from display");
    axios
      .post("http://localhost:2000/api/users/dashboard", {
        email: localStorage.getItem("email"),
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

        console.log(res.data.existingUser, "res from display");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    displayInfo();
  }, []);
  function submit(id) {
    console.log("hiii", fetchupdated());
    fetchupdated(id);
  }

  return userData.loadin ? (
    <h1>Loading..</h1>
  ) : userData.error ? (
    <p>{userData.error}</p>
  ) : (
    <div>
      <img className="dealer-profile" src={viewprof} alt="profile" />
      <div>
        <p className="view-profile-dealer">
          {" "}
          Welcome!
          {userInfo.name}
        </p>
        <div className="user-customer-profile-info">
          <Form>
            <Form.Item
              label="Username"
              name="username"
              className="updated-name"
              rules={[
                { required: true, message: "Please update your username!" },
              ]}
            >
              <Input placeholder={userInfo.name} />
            </Form.Item>

            <Form.Item
              label="email"
              name="email"
              className="updated-email"
              rules={[{ required: true, message: "Please update your Email!" }]}
            >
              <Input placeholder={userInfo.email} />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              className="updated-number"
              rules={[
                {
                  required: true,
                  message: "Please update your phoneNumber!",
                },
              ]}
            >
              <Input placeholder={userInfo.phoneNumber} />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              className="updated-address"
              rules={[
                { required: true, message: "Please update your username!" },
              ]}
            >
              <Input placeholder={userInfo.address} />
            </Form.Item>

            <Form.Item
              label="Role"
              name="role"
              className="updated-role"
              rules={[{ required: true, message: "Please update your role!" }]}
            >
              <Input placeholder={userInfo.role} />
            </Form.Item>
          </Form>
          <Button type="primary" onClick={() => submit()} htmlType="submit">
            Update
          </Button>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.dealerProfile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsersupdated: () => dispatch(fetchUsersupdated()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile);
