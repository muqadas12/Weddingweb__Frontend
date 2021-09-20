import React,{useState} from 'react'
import { Card,DatePicker,Form, Input, Select, Button,Row,Col} from 'antd';
import axios from "axios";
import './Bookfood.scss'
import cateringBooking from '../../Assets/images/cateringBooking.png';
const { Option } = Select;

function Bookfood() {
  const[data,setData]=useState({
    functionDate:"",
    functionTime:"",
    functionType:"",
    numOfPeople:"",
    foodType:""

  })
  function handleSubmit(){

  }



    return (
        <div>
            <img className="book-catering-image"  src={cateringBooking} alt='cateringbooking'/>
            <Row  >
      <Col xs={{ span: 15, offset: 8 }} lg={{ span: 9, offset: 8 }}>
            <Card className="card-booking-food-catering">
                <h1 className="h1-food-booking">Book Your Food here!</h1>
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

      <label className="label-date-picker">Food Type</label>
          <Form.Item
        name="Food Type"
       
        rules={[
          {
            required: true,
            message: 'Please select Food Type!',
          },
        ]}
      >
        <Select placeholder="select your Food Type" className="function-time">

          <Option value="chicken">Chicken</Option>
          <Option value="sweets">Sweets</Option>
          <Option value="drinks">Drinks</Option>
        


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

export default Bookfood


