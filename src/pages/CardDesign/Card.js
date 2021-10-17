import React from 'react';
import card from '../../Assets/images/c.svg';
// import cardWed from '../../Assets/images/cardWed.svg';

function Card(props) {
  return (
    <div>
      <svg width="1090px" height="900px">
        <image
          // xlinkHref={cardWed}
          xlinkHref={card}
          // xlinkHref="https://www.pngfind.com/pngs/m/689-6897178_wedding-invitation-card-template-floral-black-and-white.png"
          x="50%"
          y="10%"
          height="700px"
          width="500px"
        />
        <text y="40%" x="72%" style={{ color: 'white' }}>
          {props.Bname}
        </text>

        <text y="45%" x="71%" style={{ color: 'white' }}>
          weds {props.Gname}
        </text>
        <text y="50%" x="65%" style={{ color: 'white' }}>
          You are invited to attend the {props.type}
        </text>
        <text y="53%" x="70%" style={{ color: 'white' }}>
          of my beloved {props.gender}
        </text>

        <text y="57%" x="70%" style={{ color: 'white' }}>
          in {props.venue}
        </text>
        <text y="60%" x="73%" style={{ color: 'white' }}>
          at {props.time}
        </text>
      </svg>
    </div>
  );
}
export default Card;
