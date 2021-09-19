import React from 'react'
import carBooking from '../../Assets/images/carBooking.jpg'
import { Card,DatePicker,Form, Input, Select, Button,Row,Col} from 'antd';

import './Carbooking.scss'
const { Option } = Select;

function Carbooking() {
    return (
        <div>
        <Row>
            <Col xs={{ span: 17, offset: 4 }} lg={{ span: 2, offset: 8 }}>
            <img className="car-booking-main-image" src={carBooking} alt="car"/>
            </Col>
        </Row>
        <Row>
                <Col xs={{ span: 12, offset: 8 }} lg={{ span: 9, offset: 7 }}>
            <Card className="car-booking-card">
                
                <h1  className="booking-h1-main-heading">Book Your Car </h1>
               
                <Form>
               <label className="label-date-picker">Function Date</label>
         <Form.Item className="date-picker-booking-food" >
         <DatePicker className="ant-input" />
          </Form.Item>
          <label className="label-date-picker">Function Time</label>
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
          

        
      <Form.Item>
      <label className="label-date-picker">Number of people</label>
          <Input style={{marginTop:'20px'}}/>
      </Form.Item>
<Button className="book-now-button-food">Book Now</Button>
        
          </Form>

            </Card>
            </Col>
        </Row>
            
        </div>
    )
}

export default Carbooking
