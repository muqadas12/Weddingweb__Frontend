import React, { useState } from "react";
import bookingSaloon from "../../Assets/images/bookingSaloon.jpg";
import { Card, DatePicker, Form, Input, Select, Button, Row, Col } from "antd";
import "./Bookingsaloon.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchbookSaloonServices } from "../../ReduxApi/saloonBooking/SaloonBooking.action";
const { Option } = Select;

function Bookingsaloon(props) {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    functionDate: "",
    functionType: "",
    makeupType: "",
  });
  function  addBookingSaloon(payload) {
     dispatch(fetchbookSaloonServices(payload))
   
  }
  function formSubmit(e) {  
    const payload = {
      functionDate : e.functionDate,
      functionTime:e.functionTime,
      makeupType:e.makeuptype
    }
    console.log('helo', e, e.functionDate._d,payload);
    addBookingSaloon(payload);
    //this should be addBookingSaloon or postBookingSalon
  }
  
  return (
    <div>
      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 9 }}>
          <img
            className="booking-saloon-img"
            src={bookingSaloon}
            alt="saloon"
          />
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ span: 15, offset: 6 }}
          md={{ span: 10, offset: 6 }}
          lg={{ span: 6, offset: 9 }}
        >
          <Card className="saloon-booking">
            <p className="saloon-booking-main-heading">Booking</p>
            <Form
            name= 'basic'
             onFinish={(e) =>formSubmit(e)}
             >
            

              <Form.Item
                className="date-picker-booking-Saloon"
                name="functionDate"
                label="Function Date"
              >
                <DatePicker className="ant-input"/>
              </Form.Item>
             

              <Form.Item
                label="Function Time"
                name="functionTime"
                className="date-picker-booking-Saloon"

                
                
                rules={[
                  {
                    required: true,
                    message: "Please select Function Time!",
                  },
                ]}
              >
                <Select
                 style={{marginTop:'-20px',marginLeft:'-3px'}}
                  name="functionTime"
                  placeholder="select your Function Time"
                  className="function-time"
                 
                  
                >
                  <Option value="lunch">Lunch</Option>
                  <Option value="dinner">Dinner</Option>
                </Select>
              </Form.Item>

              {/* <label className="label-makeup-type-saloon">Makeup type</label> */}
              <Form.Item
                className="date-picker-booking-Saloon"
               

                label="Makeup type"
                name="makeuptype"
                rules={[
                  {
                    required: true,
                    message: "Please select makeup type!",
                  },
                ]}
              >
                <Select
                   style={{marginTop:'-20px'}}
                 
                  placeholder="select your  makeup type"
                  className="function-time"
                >
                  <Option value="smokymakeup">Smoky Makeup</Option>
                  <Option value="Shimmer Makeup">Shimmer Makeup</Option>
                </Select>
              </Form.Item>
              <Button htmlType="submit" className="book-now-saloon">
                Book Now
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Bookingsaloon;
