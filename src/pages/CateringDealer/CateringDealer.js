import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {fetchCatering} from "../../ReduxApi/Catering/CateringAction"
import cateringImg from '../../Assets/images/catering.jpg'
import './CateringDealer.scss'
import {Card,Space} from 'antd'
import {Link} from 'react-router-dom'
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
            <Card className="card-catering"  >
            <p className="dealer-services">{user.dealerservice}</p>
            <p className="service-name-catering">{user.serviceName}</p>
            <p className="service-name-catering">{user.description}</p>
            <p className="service-name-catering">For only Rupees {user.price}</p>
            <p>
              <img className='img-catering-services'  src={user.pathImg} alt='img'/>
              </p>
              <Link to="/book-catering">
              <button className="book-now-catering">Book Now</button>
              </Link>
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