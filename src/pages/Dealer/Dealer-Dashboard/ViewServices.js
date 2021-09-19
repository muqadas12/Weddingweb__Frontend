import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { fetchServices } from '../../../ReduxApi/ViewDealerServices/Services.action'
import servicesImg from '../../../Assets/images/services.jpg'
import './ViewServices.scss'
import { Tabs,Cards, Card,Row,Col } from 'antd';
const { TabPane } = Tabs;
function ViewDealerServices ({ userData, fetchServices }) {
 
  useEffect(() => {
    fetchServices()
  }, [])
  




  return userData.loading ? (
    <h2>Loading....</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      
      <img className="view-services" src={servicesImg} alt="servicesImg"/>
      
        <Card className="card-view-addedservices">
          <p className="dealer-services-heading-one">Dealer Services</p>
          <p>
      {userData.services.dealerservice.map(c=><p>{c}</p>)}

      </p>
      <p className="services-name-heading-one">Service Name</p>
      <p style={{marginLeft:'190px',marginTop:'8px'}} >
      {userData.services.serviceName.map(c=><p>{c}</p>)}

      </p>

      </Card>
     
       
    </div>
   
    
  )
}

const mapStateToProps = state => {
  return {
    userData: state.service
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
)(ViewDealerServices)






