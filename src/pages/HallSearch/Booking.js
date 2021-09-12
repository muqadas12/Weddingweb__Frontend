import React from 'react'
import "./Booking.scss"
import { Card,DatePicker,Form, Input, Select, Button} from 'antd';
import bookingHall from "../../Assets/images/BookingHall.jpg"

const { Option } = Select;


function Booking() {
    return (
        <div>
            <img src={bookingHall} alt="bookingHall"/>
            <Card className="card-booking">
                <h1 className="h1-booking">Booking</h1>
                <Form>
               <label className="label-date-picker">Function Date</label>
         <Form.Item className="date-picker-booking" >
         <DatePicker style={{width:'490px'}} />
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
      <label className="label-date-picker">Function Type</label>
          <Form.Item
        name="Function Type"
       
        rules={[
          {
            required: true,
            message: 'Please select Function Type!',
          },
        ]}
      >
        <Select placeholder="select your Function Type" className="function-time">

          <Option value="engagment">Engagment</Option>
          <Option value="nikah">Nikah</Option>
          <Option value="mehndi">Mehndi</Option>
          <Option value="barat">Barat</Option>
          <Option value="walima">Walima</Option>


        </Select>
      </Form.Item>
      <Form.Item>
      <label className="label-date-picker">Number of people</label>
          <Input style={{marginTop:'20px'}}/>
      </Form.Item>
<Button className="book-now-buuton">Book Now</Button>
        
          </Form>

            </Card>
        </div>
    )
}

export default Booking
