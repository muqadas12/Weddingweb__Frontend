/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Space, Col, Row } from 'antd';
import { myCategory } from '../../ReduxApi/Category/categoriesAction';

import {
  fetchPhotos,
  setSelectedDealer,
  setSelectedPrice,
  setSelectedEmail,
} from '../../ReduxApi/Photography/PhotographyAction';
import photographyImg from '../../Assets/images/photographyImg.jpg';

import PhotographyList from './PhotographyList';

import './Photography.scss';

export const PhotographyListContext = React.createContext();

function PhotographerDealer({
  userData,
  fetchPhotos,
  setSelectedDealer,
  setSelectedPrice,
  setSelectedEmail,
}) {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    fetchPhotos();
  }, []);
  const bookHandler = (user) => {
    if (localStorage.getItem('token')) {
      setSelectedDealer(user.serviceName);
      setSelectedPrice(user.price);
      setSelectedEmail(user.email);

      history.push(`/booking-photographer?name=${user.serviceName}`);
    } else {
      dispatch(myCategory('booked-photographer'));
      history.push('/sign-in');
    }
  };

  return userData.loading ? (
    <h2>Loading....</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <Row>
        <Col xs={{ span: 8, offset: 8 }} lg={{ span: 9, offset: 9 }}>
          <img
            className="photography-main-image"
            src={photographyImg}
            alt="photographyImg"
          />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {userData &&
              userData.photos &&
              userData.photos.map((user) => (
                <Space key={user} style={{ padding: '20px' }}>
                  <Card className="photographycards">
                    <PhotographyListContext.Provider value={user}>
                      <PhotographyList />
                    </PhotographyListContext.Provider>
                    {/* <PhotographyList data={user} /> */}

                    <button
                      type="submit"
                      onClick={() => bookHandler(user)}
                      className="book-now-wedding"
                    >
                      Book Now
                    </button>
                  </Card>
                </Space>
              ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.viewphotographerServices,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  setSelectedDealer: (dealer) => dispatch(setSelectedDealer(dealer)),
  setSelectedPrice: (price) => dispatch(setSelectedPrice(price)),
  setSelectedEmail: (email) => dispatch(setSelectedEmail(email)),
});
// function PhotographyList() {
//   const value = useContext(PhotographyListContext);
//   return (
//     <>
//       <span>
//         {' '}
//         <p className="service-name-photography-heading">{value.serviceName}</p>
//         <p className="service-name-photography">{value.description}</p>
//         <p className="service-price-photography">
//           For only Rupees{value.price}
//         </p>
//         <p>
//           <img className="photography-img" src={value.pathImg} alt="wedimg" />
//         </p>
//       </span>
//     </>
//   );
// }

export default connect(mapStateToProps, mapDispatchToProps)(PhotographerDealer);
