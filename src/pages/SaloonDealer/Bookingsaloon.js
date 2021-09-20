import React,{useState} from 'react'
import bookingSaloon from '../../Assets/images/bookingSaloon.jpg'
import { Card,DatePicker,Form, Input, Select, Button,Row,Col} from 'antd';
import './Bookingsaloon.scss'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {fetchbookSaloonServices} from '../../ReduxApi/saloonBooking/SaloonBooking.action'
const { Option } = Select;

function Bookingsaloon() {
  const dispatch=useDispatch();
  const url='http://localhost:2000/api/saloonBooking/saloon';

  const [data,setData]=useState({
    functionDate:'',
    functionType:'',
    makeupType:''
  })
  function handleSubmit(){
    dispatch(fetchbookSaloonServices(data))
    // axios.post(url,{
    //   functionDate:data.functionDate,
    //   functionType:data.functionType,
    //   makeupType:data.makeupType

    // }).then(res=>{
    //   console.log(res);
    // })
    // .catch(err=>{
    //   console.log(err)
    // })

  }
  function handleChange(e){
    const newData={...data};
    newData[e.target.id]=e.target.value;
    setData(newData);
    console.log(newData)
  }
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
                <Form onFinish={handleSubmit}>
               
               <label className="label-date-picker-saloon">Function Date</label>
             
         <Form.Item className="date-picker-booking-food"  name="functionDate" id="functionDate"
         onChange={(e)=>handleChange(e)}
         
         >
         <DatePicker />
          </Form.Item>
          <label className="label-function-time-saloon">Function Time</label>
          <Form.Item
        name="functionTime"
        id="functionTime"
        onChange={(e)=>handleChange(e)}
       
        rules={[
          {
            required: true,
            message: 'Please select Function Time!',
          },
        ]}
      >
        <Select id="functionTime"
        
         placeholder="select your Function Time" className="function-time">
          <Option value="lunch">Lunch</Option>
          <Option value="dinner">Dinner</Option>
        </Select>
      </Form.Item>
      <label className="label-makeup-type-saloon">Makeup type</label>
          <Form.Item
        name="makeuptype"
        id="makeuptype"
        onChange={(e)=>handleChange(e)}
       
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
      <Button htmlType="submit" className="book-now-saloon">Book Now</Button>
      </Form>

            </Card>
            </Col>
        </Row>

           
        </div>
    )
}

export default Bookingsaloon
