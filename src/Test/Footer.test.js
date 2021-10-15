/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../components/Footer';

// eslint-disable-next-line no-undef
describe('Footer', () => {
  // eslint-disable-next-line no-undef
  it('it should render text on footer', () => {
    const wrapper = shallow(<Footer />);
    const para = wrapper.find('p');
    const result = para.text();
    // eslint-disable-next-line no-undef
    expect(result).toBe('Copyright© 2021 All right reserved');
  });
});
