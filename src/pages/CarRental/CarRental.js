import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCarRental } from "../../ReduxApi/CarRental/CarActions";
import carRental from "../../Assets/images/carRental.jpg";
import { Link } from "react-router-dom";
import "./CarRental.scss";
import { Button } from "antd";
function CarRental({ userData, fetchCarRental }) {
  useEffect(() => {
    fetchCarRental();
  });

  return userData.loading ? (
    <h1>Loading...</h1>
  ) : userData.err ? (
    <h1>{userData.err}</h1>
  ) : (
    <div>
      <img className="car-rental" src={carRental} alt="Carrental" />

      {userData &&
        userData.carrent &&
        userData.carrent.map((user) => (
          <div>
            <p className="service-name-dealer">{user.dealerservice}</p>
            <p className="service-name-car">{user.serviceName}</p>
            <p className="desc-car">{user.description}</p>
            <p className="price-img">Bring this for only Rs{user.price}</p>
            <p>
              {" "}
              <img className="car-rental-img" src={user.pathImg} alt="imgcar" />
            </p>
            <Link to="/car-booking">
              <Button className="btn-booking-car">Book Now</Button>
            </Link>
          </div>
        ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.viewCarRentalServices,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCarRental: () => dispatch(fetchCarRental()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarRental);
