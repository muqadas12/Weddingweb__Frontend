
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPhotos } from '../../ReduxApi/Photography/PhotographyAction';
import photographyImg from '../../Assets/images/photographyImg.jpg'
import './Photography.scss';
import {Card,Space} from 'antd'
function PhotographerDealer ({ userData, fetchPhotos }) {
  useEffect(() => {
    fetchPhotos()
  }, [])
  return userData.loading ? (
    <h2>Loading....</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <img className="photography-main-image" src={photographyImg} alt="photographyImg"/>
      <div style={{display: "flex",justifyContent:'center'}}>
        {userData &&
          userData.photos &&
          userData.photos.map(user => 
            <Space style={{padding:'20px'}}>
          <Card className="photographycards">
             <p className="dealer-service-photography">{user.dealerservice}</p>
             <p className="service-name-photography">{user.serviceName}</p>
             <p className="service-name-photography">{user.description}</p>
             <p className="service-name-photography">For only Rupees{user.price}</p>
             <p><img className="photography-img" src={user.pathImg} alt="wedimg"/></p>
             <button className="book-now-wedding">Book Now</button>
             {/* <video src={user.pathImg} type="video/mp4"  controls alt="wedimg"/> */}
             </Card>
             </Space>

          
          
          )}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.photo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotographerDealer)