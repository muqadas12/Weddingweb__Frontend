/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { shallow } from 'enzyme';
import CardDesign from '../pages/cardDesign/CardDesign';

describe('Chcek state exist', () => {
  // test('', () => {
  //   const wrapper = shallow(<CardDesign />);
  //   expect(wrapper.state()).toEqual({
  //     bride: 'Maryum',
  //     groom: 'Hassan',
  //     time: '10pm',
  //     type: 'Nikah',
  //     gender: 'Son',
  //     venue: 'Sarena Hotel',
  //   });
  // });
  test('check msg', () => {
    const wrapper = shallow(<CardDesign />);
    expect(
      wrapper.containsAllMatchingElements([
        <p> Click on each fields of Card for edit</p>,
      ])
    );
  });
});
describe('class', () => {
  test('find how many time bride-name-card classname is found in cardDesign component', () => {
    const wrapper = shallow(<CardDesign />);

    expect(wrapper.find('.card-fileds-edit').length).toBe(0);
  });
});
