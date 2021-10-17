/* eslint-disable */
import React, { useRef } from 'react';
import ReactEditableSvgLabel from 'react-editable-svg-label';
import ReactToPrint from 'react-to-print';
import Card from './Card';
import './CardDesign.scss';

function ArrestWarrant() {
  const componentRef = useRef();
  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <button className="card-edit-elements">Print this out!</button>
        )}
        content={() => componentRef.current}
      />
      <Parent ref={componentRef} />
    </div>
  );
}
export class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bride: 'Maryum',
      groom: 'Hassan',
      time: '10pm',
      type: 'Nikah',
      gender: 'Son',
      venue: 'Sarena Hotel',
      img: 'https://cutcraftdiy.com/wp-content/uploads/2020/07/Wedding-Monogram-SVG.jpg',
    };
  }

  handleChangeText = (newText) => {
    this.setState({
      bride: newText,
    });
  };
  handleChangeText2 = (newText) => {
    this.setState({
      groom: newText,
    });
  };

  handleChangeTime = (newText) => {
    this.setState({
      time: newText,
    });
  };

  handleChangeType = (newText) => {
    this.setState({
      type: newText,
    });
  };

  handleChangegender = (newText2) => {
    this.setState({
      gender: newText2,
    });
  };

  handleChangevenue = (newText2) => {
    this.setState({
      venue: newText2,
    });
  };
  componentDidMount() {
    return console.log('hii');
  }
  render() {
    return (
      <div>
        <div style={{ marginTop: '-396px', marginLeft: '30px' }}>
          <p className="card-fileds-edit">
            Click on each fields of Card for edit
          </p>

          <p className="bride-name-card">Bride Name</p>
          <span className="solid">
            {' '}
            <ReactEditableSvgLabel
              onChange={this.handleChangeText}
              y="95%"
              x="40%"
            >
              {this.state.bride}
            </ReactEditableSvgLabel>
          </span>
          <br />
          <br />
          <p className="bride-name-card">Groom Name</p>
          <span className="solid">
            <ReactEditableSvgLabel onChange={this.handleChangeText2}>
              {this.state.groom}
            </ReactEditableSvgLabel>
          </span>
          <br />
          <br />
          <p className="bride-name-card">Time</p>
          <span className="event-on-card">
            <ReactEditableSvgLabel
              onChange={this.handleChangeTime}
              x="40%"
              y="99%"
            >
              {this.state.time}
            </ReactEditableSvgLabel>
          </span>
          <br />
          <br />
          <p className="bride-name-card">Event</p>
          <span className="event-on-card">
            <ReactEditableSvgLabel
              onChange={this.handleChangeType}
              x="40%"
              y="99%"
            >
              {this.state.type}
            </ReactEditableSvgLabel>
          </span>
          <br />
          <br />
          <p className="bride-name-card ">Venue</p>
          <span className="venue-on-card">
            <ReactEditableSvgLabel
              onChange={this.handleChangevenue}
              x="40%"
              y="10%"
            >
              {this.state.venue}
            </ReactEditableSvgLabel>
          </span>
        </div>
        <Card
          Bname={this.state.bride}
          Gname={this.state.groom}
          time={this.state.time}
          type={this.state.type}
          gender={this.state.gender}
          venue={this.state.venue}
          img={this.state.img}
        />
      </div>
    );
  }
}
export default ArrestWarrant;
