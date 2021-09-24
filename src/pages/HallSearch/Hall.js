import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import hallSearch from '../../Assets/images/weddingHallsearch.jpg';
import './Hall.scss';

const CaseStatusLaw = () => {
  const [VenueType, setVenueType] = useState('');
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [city, setCity] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:2000/api/hall/gethalls')
      .then((res) => {
        setData(res.data.dataH);
      })
      .catch(() => {
        // console.log(err);
      });
  }, []);

  const handleSubmit = () => {
    const search = data.filter(
      (x) => x.VenueType === VenueType || x.city === city
    );
    // console.log(VenueType, city);
    // console.log(data);
    // console.log(search);
    setSearchData(search);
    setShow(true);
  };

  const handleChangeVenueType = (e) => {
    setVenueType(e.target.value);
  };

  const handleChangecity = (e) => {
    // console.log(e.target.value);
    setCity(e.target.value);
  };

  return (
    <div>
      <img src={hallSearch} alt="weddinghall" />
      <h1 className="wedding-hall-h1">
        Welcome!Here You can Serach hall according to your need{' '}
      </h1>
      <form>
        <select className="dropdown-hall" onChange={handleChangeVenueType}>
          <option
            style={{ marginTop: '990px' }}
            name="select hall type"
            disabled
          >
            Select HallType
          </option>

          {data.map((el) => (
            <option key={el} name={el.VenueType}>
              {el.VenueType}
            </option>
          ))}
        </select>
        <select className="dropdown-city" onChange={handleChangecity}>
          <option name="select city" disabled>
            Select city
          </option>

          {data.map((el) => (
            <option key={el} name={el.city}>
              {el.city}
            </option>
          ))}
        </select>
      </form>
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
                Hall,
                MaximumCapacity,
                MinimumGuest,
                Services,
                // eslint-disable-next-line no-shadow
                VenueType,
                // eslint-disable-next-line no-shadow
                city,
                description,
                name,
                img,
              } = list;
              return (
                <div key={name} className="row justify-content-around ">
                  {/* <img src={img} alt="asd"/> */}

                  <p className="label-name">Name:</p>
                  <p className="hall-name">{name}</p>

                  <p className="label-hall">Hall:</p>
                  <p className="avb-hall">{Hall}</p>

                  <p className="label-hall">Maximum Capacity:</p>
                  <p className="max-cap">{MaximumCapacity}</p>

                  <p className="label-hall">Minimum Guest:</p>
                  <p className="min-guest">{MinimumGuest}</p>

                  <p className="label-hall">Services:</p>
                  <p className="services">{Services}</p>

                  <p className="label-hall">VenueType</p>
                  <p className="ven-type">{VenueType}</p>
                  <p className="label-hall">City:</p>
                  <p className="city">{city}</p>

                  <p className="label-hall">Description</p>
                  <p className="description">{description}</p>
                  <img className="img-hall" src={img} alt="imghall" />

                  <br />
                  <br />
                  <button type="submit" className="book-now">
                    <Link to="/booking-sign-up">Book Now</Link>
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
export default CaseStatusLaw;
