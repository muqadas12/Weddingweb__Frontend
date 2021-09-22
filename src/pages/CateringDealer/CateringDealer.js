import React, { useEffect} from "react";
import { connect } from "react-redux";
import { fetchCatering } from "../../ReduxApi/Catering/CateringAction";
import cateringImg from "../../Assets/images/catering.jpg";
import "./CateringDealer.scss";
import { Card, Space } from "antd";
import{useHistory} from 'react-router-dom';
export let booked
export let bookCatering



function CateringDealer({ userData, fetchCatering }) {
  let history = useHistory();


 // const [booked,setBooked]= useState(false)
  useEffect(() => {
    fetchCatering();
  }, []);

  const bookHandler = ()=>{
    // const token = localStorage.getItem('token')
    console.log(localStorage.getItem('token'))
    {localStorage.getItem('token')? history.push('/book-catering') : history.push('/sign-in')}
   // setBooked(true)
   booked=true
   bookCatering="im catering component"

  }

  return userData.loading ? (
    <h2>Loading....</h2>
  ) : userData.err ? (
    <h2>{userData.err}</h2>
  ) : (
    <div>
      <img className="catering-img" src={cateringImg} alt="catering" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {userData &&
          userData.cateringser &&
          userData.cateringser.map((user) => (
            <div>
              <Space style={{ padding: "20px" }}>
                <Card className="card-catering">
                  <p className="dealer-services">{user.dealerservice}</p>
                  <p className="service-name-catering">{user.serviceName}</p>
                  <p className="service-name-catering">{user.description}</p>
                  <p className="service-name-catering">
                    For only Rupees {user.price}
                  </p>
                  <p>
                    <img
                      className="img-catering-services"
                      src={user.pathImg}
                      alt="img"
                    />
                  </p>
                  
                    <button className="book-now-catering" onClick={bookHandler}>Book Now</button>
               
                  <span></span>
                </Card>
              </Space>
            </div>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.viewCateringService,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCatering: () => dispatch(fetchCatering()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CateringDealer);
