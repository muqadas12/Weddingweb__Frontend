/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import hallSearch from '../../../Assets/images/weddingHallsearch.jpg';
// eslint-disable-next-line max-len
import { fetchAddServices } from '../../../ReduxApi/addDealerServices/AddServices.actions';
import './AddService.scss';

function AddHall() {
  const dispatch = useDispatch();
  const [serviceName, setService] = useState();
  const [dealerservice, setDealer] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [Img, setImg] = useState();
  const [hallType, sethallType] = useState();
  const [city, setcity] = useState();
  const [maxCapacity, setmaxCapacity] = useState();
  const [minCapacity, setminCapacity] = useState();
  const [services, setservices] = useState();

  const send = () => {
    const fileArray = [];
    fileArray.push(Img);
    const formData = new FormData();
    fileArray.map((file) => formData.append('image', file));
    formData.append('serviceName', serviceName);
    formData.append('dealerservice', dealerservice);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('hallType', hallType);
    formData.append('city', city);
    formData.append('maxCapacity', maxCapacity);
    formData.append('minCapacity', minCapacity);
    formData.append('services', services);

    formData.append('email', localStorage.getItem('email'));
    dispatch(fetchAddServices(formData));
  };
  return (
    <div>
      <img src={hallSearch} alt="weddinghall" />
      <br />
      <p className="services-heading">Please Add Your Hall Services here</p>
      <hr className="hr-line" />
      <br />

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={send}
        autoComplete="off"
      >
        <Form.Item
          label="Servicename"
          name="serviceName"
          rules={[
            {
              required: true,
              message: 'Please input your servicename!',
            },
          ]}
        >
          <Input
            style={{ marginLeft: '10px' }}
            className="service-name"
            onChange={(event) => {
              const { value } = event.target;
              setService(value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Select service"
          name="dealerservice"
          id="dealerservice"
        >
          <select
            style={{ width: '350px' }}
            className="ant-input"
            onChange={(event) => {
              const { value } = event.target;
              setDealer(value);
            }}
            name="dealerservice"
            id="dealerservice"
          >
            <option name="Hall">Hall</option>
            <option name="wedHall">weddingHall</option>
          </select>
        </Form.Item>
        <Form.Item label="Select hall" name="hallType" id="hallType">
          <select
            style={{ width: '350px' }}
            className="ant-input"
            onChange={(event) => {
              const { value } = event.target;
              sethallType(value);
            }}
            name="hallType"
            id="hallType"
          >
            <option name="Selectsite">Select VenueType</option>

            <option name="Beachside">Beachside</option>
            <option name="Lounge">Lounge</option>
            <option name="Garden">Garden</option>
          </select>
        </Form.Item>
        <Form.Item label="Select city" name="city" id="city">
          <select
            style={{ width: '350px' }}
            className="ant-input"
            onChange={(event) => {
              const { value } = event.target;
              setcity(value);
            }}
            name="city"
            id="city"
          >
            <option name="SelectCity">Select City</option>
            <option name="Islamabad">Islamabad</option>
            <option name="Rawalpindi">Rawalpindi</option>
          </select>
        </Form.Item>
        <Form.Item
          label="Select MaxCapacity"
          name="maxCapacity"
          id="maxCapacity"
        >
          <select
            style={{ width: '350px' }}
            className="ant-input"
            onChange={(event) => {
              const { value } = event.target;
              setmaxCapacity(value);
            }}
            name="maxCapacity"
            id="maxCapacity"
          >
            <option name="SelectmaxCapacity">Select Maximum Capacity</option>
            <option name="400">400</option>
            <option name="200">600</option>
            <option name="100">500</option>
          </select>
        </Form.Item>
        <Form.Item
          label="Select MinCapacity"
          name="minCapacity"
          id="minCapacity"
        >
          <select
            style={{ width: '350px' }}
            className="ant-input"
            onChange={(event) => {
              const { value } = event.target;
              setminCapacity(value);
            }}
            name="minCapacity"
            id="minCapacity"
          >
            <option name="SelectminCapacity">Select Minimum Capacity</option>
            <option name="200">200</option>
            <option name="100">100</option>
            <option name="160">160</option>
          </select>
        </Form.Item>

        <Form.Item name="description" label="Description">
          <Input.TextArea
            className="service-name"
            style={{ marginLeft: '10px' }}
            onChange={(event) => {
              const { value } = event.target;
              setDescription(value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: 'Please input your price',
            },
          ]}
        >
          <Input
            style={{ marginLeft: '10px' }}
            className="service-name"
            onChange={(event) => {
              const { value } = event.target;
              setPrice(value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="services"
          name="services"
          rules={[
            {
              required: true,
              message: 'Please input your services',
            },
          ]}
        >
          <Input
            style={{ marginLeft: '10px' }}
            className="service-name"
            onChange={(event) => {
              const { value } = event.target;
              setservices(value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Upload Hall Img"
          name="Image"
          rules={[
            {
              required: true,
              message: 'Please upload Image for your service',
            },
          ]}
        >
          <input
            type="file"
            name="image"
            onChange={(event) => {
              const Img = event.target.files[0];
              setImg(Img);
            }}
          />
        </Form.Item>

        <img
          style={{ width: '100px', marginLeft: '510px' }}
          src={Img ? URL.createObjectURL(Img) : null}
          alt={Img ? Img.name : null}
        />
        <br />
        <Button
          style={{ marginTop: '30px', marginLeft: '510px' }}
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddHall;
