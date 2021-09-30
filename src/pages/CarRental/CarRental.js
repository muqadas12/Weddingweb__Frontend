/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
/* eslint-disable import/no-mutable-exports */
import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { fetchCarRental } from '../../ReduxApi/CarRental/CarActions';
import { myCategory } from '../../ReduxApi/Category/categoriesAction';
import carRental from '../../Assets/images/carRental.jpg';
import './CarRental.scss';

export let bookcar;

function CarRental({ userData, fetchCarRental }) {
  const dispatch = useDispatch();
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const [car, setBookcar] = useState(false);

  const bookHandler = () => {
    if (localStorage.getItem('token')) {
      history.push('/car-booking');
    } else {
      dispatch(myCategory('booked-car'));
      history.push('/sign-in');
    }
  };
  useEffect(() => {
    fetchCarRental();
  }, []);

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
          <div key={user}>
            <p className="service-name-dealer">{user.dealerservice}</p>
            <p className="service-name-car">{user.serviceName}</p>
            <p className="desc-car">{user.description}</p>
            <p className="price-img">Bring this for only Rs{user.price}</p>
            <p>
              {' '}
              <img className="car-rental-img" src={user.pathImg} alt="imgcar" />
            </p>

            <Button onClick={bookHandler} className="btn-booking-car">
              Book Now
            </Button>
          </div>
        ))}
    </div>
  );
}
const mapStateToProps = (state) => ({
  userData: state.viewCarRentalServices,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCarRental: () => dispatch(fetchCarRental()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CarRental);
