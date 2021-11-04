/* eslint-disable  */
import React, { useContext } from 'react';
import { PhotographyListContext } from './PhotographerDealer';

function PhotographyList() {
  const value = useContext(PhotographyListContext);
  return (
    <>
      <span>
        {' '}
        <p className="service-name-photography-heading">{value.serviceName}</p>
        <p className="service-name-photography">{value.description}</p>
        <p className="service-price-photography">
          For only Rupees{value.price}
        </p>
        <p>
          <img className="photography-img" src={value.pathImg} alt="wedimg" />
        </p>
      </span>
    </>
  );
}

// function PhotographyList(props) {
//   return (
//     <>
//       <span>
//         {' '}
//         <p className="service-name-photography-heading">
//           {props.data.serviceName}
//         </p>
//         <p className="service-name-photography">{props.data.description}</p>
//         <p className="service-price-photography">
//           For only Rupees{props.data.price}
//         </p>
//         <p>
//           <img
//             className="photography-img"
//             src={props.data.pathImg}
//             alt="wedimg"
//           />
//         </p>
//       </span>
//     </>
//   );
// }
export default PhotographyList;
