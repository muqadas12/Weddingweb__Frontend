/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Form, Input, Button, Checkbox, Card, message } from 'antd';
import CardForm from '../../components/Card-Forms';
import Loginimg from '../../Assets/images/cardlogin.jpg';

function SignIn() {
  const history = useHistory();
  const url = 'https://wedding-web-app.herokuapp.com/api/users/login';
  const categoryType = useSelector((state) => state.countReducers.cat);

  console.log(categoryType, ' catType from signin');

  const [data, setData] = useState({
    email: '',
    password: '',
    role: '',
    token: '',
    _id: '',

    login: false,
  });

  function submiHandler() {
    axios
      .post(url, {
        email: data.email,
        password: data.password,
        role: data.role,
        token: data.token,
        _id: data._id,
      })

      .then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('email', res.data.email);
        localStorage.setItem('id', res.data.userId);
        console.log(res);
        message.success(`You are signIn as ${data.email}`);

        // eslint-disable-next-line no-lone-blocks
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
            : res.data.role === 'Dealer'
            ? history.push('/dealer-main')
            : history.push('/customer-main');
        }
        console.log(res.data.role);
        console.log(res.data.token);
      })

      .catch(() => {
        message.error('User doesnot exist!Please signUp');
      });
  }
  function handleChange(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  // console.log(booked, 'from catering booked');
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
