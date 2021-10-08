/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input, Select } from 'antd';
import { useDispatch, useSelector, connect } from 'react-redux';
import {
  fetchHallSerach,
  setSelectedPrice,
  setSelectedDealer,
  setSelectedEmail,
} from '../../ReduxApi/hallSearch/Hallsearch.action';
import { myCategory } from '../../ReduxApi/Category/categoriesAction';
import hallSearch from '../../Assets/images/weddingHallsearch.jpg';
import './Hall.scss';

const { Option } = Select;

const CaseStatusLaw = ({
  fetchHallSerach,
  userData,
  setSelectedPrice,
  setSelectedDealer,
  setSelectedEmail,
}) => {
  const dispatch = useDispatch();
  const hall = useSelector((state) => state.searchHallreducer);
  const history = useHistory();
  const [hallType, sethallType] = useState('');
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [city, setCity] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchHallSerach();
    setSelectedPrice();
    setSelectedDealer();
    setSelectedEmail();
    // axios
    //   .get('http://localhost:2000/api/hall/gethalls')
    //   .then((res) => {
    //     setData(res.data.dataH);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
  const bookHandler = (list) => {
    if (localStorage.getItem('token')) {
      setSelectedPrice(list.price);
      setSelectedDealer(list.serviceName);
      setSelectedEmail(list.email);
      console.log(setSelectedPrice(list.price));
      console.log(setSelectedEmail(list.email));
      console.log(setSelectedDealer(list.serviceName));

      history.push('/booking');
    } else {
      dispatch(myCategory('booked-hall'));
      history.push('/sign-in');
    }
  };
  const handleSubmit = () => {
    const search = userData.hallSearch.filter(
      (x) => x.hallType === hallType || x.city === city
    );
    console.log(hallType, city);
    console.log(data);
    console.log(search);
    setSearchData(search);
    setShow(true);
  };

  const handleChangehallType = (e) => {
    sethallType(e.target.value);
  };

  const handleChangecity = (e) => {
    // console.log(e.target.value);
    setCity(e.target.value);
  };

  return (
    <div>
      <img src={hallSearch} alt="weddinghall" />
      {/* {userData &&
        userData.hallSearch &&
        userData.hallSearch.map((user) => <p>{user.hallType}</p>)} */}
      <h1 className="wedding-hall-h1">
        Welcome!Here You can Serach hall according to your need{' '}
      </h1>
      <Form>
        <label className="label-hall-type">Select Hall Type:</label>
        <select className="dropdown-hall" onChange={handleChangehallType}>
          <option
            style={{ marginTop: '990px' }}
            name="select hall type"
            disabled
          >
            Select HallType
          </option>

          {userData &&
            userData.hallSearch &&
            userData.hallSearch.map((user) => (
              <option key={user} name={user.hallType}>
                {user.hallType}
              </option>
            ))}
        </select>
        <label className="label-city">Select City:</label>

        <select className="dropdown-city" onChange={handleChangecity}>
          <option name="select city" disabled>
            Select city
          </option>

          {userData &&
            userData.hallSearch &&
            userData.hallSearch.map((user) => (
              <option key={user} name={user.city}>
                {user.city}
              </option>
            ))}
        </select>
      </Form>
      <button type="submit" className="search-button" onClick={handleSubmit}>
        {' '}
        Search{' '}
      </button>
      <br />
      <br />
      {show ? (
        <>
          <div>
            {searchData.map((list) => {
              const {
                serviceName,
                maxCapacity,
                minCapacity,
                price,
                services,
                // eslint-disable-next-line no-shadow
                hallType,
                // eslint-disable-next-line no-shadow
                city,
                description,
                pathImg,
              } = list;
              return (
                <div key={serviceName} className="row justify-content-around ">
                  {/* <img src={img} alt="asd"/> */}

                  <p className="label-name">Name:</p>
                  <p className="hall-name">{list.serviceName}</p>

                  <p className="label-hall">Price:</p>
                  <p className="avb-hall">{price}</p>

                  <p className="label-hall">Maximum Capacity:</p>
                  <p className="max-cap">{maxCapacity}</p>

                  <p className="label-hall">Minimum Guest:</p>
                  <p className="min-guest">{minCapacity}</p>

                  <p className="label-hall">Services:</p>
                  <p className="services">{services}</p>

                  <p className="label-hall">VenueType</p>
                  <p className="ven-type">{hallType}</p>
                  <p className="label-hall">City:</p>
                  <p className="city">{city}</p>

                  <p className="label-hall">Description</p>
                  <p className="description">{description}</p>
                  <img className="img-hall" src={pathImg} alt="imghall" />

                  <br />
                  <br />
                  <button
                    type="submit"
                    className="book-now"
                    onClick={() => bookHandler(list)}
                  >
                    Book Now
                  </button>
                </div>
              );
            })}
          </div>
        </>
      ) : null}
      <br />
    </div>
  );
};
const mapStateToProps = (state) => ({
  userData: state.searchHallreducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchHallSerach: () => dispatch(fetchHallSerach()),
  setSelectedDealer: (dealer) => dispatch(setSelectedDealer(dealer)),
  setSelectedPrice: (price) => dispatch(setSelectedPrice(price)),
  setSelectedEmail: (email) => dispatch(setSelectedEmail(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CaseStatusLaw);
