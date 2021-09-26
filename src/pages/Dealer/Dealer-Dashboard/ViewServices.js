import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
// eslint-disable-next-line max-len
import { fetchServices } from '../../../ReduxApi/ViewDealerServices/Services.action';
import servicesImg from '../../../Assets/images/services.jpg';
import './ViewServices.scss';

function ViewDealerServices({ userData, fetchServices }) {
  const [data, setData] = useState({
    _id: '',
  });
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
        <p className="services-name-heading-one">Service Name</p>
        <p>{userData.services.serviceName}</p>
        <p className="dealer-services-heading-one">Dealer Services</p>
        <p style={{ padding: 10, marginHorizontal: 10 }}>
          {' '}
          {userData.services.dealerservice}
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
        <Link to={`/customer-update-profile/${userData.services._id}`}>
          <button type="submit">Update</button>
        </Link>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.service,
});

const mapDispatchToProps = (dispatch) => ({
  fetchServices: () => dispatch(fetchServices()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewDealerServices);
