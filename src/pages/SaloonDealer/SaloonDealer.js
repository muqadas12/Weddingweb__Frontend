
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchServices } from '../../ReduxApi/Saloonservices/SaloonAction'
import saloonServices from "../../Assets/images/saloonServices.jpg"
import "./SaloonDealer.scss"
import { Card } from 'antd';

function SaloonDealer ({ userData, fetchServices }) {
  useEffect(() => {
    fetchServices()
  }, [])
  console.log(userData);
  return userData.loading ? (
    <h2>Loading....</h2>
  ) : userData.err ? (
    <h2>{userData.err}</h2>
    
  ) : (
    <div>
        <img className="saloon-image" src={saloonServices} alt="saloonService"/>
      {/* <div style={{display: "flex"}}> */}
      <div>
        {userData &&
          userData.saloonser &&
          userData.saloonser.map(user => 
          <div className="cards-saloon-services" >
            <p className="service-name">{user.dealerservice}</p>
            <p className="service-type">{user.serviceName}</p>

            <p className="service-des">{user.description}</p>
            <p className="service-price">For only Rs{user.price}</p>
            <p> <img className="service-img" src={user.pathImg} alt="img"/></p>
             <span>
             <button className="book-saloon-service-btn">Book Now</button>
             </span>

              
              </div>
              
             
             
             
               
            
         

          
          
          )}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.saloon
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchServices: () => dispatch(fetchServices())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaloonDealer)