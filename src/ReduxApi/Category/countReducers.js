/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
const initialstate = {
  cat: ' ',
};

const countReducers = (state = initialstate, action) => {
  switch (action.type) {
    case 'CATEGORY':
      return {
        ...state,
        cat: action.payload,
      };

    default:
      return state;
  }
};

export default countReducers;
