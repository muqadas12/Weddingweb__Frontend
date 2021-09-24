import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchServices } from "../../ReduxApi/Saloonservices/SaloonAction";
import saloonServices from "../../Assets/images/saloonServices.jpg";
import "./SaloonDealer.scss";

function SaloonDealer({ userData, fetchServices }) {
  useEffect(() => {
    fetchServices();
  }, []);
  console.log(userData);
  return userData.loading ? (
    <h2>Loading....</h2>
  ) : userData.err ? (
    <h2>{userData.err}</h2>
  ) : (
    <div>
      <img className="saloon-image" src={saloonServices} alt="saloonService" />
      {/* <div style={{display: 'flex'}}> */}
      <div className="saloon-services-hair">
        {userData &&
          userData.saloonser &&
          userData.saloonser.map((user) => (
            <div key={u} className="cards-saloon-services">
              <p className="service-name">{user.dealerservice}</p>
              <p className="service-type-saloon">{user.serviceName}</p>

              <p className="service-des-saloon">{user.description}</p>
              <p className="service-price">For only Rs{user.price}</p>
              <p>
                {" "}
                <img className="service-img" src={user.pathImg} alt="img" />
              </p>
              <span>
                <Link to="/booking-saloon">
                  <button type="submit" className="book-saloon-service-btn">
                    Book Now
                  </button>
                </Link>
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.viewSaloonServices,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServices: () => dispatch(fetchServices()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SaloonDealer);
