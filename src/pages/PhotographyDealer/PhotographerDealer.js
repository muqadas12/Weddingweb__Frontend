import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Space, Col, Row } from 'antd';
import { myCategory } from '../../ReduxApi/Category/categoriesAction';

import {
  fetchPhotos,
  setSelectedDealer,
  setSelectedPrice,
} from '../../ReduxApi/Photography/PhotographyAction';
import photographyImg from '../../Assets/images/photographyImg.jpg';
import './Photography.scss';

function PhotographerDealer({
  userData,
  fetchPhotos,
  setSelectedDealer,
  setSelectedPrice,
}) {
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(history);
  useEffect(() => {
    fetchPhotos();
  }, []);
  const bookHandler = (user) => {
    if (localStorage.getItem('token')) {
      setSelectedDealer(user.serviceName);
      setSelectedPrice(user.price);
      console.log(setSelectedDealer(user.serviceName));
      console.log(setSelectedPrice(user.price));

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
                    <p className="service-name-photography-heading">
                      {user.serviceName}
                    </p>
                    <p className="service-name-photography">
                      {user.description}
                    </p>
                    <p className="service-price-photography">
                      For only Rupees{user.price}
                    </p>
                    <p>
                      <img
                        className="photography-img"
                        src={user.pathImg}
                        alt="wedimg"
                      />
                    </p>

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
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotographerDealer);
