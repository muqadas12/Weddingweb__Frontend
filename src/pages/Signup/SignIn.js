/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import CardForm from '../../components/Card-Forms';
import Loginimg from '../../Assets/images/cardlogin.jpg';
import { booked } from '../cateringDealer/CateringDealer';

function SignIn() {
  let booked = 'booked';
  const history = useHistory();
  const url = 'http://localhost:2000/api/users/login';

  const [data, setData] = useState({
    email: '',
    password: '',
    role: '',
    token: '',
    login: false,
  });

  function submiHandler() {
    axios
      .post(url, {
        email: data.email,
        password: data.password,
        role: data.role,
        token: data.token,
      })

      .then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('email', res.data.email);

        alert(`You are signIn as ${data.email}`);

        // window.location="http://localhost:3000/dealer-main"

        //  {booked==="booked-catering"?history.push("/book-catering"):
        //  booked==="foode-catering"?history.push("/food-catering"):

        //       res.data.role === "Dealer"
        //         ? history.push("/dealer-main")
        //         : history.push("/customer-main");

        //  }

        // eslint-disable-next-line no-lone-blocks
        {
          booked === 'booked-catering'
            ? history.push('/book-catering')
            : res.data.role === 'Dealer'
            ? history.push('/dealer-main')
            : history.push('/customer-main');
        }
        console.log(res.data.role);
        console.log(res.data.token);
      })
      .catch(() => {
        alert('User doesnot exist!Please signUp');
      });
  }
  function handleChange(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  console.log(booked, 'from catering booked');
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
