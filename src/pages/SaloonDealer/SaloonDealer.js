/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  fetchServices,
  setSelectedEmail,
  setSelectedDealer,
  setSelectedPrice,
} from '../../ReduxApi/Saloonservices/SaloonAction';
import saloonServices from '../../Assets/images/saloonServices.jpg';
import { myCategory } from '../../ReduxApi/Category/categoriesAction';
import { truncateString } from './SaloonDealrt.utils';
import './SaloonDealer.scss';

function SaloonDealer({
  userData,
  fetchServices,
  setSelectedEmail,
  setSelectedDealer,
  setSelectedPrice,
}) {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchServices();
  }, []);
  const bookHandler = (user) => {
    if (localStorage.getItem('token')) {
      setSelectedDealer(user.serviceName);
      setSelectedPrice(user.price);
      setSelectedEmail(user.email);
      console.log(setSelectedEmail(user.email));
      console.log(setSelectedDealer(user.serviceName));
      console.log(setSelectedPrice(user.price));

      history.push('/booking-saloon');
    } else {
      dispatch(myCategory('booked-saloon'));
      history.push('/sign-in');
    }
  };
  console.log(userData);
  return userData.loading ? (
    <h2>Loading....</h2>
  ) : userData.err ? (
    <h2>{userData.err}</h2>
  ) : (
    <div>
      <img className="saloon-image" src={saloonServices} alt="saloonService" />
      {/* <div style={{display: 'flex'}}> */}
      <div style={{ display: 'flex' }}>
        {userData &&
          userData.saloonser &&
          userData.saloonser.map((user) => (
            <div key={user} className="cards-saloon-services">
              <p className="service-name">{user.dealerservice}</p>
              <p className="service-type-saloon">
                {truncateString(user.serviceName, 30)}
              </p>

              <p className="service-des-saloon">{user.description}</p>
              <p className="service-price">For only Rs{user.price}</p>
              <p>
                {' '}
                <img className="service-img" src={user.pathImg} alt="img" />
              </p>
              <span>
                <button
                  type="submit"
                  onClick={() => bookHandler(user)}
                  className="book-saloon-service-btn"
                >
                  Book Now
                </button>
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.viewSaloonServices,
});

const mapDispatchToProps = (dispatch) => ({
  fetchServices: () => dispatch(fetchServices()),
  setSelectedEmail: (email) => dispatch(setSelectedEmail(email)),
  setSelectedDealer: (dealer) => dispatch(setSelectedDealer(dealer)),
  setSelectedPrice: (price) => dispatch(setSelectedPrice(price)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SaloonDealer);
