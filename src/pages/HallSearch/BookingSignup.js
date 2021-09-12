import React,{useState} from 'react'
import axios from 'axios';
 import { Form, Input, Button, Checkbox,Select } from 'antd';
import {Link} from "react-router-dom"
import { Card } from 'antd';
import "./Signup.scss"
import CardForm from "../../components/Card-Forms"
import cardImgOne from "../../Assets/images/cardImgone.jpg"
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import { signupUser } from '../../redux/Reducers/authReducers';
import { useDispatch } from 'react-redux';
const { Option } = Select;

function Signup() {
 
  let history = useHistory();
  const dispatch=useDispatch();

  const url='http://localhost:2000/api/users/signup';
  const[data,setData]=useState({
    name:"",
    email:"",
    password:"",
    role:"",
    token:""

  })
  function submit(e){
    // dispatch(signupUser(name,email,password,role))
    axios.post(url,{
      name:data.name,
      email:data.email,
      password:data.password,
      role:data.role,
      token:data.token
      
    }).then(res => {
      alert(`You are signUp as ${data.name}`)
      window.location = "http://localhost:3000/booking-sign-in";

      console.log(res);
    }).catch((err) => {
     alert('User alreay exist!.PLease signIn');
    })

  }
  function handleChange(e){
    const newData={...data};
    newData[e.target.id]=e.target.value;
    setData(newData);
    console.log(newData)
  }
  const responseGoogle = (response) => {
    localStorage.setItem("token",JSON.stringify(response))
     {response.data.role==="Dealer"? history.push("/dealer-main"): history.push("/booking")}

    //  window.location="http://localhost:3000/about"
    console.log(response);
      
    
  
  }



  const autosigninHandler=()=>{  
    axios.post('http://localhost:2000/api/users/autoSignIn',{
    
      email:localStorage.getItem("email")
      
    }).then(res => {
     // alert(`You are signUp as ${data.name}`)
     // window.location = "http://localhost:3000/sign-in";
     {res.data.role==="Dealer"? history.push("/dealer-main"): history.push("/booking")}

      console.log(res,"from auto sign in response");
    }).catch((err) => {
     alert('User alreay exist!.PLease signIn');
    })

    
     //  history.push("/sign-in")
  }
 
   <br/>
  return (
    <div>
      <CardForm img={cardImgOne} alt="alt"/>
    <Card className="cover-card" style={{width:'400px',height:'500px',marginLeft:'740px',marginTop:'-500px'}}>
   
      <h1 className="sign-up"> Sign up </h1>
      <br/>
      <br/>
    <Form
  
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={submit}
   
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="name"
      id="name"
      onChange={(e)=>handleChange(e)}
      rules={[
        {
          required: true,
          message: 'Please input your name!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="email"
      name="email"
      id="email"
      onChange={(e)=>handleChange(e)}
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input type="email" />
    </Form.Item>

    <Form.Item
      label="password"
      id="password"
      name="password"onChange={(e)=>handleChange(e)}
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item label="role"  name="role" id="role">
    <select className="ant-input" onChange={(e)=>handleChange(e)} name="role" id="role">
    <option name="Select Option">Select an Option</option>
    <option name="customer">customer</option>
      <option name="Dealer">Dealer</option>
      </select>
      </Form.Item>

      
     
   
    <Form.Item
    style={{marginLeft:'-290px'}}
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
   
      
    </Form.Item>
    

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        SignUp
      </Button>
     
      <p>Or</p>
      <div style={{marginTop:'-10px'}}>
        <GoogleLogin 
        
    clientId="1059632853515-5f2nns82qfhhrc195rpnen9b6vel8h15.apps.googleusercontent.com"
    buttonText="Login With Google"
    onSuccess={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  </div>
  <br/>
      <span style={{marginLeft:'-90px'}} >  Already Register?Click here to 
      {/* <Link style={{marginLeft:'20px'}} className="login-form-forgot" to="/sign-in">
          SignIn
        </Link> */}
        </span>
        <Link  to="/booking-sign-in"  onClick={autosigninHandler}>signIn</Link>
    </Form.Item>
   
  </Form>
  </Card>
  </div>

  )
}

export default Signup

