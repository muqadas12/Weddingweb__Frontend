/* eslint-disable no-lone-blocks */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
import React, { useState, useReducer } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Button, Checkbox, Card, message } from 'antd';
import { FetchSignInUser } from '../../ReduxApi/signIn/SignIn.action';

import CardForm from '../../components/Card-Forms';
import Loginimg from '../../Assets/images/cardlogin.jpg';

const initialstate = {
  cat: ' ',
};

const categoryReducers = (state = initialstate, action) => {
  switch (action.type) {
    case 'CATEGORY':
      return {
        ...state,
        cat: action.payload,
      };

    default:
      return state;
  }
};
function SignIn() {
  const [categoryState, dispatch] = useReducer(categoryReducers, initialstate);
  const history = useHistory();
  const url = 'https://wedding-web-app.herokuapp.com/api/users/login';
  // const categoryType = useSelector((state) => state.countReducers.cat);
  const categoryType = categoryState.cat;

  console.log(categoryType, ' catType from signin');
  const dispatchs = useDispatch();
  const [data, setData] = useState({
    email: '',
    password: '',
    role: '',
    token: '',
    _id: '',

    login: false,
  });
  function addSignIn(payload) {
    dispatchs(FetchSignInUser(payload));
  }

  function submiHandler(e) {
    const payload = {
      email: e.email,
      password: e.password,
      role: e.role,
    };
    {
      categoryType === 'booked-hall'
        ? history.push('/booking')
        : categoryType === 'booked-photographer'
        ? history.push('/booking-photographer')
        : categoryType === 'booked-car'
        ? history.push('/car-booking')
        : categoryType === 'booked-saloon'
        ? history.push('/booking-saloon')
        : categoryType === 'booked-catering'
        ? history.push('/book-catering')
        : null;
    }
    addSignIn(payload);
  }
  function handleChange(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  return (
    <div>
      <CardForm img={Loginimg} alt="alt" />
      <Card
        className="cover-card"
        style={{
          width: '400px',
          height: '500px',
          marginLeft: '740px',
          marginTop: '-500px',
        }}
      >
        <h1>Login Form</h1>

        <Form
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={submiHandler}
          autoComplete="off"
        >
          <Form.Item
            style={{ marginTop: '70px' }}
            label="Email"
            name="email"
            id="email"
            onChange={(e) => handleChange(e)}
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="password"
            id="password"
            name="password"
            onChange={(e) => handleChange(e)}
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Login
            </Button>
            <div style={{ marginTop: '30px' }} />
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default SignIn;
