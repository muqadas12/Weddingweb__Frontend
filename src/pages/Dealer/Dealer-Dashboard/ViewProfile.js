import React,{useEffect,useState} from 'react'
import axios from 'axios'
import viewprof from '../../../Assets/images/viewProfiledealer.gif'
import {fetchDealers} from '../../../ReduxApi/ViewDealerProfile/Dealer.action'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import './viewProf.scss'
function ViewProfile({userData,fetchDealers}) {
    const [userInfo,setUserInfo] = useState({
        name:"", email:"",phoneNumber:"",address:"",role:"",_id:""})
    useEffect(()=>{
        fetchDealers();

    },[])
    const displayInfo = ()=>{
        console.log( localStorage.getItem("email")," email from display")
           axios.post('http://localhost:2000/api/users/dashboard',{
             email:localStorage.getItem("email"),
           
            
             
         }).then((res)=>{
             setUserInfo({
               name:res.data.existingUser.name,
               email:res.data.existingUser.email,
               phoneNumber:res.data.existingUser.phoneNumber,
               address:res.data.existingUser.address,
               role:res.data.existingUser.role,
               _id:res.data.existingUser._id
           })
    
               console.log(res.data.existingUser,  "res from display")
           })
           .catch((err)=>{
               console.log(err)
           })
    
       }
    
       useEffect(() => {
           displayInfo()
          
       }, [])
    
    

    return userData.loadin ? (
        <h1>Loading..</h1>
    ): userData.error ? (
        <p>{userData.error}</p>
    ):
    
    (
        <div>
           <img className="dealer-profile" src={viewprof} alt="profile"/>
            <div>
       <p className="view-profile-dealer"> Welcome!
        {userInfo.name }</p>
        <div className="user-customer-profile-info">
        Your user name: <p className="info-display">{userInfo.name}</p>
       
        Your email:<p className="info-display">{userInfo.email}</p>
         Your PhoneNo:<p className="info-display">{userInfo.phoneNumber}</p>
         Your Address:<p className="info-display">{userInfo.address}</p>
         You are SignUp with the <p className="info-display">{userInfo.role} role</p>
         <Link to={'/dealer-update-services/'+userInfo._id}>
         <button>Update</button>
         </Link>
         </div>

      </div>
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        userData:state.dealerProfile


    }
}

const mapDispatchToProps=dispatch=>{
    return{
    fetchDealers:()=>dispatch(fetchDealers())
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(ViewProfile)
