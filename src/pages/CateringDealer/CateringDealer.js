/* eslint-disable no-shadow */
/* eslint-disable import/no-mutable-exports */
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Card, Space } from 'antd';
import { useHistory } from 'react-router-dom';
import {
  fetchCatering,
  setSelectedEmail,
  setSelectedDealer,
  setSelectedPrice,
} from '../../ReduxApi/Catering/CateringAction';
import cateringImg from '../../Assets/images/catering.jpg';
import { myCategory } from '../../ReduxApi/Category/categoriesAction';
import './CateringDealer.scss';

function CateringDealer({
  userData,
  fetchCatering,
  setSelectedEmail,
  setSelectedDealer,
  setSelectedPrice,
}) {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCatering();
  }, []);

  const bookHandler = (user) => {
    if (localStorage.getItem('token')) {
      setSelectedEmail(user.email);
      setSelectedDealer(user.serviceName);
      setSelectedPrice(user.price);
      console.log(setSelectedDealer(user.serviceName));
      console.log(setSelectedPrice(user.price));
      console.log(setSelectedEmail(user.email));
      history.push('/book-catering');
    } else {
      dispatch(myCategory('booked-catering'));
      history.push('/sign-in');
    }
    // {
    //   localStorage.getItem('token')
    //     ? history.push('/book-catering')
    //     : history.push('/sign-in');
    // }

    // {!localStorage.getItem('token') &&   dispatch(myCategory('CateringDealer'))}

    //  setBooked(true);
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
                    onClick={() => bookHandler(user)}
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
  setSelectedEmail: (email) => dispatch(setSelectedEmail(email)),
  setSelectedDealer: (dealer) => dispatch(setSelectedDealer(dealer)),
  setSelectedPrice: (price) => dispatch(setSelectedPrice(price)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CateringDealer);
