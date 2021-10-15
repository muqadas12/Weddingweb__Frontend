/* eslint-disable no-console */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import About from '../pages/aboutUs/About';

describe('Testing about us page', () => {
  test('abut', () => {
    let wrapper = shallow(<About />);
    expect(wrapper.exists('.first-heading-about-us')).toEqual(true);
    expect(wrapper).toMatchSnapshot();
  });
});
