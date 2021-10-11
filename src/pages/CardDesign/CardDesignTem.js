/* eslint-disable react/button-has-type */
import React from 'react';

import cardTemp from '../../Assets/images/cardTem2.jpg';

function CardDesignTem(props) {
  // const history = useHistory();
  // const inputdata = (selectedtemp) => {
  //   history.push(`/InputData/${selectedtemp}`);
  // };
  return (
    <div>
      <img style={{ width: '300px' }} src={cardTemp} alt="img" />
      <button onClick={props.image}>Customize</button>
    </div>
  );
}
export default CardDesignTem;
