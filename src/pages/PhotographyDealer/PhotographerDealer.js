import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Card, Space, Col, Row } from 'antd';
import { myCategory } from '../../ReduxApi/Category/categoriesAction';

import { fetchPhotos } from '../../ReduxApi/Photography/PhotographyAction';
import photographyImg from '../../Assets/images/photographyImg.jpg';
import './Photography.scss';

function PhotographerDealer({ userData, fetchPhotos }) {
  const dispatch = useDispatch();
  let history = useHistory();
  useEffect(() => {
    fetchPhotos();
  }, []);
  const bookHandler = () => {
    if (localStorage.getItem('token')) {
      history.push('/booking-photographer');
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
                    <p className="dealer-service-photography">
                      {user.dealerservice}
                    </p>
                    <p className="service-name-photography">
                      {user.serviceName}
                    </p>
                    <p className="service-name-photography">
                      {user.description}
                    </p>
                    <p className="service-name-photography">
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
                      onClick={bookHandler}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotographerDealer);
