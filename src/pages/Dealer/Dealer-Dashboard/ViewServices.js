import React, { useEffect } from "react";
import { connect } from "react-redux";
// eslint-disable-next-line max-len
import { fetchServices } from "../../../ReduxApi/ViewDealerServices/Services.action";
import servicesImg from "../../../Assets/images/services.jpg";
import "./ViewServices.scss";
import { Card } from "antd";
function ViewDealerServices({ userData, fetchServices }) {
  useEffect(() => {
    fetchServices();
  }, []);

  return userData.loading ? (
    <h2>Loading....</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <img className="view-services" src={servicesImg} alt="servicesImg" />
      {/* {userData.services.dealerservice} */}

      <Card className="card-view-addedservices">
        <p className="dealer-services-heading-one">Dealer Services</p>
        <p>
          {userData.services.dealerservice.map((c) => (
            <p key={c}>{c}</p>
          ))}
        </p>
        <p className="services-name-heading-one">Service Name</p>
        <p style={{ marginLeft: "190px", marginTop: "8px" }}>
          {userData.services.serviceName.map((c) => (
            <p key={c}>{c}</p>
          ))}
        </p>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.service,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServices: () => dispatch(fetchServices()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewDealerServices);
