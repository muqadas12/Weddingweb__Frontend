/* eslint-disable import/no-mutable-exports */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import { fetchCatering } from '../../ReduxApi/Catering/CateringAction';
import cateringImg from '../../Assets/images/catering.jpg';
import './CateringDealer.scss';

export let booked;

function CateringDealer({ userData, fetchCatering }) {
  const history = useHistory();

  const [setBooked] = useState(false);
  useEffect(() => {
    fetchCatering();
  }, []);

  const bookHandler = () => {
    {
      localStorage.getItem('token')
        ? history.push('/book-catering')
        : history.push('/sign-in');
    }
    setBooked(true);
    // booked = true;
  };

  return userData.loading ? (
    <h2>Loading....</h2>
  ) : userData.err ? (
    <h2>{userData.err}</h2>
  ) : (
    <div>
      <img className="catering-img" src={cateringImg} alt="catering" />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {userData &&
          userData.cateringser &&
          userData.cateringser.map((user) => (
            <div key={user}>
              <Space style={{ padding: '20px' }}>
                <Card className="card-catering">
                  <p className="dealer-services">{user.dealerservice}</p>
                  <p className="service-name-catering">{user.serviceName}</p>
                  <p className="service-name-catering">{user.description}</p>
                  <p className="service-name-catering">
                    For only Rupees
                    {user.price}
                  </p>
                  <p>
                    <img
                      className="img-catering-services"
                      src={user.pathImg}
                      alt="img"
                    />
                  </p>

                  <button
                    type="submit"
                    className="book-now-catering"
                    onClick={bookHandler}
                  >
                    Book Now
                  </button>
                </Card>
              </Space>
            </div>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.viewCateringService,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCatering: () => dispatch(fetchCatering()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CateringDealer);
