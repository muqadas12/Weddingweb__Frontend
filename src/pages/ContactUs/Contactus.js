import React, { useState } from 'react';
import { Card, Form, Input, Modal } from 'antd';
import { UserOutlined, MailOutlined, MessageOutlined } from '@ant-design/icons';
import axios from 'axios';
import useFields from '../../components/Hooks/useFields';
import './Contactus.scss';
import contactUs from '../../Assets/images/contactUs.jpg';

function Contactus() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fields, handleFieldChange] = useFields({
    name: '',
    email: '',
    msg: '',
  });
  // const [name, setname] = useState(' ');
  // const [email, setemail] = useState(' ');
  // const [msg, setmsg] = useState(' ');
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // const handleClick = (e) => {
  //   e.preventDefault();

  //   if (e.target.id === name) {
  //     setname(e.target.value);
  //   }
  //   if (e.target.id === email) {
  //     setemail(e.target.value);
  //   } else {
  //     setmsg(e.target.value);
  //   }
  // };

  const handleSubmit = (e) => {
    const dataSubmit = {
      name: e.name,
      email: e.email,
      msg: e.message,
    };

    axios.post('http://localhost:2000/api/email/mail', dataSubmit);
  };

  return (
    <div>
      <img src={contactUs} alt="contactUs" className="contactus-img" />
      <p className="contact-query">
        How can i help?
        <br /> PLease fill the form for any query.
        <br />
        Will be respond shortly
      </p>
      <Card className="contact-card">
        <Form onFinish={handleSubmit} id="contact-form">
          <UserOutlined className="icons" />
          Enter Name
          <Form.Item name="name">
            <Input
              name="name"
              value={fields.name}
              className="inputs-form"
              onChange={() => handleFieldChange}
            />
          </Form.Item>
          <MailOutlined className="icons" />
          Enter Email
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
              },
            ]}
          >
            <Input
              name="email"
              value={fields.email}
              onChange={() => handleFieldChange}
              className="inputs-form"
            />
          </Form.Item>
          <MessageOutlined className="icons" />
          Enter Message
          <Form.Item name="message">
            <Input.TextArea
              name="msg"
              value={fields.msg}
              onChange={() => handleFieldChange}
              className="inputs-form"
            />
          </Form.Item>
          <button
            type="submit"
            onClick={() => showModal()}
            className="btn-submit-contact-us"
          >
            Send
          </button>
          <Modal
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Your email have been sent!</p>
          </Modal>
        </Form>
      </Card>
    </div>
  );
}

export default Contactus;
