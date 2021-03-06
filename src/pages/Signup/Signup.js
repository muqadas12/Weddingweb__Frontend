/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, Checkbox, Card, message } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import './Signup.scss';
import CardForm from '../../components/Card-Forms';
import cardImgOne from '../../Assets/images/cardImgone.jpg';

function Signup() {
  const history = useHistory();

  const url = 'https://wedding-web-app.herokuapp.com/api/users/signup';
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    token: '',
    phoneNumber: '',
    address: '',
    _id: '',
  });

  function submit() {
    // dispatch(signupUser(name,email,password,role))
    axios
      .post(url, {
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
        token: data.token,
        phoneNumber: data.phoneNumber,
        address: data.address,
        _id: data._id,
      })
      .then((res) => {
        // alert(`You are signUp as ${data.name}`);
        message.success(`You are signUp as ${data.name}`);
        window.location = 'https://wedding-web-app.herokuapp.com/sign-in';

        console.log(res);
      })
      .catch(() => {
        message.error('User alreay exist!.PLease signIn');
      });
  }
  console.log(localStorage.getItem('_id'));
  function handleChange(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  const autosigninHandler = () => {
    axios
      .post('https://wedding-web-app.herokuapp.com/api/users/autoSignIn', {
        email: localStorage.getItem('email'),
      })
      .then((res) => {
        {
          // eslint-disable-next-line no-unused-expressions
          res.data.role === 'Dealer'
            ? history.push('/dealer-main')
            : history.push('/customer-main');
        }

        console.log(res, 'from auto sign in response');
      })
      .catch(() => {
        alert('User alreay exist!.PLease signIn');
      });

    //  history.push("/sign-in")
  };

  <br />;
  return (
    <div>
      <CardForm img={cardImgOne} alt="alt" />
      <Card
        className="cover-card"
        style={{
          width: '400px',
          height: '500px',
          marginLeft: '740px',
          marginTop: '-500px',
        }}
      >
        <h1 className="sign-up"> Sign up </h1>
        <br />
        <br />
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
          onFinish={submit}
          autoComplete="off"
        >
          <Form.Item
            style={{ marginTop: '-30px' }}
            label="Username"
            name="name"
            id="name"
            onChange={(e) => handleChange(e)}
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="email"
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
            <Input type="email" />
          </Form.Item>

          <Form.Item
            label="phoneNumber"
            id="phoneNumber"
            name="phoneNumber"
            onChange={(e) => handleChange(e)}
            rules={[
              {
                required: true,
                message: 'Please input your phoneNumber!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="address"
            id="address"
            name="address"
            onChange={(e) => handleChange(e)}
            rules={[
              {
                required: true,
                message: 'Please input your address!',
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
          <Form.Item label="role" name="role" id="role">
            <select
              className="ant-input"
              onChange={(e) => handleChange(e)}
              name="role"
              id="role"
            >
              <option name="Select Option">Select an Option</option>
              <option name="customer">customer</option>
              <option name="Dealer">Dealer</option>
            </select>
          </Form.Item>

          <Form.Item
            style={{ marginLeft: '-290px' }}
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox style={{ marginTop: '-160px', marginLeft: '-40px' }}>
              Remember me
            </Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <div className="btn-signup">
              <Button type="primary" htmlType="submit">
                SignUp
              </Button>
            </div>

            <p>Or</p>
            <div style={{ marginTop: '-10px' }} />
            <br />
            <div className="already-reg">
              <span>Already Register? Click here to#</span>
            </div>
            <div className="signin-link-with-signup">
              <Link to="/sign-in" onClick={autosigninHandler}>
                Sign In
              </Link>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Signup;
