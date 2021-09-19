import React from 'react'
import bookingSaloon from '../../Assets/images/bookingSaloon.jpg'
import { Card,DatePicker,Form, Input, Select, Button,Row,Col} from 'antd';
import './Bookingsaloon.scss'
const { Option } = Select;

function Bookingsaloon() {
    return (
        <div>
        <Row>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 9 }}>
            <img className="booking-saloon-img" src={bookingSaloon}  alt="saloon"/>
            
            </Col>
           
        </Row>
        <Row>
            <Col xs={{ span: 15, offset: 6 }} md={{span: 10, offset: 6 }} lg={{ span: 6, offset: 9 }}>
            <Card className="saloon-booking">
                <p className="saloon-booking-main-heading">Booking</p>
                <Form>
               
               <label className="label-date-picker-saloon">Function Date</label>
             
         <Form.Item className="date-picker-booking-food" >
         <DatePicker className="ant-input" />
          </Form.Item>
          <label className="label-function-time-saloon">Function Time</label>
          <Form.Item
        name="Function Time"
       
        rules={[
          {
            required: true,
            message: 'Please select Function Time!',
          },
        ]}
      >
        <Select placeholder="select your Function Time" className="function-time">
          <Option value="lunch">Lunch</Option>
          <Option value="dinner">Dinner</Option>
        </Select>
      </Form.Item>
      <label className="label-makeup-type-saloon">Makeup type</label>
          <Form.Item
        name="Makeup type"
       
        rules={[
          {
            required: true,
            message: 'Please select makeup type!',
          },
        ]}
      >
        <Select placeholder="select your  makeup type" className="function-time">
          <Option value="smokymakeup">Smoky Makeup</Option>
          <Option value="Shimmer Makeup">Shimmer Makeup</Option>
        </Select>
      </Form.Item>
      <Button className="book-now-saloon">Book Now</Button>
      </Form>

            </Card>
            </Col>
        </Row>

           
        </div>
    )
}

export default Bookingsaloon
