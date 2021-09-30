/* eslint-disable no-undef */
// /* eslint-disable react/jsx-props-no-spreading */
// /* eslint-disable no-undef */
// import React from 'react';
// import { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json';
// import Vieprofile from '../pages/Customer/ViewProfile';

// // eslint-disable-next-line no-undef
// describe('App', () => {
//   it('renders without crashing given the required props', () => {
//     const props = {
//       fetchUsers: false,

//       dispatch: jest.fn(),

//       users: [],
//     };
//     const wrapper = shallow(<Vieprofile {...props} />);
//     expect(toJson(wrapper)).toMatchSnapshot();
//   });
// });

import userAction from '../ReduxApi/ViewProfile/userAction';

describe('actions', () => {
  const users = 'reactjs';

  describe('selectSubreddit', () => {
    it('should create an action with a given subreddit', () => {
      const expectedAction = {
        type: userAction.FETCH_USERS_SUCCESS,
        users,
      };
      // eslint-disable-next-line import/no-named-as-default-member
      expect(userAction.fetchUsersSuccess(users)).toEqual(expectedAction);
    });
  });
});
