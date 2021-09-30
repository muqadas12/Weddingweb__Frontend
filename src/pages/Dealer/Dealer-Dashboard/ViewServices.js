/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
// eslint-disable-next-line max-len
import { fetchServices } from '../../../ReduxApi/ViewDealerServices/Services.action';
import servicesImg from '../../../Assets/images/services.jpg';
import './ViewServices.scss';

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
      {/* <Card className="card-view-addedservices">
        <p>
          {' '}
          {userData.services.serviceName}
          <button type="button" onClick={() => onDelete(userInfo._id)}>
            Del
          </button>
          <br />
          <br />
          <button type="button">Update</button>
        </p>
      </Card> */}
      <Card className="card-view-addedservices">
        <p className="dealer-services-heading-one">Dealer Services</p>
        <p>
          {userData.services.dealerservice.map((c) => (
            <p key={c}>{c}</p>
          ))}
        </p>
        <p className="services-name-heading-one">Service Name</p>
        <p style={{ marginLeft: '190px', marginTop: '8px' }}>
          {userData.services.serviceName.map((c) => (
            <p key={c}>{c}</p>
          ))}
        </p>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.service,
  deluser: state.delDealers,
});

const mapDispatchToProps = (dispatch) => ({
  fetchServices: () => dispatch(fetchServices()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewDealerServices);
