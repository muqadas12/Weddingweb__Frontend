import React,{useState} from 'react'
import photographyimg from '../../Assets/images/photo.jpg'
import { Card,Form, Input, Select, Button,Row,Col} from 'antd';
import axios from 'axios';
import { useDispatch} from "react-redux";
import{fetchbookPhotographerServices} from '../../ReduxApi/PhotographerBooking/PhotoBooking.action'
import './Bookingphotography.scss'
const { Option } = Select;


function Bookingphotographer() {
  const dispatch = useDispatch();

 // const url='http://localhost:2000/api/bookingPhoto/booking'
  const[data,setData]=useState({
    functionDate:'',
    functionTime:'',
    photographyType:''

  })
function handleSubmit(){
  dispatch(fetchbookPhotographerServices(data))
  // axios.post(url,{
  //   functionDate:data.functionDate,
  //   functionTime:data.functionTime,
  //   photographyType:data.photographyType

  // }).then(res=>{
  //   alert('order done!');
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
            <img className="photography-main-image-booking" src={photographyimg} alt='phot'/>
            <Row>
                <Col xs={{ span: 14, offset: 8 }} md={{ span: 19, offset: 10 }}  lg={{ span: 8, offset: 8 }}s>
                <Card className="card-photography">
                    <h1 className="book-photographer">Book Now</h1>
                    <Form onFinish={handleSubmit}>
               
               <label className="label-date-picker-photo">Function Date</label>
             
         <Form.Item className="date-picker-booking-food" 
         id="functionDate"
         name="functionDate" 
         onChange={(e)=>handleChange(e)}  >
            <input type="date" className="ant-input" />
            {/* <DatePicker className="ant-input"    
/> */}
          </Form.Item>
          <label className="label-date-picker-photo">Function Time</label>
          <Form.Item
           name="functionTime"
           id="functionTime"
       
       
        rules={[
          {
            required: true,
            message: 'Please select Function Time!',
          },
        ]}
      >
        <select className="ant-input" placeholder="select your Function Time" 
        name="functionTime"
        id="functionTime"
        onChange={(e)=>handleChange(e)}
      
        
        >
           <option value="select an option">select an option</option>
          <option value="lunchas">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </Form.Item>
      <label className="label-date-picker-photo">Photography type</label>
          <Form.Item
        
       
        rules={[
          {
            required: true,
            message: 'Please select Photography type!',
          },
        ]}
      >
        <select className="ant-input" name="photographyType"
        id="photographyType"
        onChange={(e)=>handleChange(e)} >
        <option name="Select Option">Select an Option</option>
    <option name="Artist Photography">Artist Photography</option>
      <option name="Modern Photography">Modern Photography</option>


        </select>
     
      </Form.Item>
      {/* <label className="label-date-picker-photo">Photography type</label>
          <Form.Item
        
       
        rules={[
          {
            required: true,
            message: 'Please select Photography type!',
          },
        ]}
      >
        <Select
        id="photographyType"
        onChange={e => handleChange(e)} >
        <Option name="Select Option">Select an Option</Option>
    <Option name="Artist Photography">Artist Photography</Option>
      <Option name="Modern Photography">Modern Photography</Option>


        </Select>
     
      </Form.Item> */}
      <Button htmlType="submit" className="book-now-photo">Book Now</Button>
      </Form>

                </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Bookingphotographer
