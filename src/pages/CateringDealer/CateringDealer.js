import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {fetchCatering} from "../../ReduxApi/Catering/CateringAction"
import cateringImg from '../../Assets/images/catering.jpg'
import './CateringDealer.scss'
import {Card,Space} from 'antd'
function CateringDealer ({ userData, fetchCatering}) {
  useEffect(() => {
    fetchCatering()
  }, [])
  return userData.loading ? (
    <h2>Loading....</h2>
  ) : userData.err ? (
    <h2>{userData.err}</h2>
    
  ) : (
    <div>
      <img className="catering-img" src={cateringImg} alt='catering'/>
      <div style={{display: "flex",justifyContent:'center'}}>
        {userData &&
          userData.cateringser &&
          userData.cateringser.map(user => 
          <div >
            <Space style={{padding:'20px'}}>
            <Card className="card-catering" style={{width:'500px',height:'500px'}} >
            <p className="dealer-services">{user.dealerservice}</p>
            <p className="service-name-catering">{user.serviceName}</p>
            <p className="service-name-catering">{user.description}</p>
            <p className="service-name-catering">{user.price}</p>
            <p>
              <img style={{width:'250px',marginLeft:'90px'}} src={user.pathImg} alt='img'/>
              </p>
              <button className="book-now-catering">Book Now</button>
             <span>
             </span>

              </Card>
              </Space>
              </div>
              
             
             
             
               
            
         

          
          
          )}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.catering
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCatering: () => dispatch(fetchCatering())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CateringDealer)