/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../components/cards';
import Home from '../pages/home/Home';

describe('dive method', () => {
  test('dive ', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Card).dive().find('.card-title').length).toBe(5);
  });
});
