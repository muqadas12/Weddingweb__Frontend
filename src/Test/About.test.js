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
  test('check weather this msg  exist', () => {
    let wrapper = shallow(<About />);
    expect(
      wrapper.contains(
        <p className="first-heading-about-us">Welcome to Wanclouds Weds</p>
      )
    ).toEqual(true);
  });
  test('check weather this msg exist', () => {
    let wrapper = shallow(<About />);
    expect(
      wrapper.containsAllMatchingElements([<p>Welcome to Wanclouds Weds</p>])
    ).toEqual(true);
  });
  test('checking div element that has any msg like Welcome to Wanclouds Weds or something else ', () => {
    let wrapper = shallow(<About />);
    expect(
      wrapper.containsAnyMatchingElements([
        <p>We are glad and greatful that you are here</p>,
      ])
    ).toEqual(true);
  });
  test('find weahther this class appears 2 time', () => {
    let wrapper = shallow(<About />);
    expect(wrapper.find('.description-about-us').length).toBe(2);
  });
  test('child check ', () => {
    let wrapper = shallow(<About />);
    expect(wrapper.find('.bgg').childAt(0).type()).toEqual('img');
  });
  test('check classname using is method ', () => {
    let wrapper = shallow(<About />);
    expect(wrapper.is('.bgg')).toEqual(true);
  });
  test('btn click', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find('.btn-color-change-custom-hook').length).toEqual(1);
    wrapper.find('button').simulate('click');
  });
});
