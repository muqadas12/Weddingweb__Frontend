/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { Card, Form, Input, Modal, Button } from 'antd';
import { UserOutlined, MailOutlined, MessageOutlined } from '@ant-design/icons';
import axios from 'axios';
import useFields from '../../components/Hooks/useFields';
import './Contactus.scss';
import contactUs from '../../Assets/images/contactUs.jpg';
import TextInput from './TextInput';
/**
 * successfully send email to the admin
 * @property   {string} name  name of user who is going to send email
 * @property   {string} email Email of user who is going to send email
 * @property   {string} message  Message why this user is sending this email
 * @return  {string} send email to admin
 */

/**
* handleSubmit is function which can post data (send email)
* @param {string} e is value of input
* @property   {string} name  name of user who is going to send email
* @property   {string} email Email of user who is going to send email
* @property   {string} message  Message why this user is sending this email
*


 */

function Contactus() {
  // const nameRef = useRef(null);
  const ref = useRef(null);
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fields, handleFieldChange] = useFields({
    name: '',
    email: '',
    msg: '',
  });

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = (e) => {
    const dataSubmit = {
      name: e.name,
      email: e.email,
      msg: e.message,
    };
    axios.post(
      'https://wedding-web-app.herokuapp.com/api/email/mail',
      dataSubmit
    );
    form.resetFields();
  };

  React.useLayoutEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <div>
      <img src={contactUs} alt="contactUs" className="contactus-img" />
      <p className="contact-query" data-testid="contact-para">
        How can i help?
        <br /> PLease fill the form for any query.
        <br />
        Will be respond shortly
      </p>
      <Card className="contact-card">
        <Form onFinish={handleSubmit} id="contact-form" form={form}>
          <UserOutlined className="icons" />
          Enter Name
          <Form.Item name="name">
            <TextInput
              ref={ref}
              name="name"
              id="name"
              value={fields.name}
              className="inputs-form"
              onChange={() => handleFieldChange}
            />
            {/* <Input
              name="name"
              id="name"
              value={fields.name}
              className="inputs-form"
              onChange={() => handleFieldChange}
            /> */}
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
          <Button
            htmlType="submit"
            onClick={() => {
              // ref?.current?.focus();
              // showModal();
            }}
            className="btn-submit-contact-us"
          >
            Send
          </Button>
          {/* <ImperativeChildExample ref={ref} />
          <button type="button" onClick={() => ref?.current?.focus()}>
            Focus!
          </button> */}
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
