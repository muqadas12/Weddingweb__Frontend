import React,{useState} from 'react'
import { Modal} from 'antd'
import { Form, Input,Button } from 'antd';
import hallSearch from "../../../Assets/images/weddingHallsearch.jpg"
import {fetchAddServices}from '../../../ReduxApi/addDealerServices/AddServices.actions'
import { useDispatch} from "react-redux";

import "./AddService.scss"


function AddServices(props) {
  const dispatch = useDispatch();


 
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [patient, setPatient] = useState(null);

    const[serviceName,setService]=useState();
    const[dealerservice,setDealer]=useState();
    const[description,setDescription]=useState();
    const[price,setPrice]=useState();
    const[Img,setImg]=useState();


    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

    const send=(props)=>{
        
        const fileArray=[];
        fileArray.push(Img);
        const formData=new FormData();
        fileArray.map((file)=>formData.append('image',file));
        formData.append('serviceName',serviceName);
        formData.append('dealerservice',dealerservice);
        formData.append('description',description);
        formData.append('price',price)
        formData.append('email', localStorage.getItem('email'))
    
       dispatch(fetchAddServices(formData))
         
    }
   
    return (
        <div>
            <img src={hallSearch} alt="weddinghall"/>
            <br/>
            <p className="services-heading">Please Add Your Services here</p>
            <hr className="hr-line"/>
            <br/>

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
        <Input style={{marginLeft:'10px'}} className="service-name" onChange={event=>{
                  const {value}=event.target;
                  setService(value)
              }}/>
      </Form.Item>


      <Form.Item label="Select service"  name="dealerservice" id="dealerservice">
    <select style={{width:'350px'}} className="ant-input" onChange={event=>{
                  const {value}=event.target;
                  setDealer(value)}}
                  name="dealerservice" id="dealerservice">
      <option name="select service">select service</option>
      <option name="Car rental">Car rental</option>
      <option name="Saloon">Saloon</option>
      <option name="Catering">Catering</option>
      <option name="Photography">Photography</option>

      </select>
      </Form.Item>

            
        
              <Form.Item name=''   label="Description">
        <Input.TextArea className="service-name" style={{marginLeft:'10px'}} onChange={event=>{
    const {value}=event.target;
    setDescription(value)
}} />
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
        <Input style={{marginLeft:'10px'}} className="service-name"  onChange={event=>{
                  const {value}=event.target;
                  setPrice(value)
              }}/>
      </Form.Item>

      




<Form.Item
        label="Upload Service Img"
        name="Image"
        rules={[
          {
            required: true,
            message: 'Please upload Image for your service',
          },
        ]}
      >
<input type="file" name="image" onChange={event=>{
    const Img=event.target.files[0];
    setImg(Img);
}}/>
</Form.Item>

 <img style={{width:'100px',marginLeft:'510px'}} src={Img? URL.createObjectURL(Img) : null} alt={Img? Img.name : null}/>
<br/>
<Button style={{marginTop:'30px',marginLeft:'510px'}} type="primary" htmlType='submit'  >Submit</Button>

<Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
       <p>Your service has added successfully!</p>
      </Modal>
          </Form>
        </div>
    )
}

export default  AddServices;
