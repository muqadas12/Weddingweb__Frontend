import React from "react";
import { Card, DatePicker, Form, Input, Select, Button, Row, Col } from "antd";
import "./BookingCard.scss";
const { Option } = Select;

function Bookfood(props) {
  return (
    <div>
      <img
        className="book-catering-image"
        src={props.img}
        alt="cateringbooking"
      />
      <Row>
        <Col xs={{ span: 15, offset: 8 }} lg={{ span: 9, offset: 8 }}>
          <Card className="card-booking-food-catering">
            <h1 className="h1-food-booking">{props.mainheading}</h1>
            <Form>
              <label className="label-date-picker">{props.funDate}</label>
              <Form.Item className="date-picker-booking-food">
                <DatePicker className="ant-input" />
              </Form.Item>
              <label className="label-date-picker">{props.funTime}</label>
              <Form.Item
                name="Function Time"
                rules={[
                  {
                    required: true,
                    message: "Please select Function Time!",
                  },
                ]}
              >
                <Select
                  placeholder="select your Function Time"
                  className="function-time"
                >
                  <Option value="lunch">Lunch</Option>
                  <Option value="dinner">Dinner</Option>
                </Select>
              </Form.Item>
              <label className="label-date-picker">{props.funType}</label>
              <Form.Item
                name="Function Type"
                rules={[
                  {
                    required: true,
                    message: "Please select Function Type!",
                  },
                ]}
              >
                <Select
                  placeholder="select your Function Type"
                  className="function-time"
                >
                  <Option value="engagment">Engagment</Option>
                  <Option value="nikah">Nikah</Option>
                  <Option value="mehndi">Mehndi</Option>
                  <Option value="barat">Barat</Option>
                  <Option value="walima">Walima</Option>
                </Select>
              </Form.Item>

              <label className="label-date-picker">{props.foodType}</label>
              <Form.Item
                name="Food Type"
                rules={[
                  {
                    required: true,
                    message: "Please select Food Type!",
                  },
                ]}
              >
                <Select
                  placeholder="select your Food Type"
                  className="function-time"
                >
                  <Option value="chicken">Chicken</Option>
                  <Option value="sweets">Sweets</Option>
                  <Option value="drinks">Drinks</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <label className="label-date-picker">{props.people}</label>
                <Input style={{ marginTop: "20px" }} />
              </Form.Item>
              <Button className="book-now-button-food">{props.btn}</Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Bookfood;
