import React, { useState } from "react";
import { Card, Form, Input, Modal } from "antd";
import { UserOutlined, MailOutlined, MessageOutlined } from "@ant-design/icons";
import "./Contactus.scss";
import axios from "axios";
import contactUs from "../../Assets/images/contactUs.jpg";

function Contactus() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setname] = useState(" ");
  const [email, setemail] = useState(" ");
  const [msg, setmsg] = useState(" ");
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleClick = (e) => {
    e.preventDefault();

    if (e.target.id === name) {
      setname(e.target.value);
    }
    if (e.target.id === email) {
      setemail(e.target.value);
    } else {
      setmsg(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    const dataSubmit = {
      name: e.name,
      email: e.email,
      msg: e.message,
    };

    axios.post("http://localhost:2000/api/email/mail", dataSubmit);
  };
  // const { mutate, isLoading, isError } = useMutation(postData, {
  //   onSuccess: (successData) => {
  //     console.log(successData)
  //   },
  // })

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
          <label className="label-form">
            <UserOutlined className="icons" />
            Enter Name
          </label>
          <Form.Item name="name">
            <Input
              name="name"
              value={name}
              className="inputs-form"
              onChange={() => handleClick}
            />
          </Form.Item>
          <label className="label-form">
            <MailOutlined className="icons" />
            Enter Email
          </label>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
              },
            ]}
          >
            <Input
              name="email"
              value={email}
              onChange={() => handleClick}
              className="inputs-form"
            />
          </Form.Item>
          <label className="label-form">
            <MessageOutlined className="icons" />
            Enter Message
          </label>
          <Form.Item name="message">
            <Input.TextArea
              name="msg"
              value={msg}
              onChange={() => handleClick}
              className="inputs-form"
            />
          </Form.Item>
          <button onClick={() => showModal()} className="btn-submit-contact-us">
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
