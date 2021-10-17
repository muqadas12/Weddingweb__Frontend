/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import CardDes from '../pages/cardDesign/CardDesign';

describe('instances', () => {
  // test('function test', () => {
  //   const wrapper = shallow(<Signup />);
  //   return wrapper
  //     .instance()
  //     .loadData()
  //     .then((data) => {
  //       expect(data).toEqual({});
  //     });
  // });
  test('plays video', async () => {
    const spy = jest.spyOn(CardDes.prototype, 'ArrestWarrant');
    const instance = shallow(<CardDes />);
    // jest.spyOn(CardDes.prototype, 'ArrestWarrant');
    // shallow(<CardDes />);
    // expect(CardDes.prototype.componentDidMount).toHaveCalled(1);
  });
});
