import React from 'react';

import weds from '../../Assets/images/weds.jpg';
import './Home.scss';
import Card from '../../components/cards';
import Crouselcom from '../../components/Carousel';

function Home() {
  return (
    <div>
      <Crouselcom />
      <img className="img-one" src={weds} alt="weds" />
      <p className="heading-one-weds">Wanclouds Weds</p>
      <p className="wancloud-wed-head1">
        Wanclouds wed is platform which brings all your wedding service on one
        platform .{' '}
      </p>
      <p className="wancloud-wed-head2">
        {' '}
        So instead of visiting different websites and booking these services
        separately{' '}
      </p>{' '}
      <p className="wancloud-wed-head3">
        {' '}
        you can book here and this platform make you feel ease 😃
      </p>
      <p className="heading-two">We deals</p>
      <p className="text-in">in</p>
      <Card />
      <br />
      <br />
    </div>
  );
}

export default Home;
