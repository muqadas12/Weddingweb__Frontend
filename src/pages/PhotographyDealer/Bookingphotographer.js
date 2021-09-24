import React, { useState } from 'react';
import { Card, Form, Select, Button, Row, Col } from 'antd';
import { useDispatch } from 'react-redux';
import photographyimg from '../../Assets/images/photo.jpg';
// eslint-disable-next-line max-len
import { fetchPhoto } from '../../ReduxApi/PhotographerBooking/PhotoBooking.action';
import './Bookingphotography.scss';
// eslint-disable-next-line no-unused-vars
const { Option } = Select;

function Bookingphotographer() {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    functionDate: '',
    functionTime: '',
    photographyType: '',
  });
  function handleSubmit() {
    dispatch(fetchPhoto(data));
  }

  function handleChange(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  return (
    <div>
      <img
        className="photography-main-image-booking"
        src={photographyimg}
        alt="phot"
      />
      <Row>
        <Col
          xs={{ span: 14, offset: 8 }}
          md={{ span: 19, offset: 10 }}
          lg={{ span: 8, offset: 8 }}
          s
        >
          <Card className="card-photography">
            <h1 className="book-photographer">Book Now</h1>
            <Form onFinish={handleSubmit}>
              <Form.Item
                className="date-picker-booking-food"
                id="functionDate"
                name="functionDate"
                label="function date"
                onChange={(e) => handleChange(e)}
              >
                <input type="date" className="ant-input" />
              </Form.Item>
              <Form.Item
                name="functionTime"
                id="functionTime"
                label="Function Time"
                rules={[
                  {
                    required: true,
                    message: 'Please select Function Time!',
                  },
                ]}
              >
                <select
                  className="ant-input"
                  placeholder="select your Function Time"
                  name="functionTime"
                  id="functionTime"
                  onChange={(e) => handleChange(e)}
                >
                  <option value="select an option">select an option</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                </select>
              </Form.Item>
              Photography type
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: 'Please select Photography type!',
                  },
                ]}
              >
                <select
                  className="ant-input"
                  name="photographyType"
                  id="photographyType"
                  onChange={(e) => handleChange(e)}
                >
                  <option name="Select Option">Select an Option</option>
                  <option name="Artist Photography">Artist Photography</option>
                  <option name="Modern Photography">Modern Photography</option>
                </select>
              </Form.Item>
              <Button htmlType="submit" className="book-now-photo">
                Book Now
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Bookingphotographer;
