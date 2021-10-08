/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-unused-state */
import React from 'react';
import ReactEditableSvgLabel from 'react-editable-svg-label';
import ReactToPrint from 'react-to-print';
// eslint-disable-next-line no-unused-vars
import img2 from './img2.svg';
import './CardDesign.scss';

class ArrestWarrant extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => (
            <div className="card-edit-elements">
              <a href="#" style={{ marginLeft: '180px', marginTop: '900px' }}>
                Print this out!
              </a>
            </div>
          )}
          content={() => this.componentRef}
        />

        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}
export class ComponentToPrint extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeText2 = this.handleChangeText2.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleChangegender = this.handleChangegender.bind(this);
    this.handleChangevenue = this.handleChangevenue.bind(this);

    this.state = {
      text: 'Maryum',
      text1: 'Hassan',
      time: '10pm',
      type: 'Nikah',
      gender: 'Son',
      venue: 'Serena Hotel',
    };
  }

  handleChangeText(newText) {
    this.setState({
      text: newText,
    });
  }

  handleChangeTime(newText) {
    this.setState({
      time: newText,
    });
  }

  handleChangeType(newText) {
    this.setState({
      type: newText,
    });
  }

  handleChangegender(newText2) {
    this.setState({
      gender: newText2,
    });
  }

  handleChangevenue(newText2) {
    this.setState({
      venue: newText2,
    });
  }

  handleChangeText2(newText2) {
    this.setState({
      text1: newText2,
    });
  }

  render() {
    return (
      <div>
        <div style={{ marginTop: '-109px' }}>
          Bride Name:
          <ReactEditableSvgLabel onChange={this.handleChangeText}>
            {this.state.text}
          </ReactEditableSvgLabel>
          <br />
          Groom Name:
          <ReactEditableSvgLabel onChange={this.handleChangeText2}>
            {this.state.text1}
          </ReactEditableSvgLabel>
          <br />
          Time:
          <ReactEditableSvgLabel
            onChange={this.handleChangeTime}
            x="40%"
            y="99%"
          >
            {this.state.time}
          </ReactEditableSvgLabel>
          <br />
          Event:
          <ReactEditableSvgLabel
            onChange={this.handleChangeType}
            x="40%"
            y="99%"
          >
            {this.state.type}
          </ReactEditableSvgLabel>
          <br />
          Venue:
          <ReactEditableSvgLabel
            onChange={this.handleChangevenue}
            x="40%"
            y="99%"
          >
            {this.state.venue}
          </ReactEditableSvgLabel>
        </div>
        <svg width="900px" height="900px">
          <image
            xlinkHref="https://www.pngfind.com/pngs/m/689-6897178_wedding-invitation-card-template-floral-black-and-white.png"
            x="20%"
            y="20%"
            height="700px"
            width="500px"
          />
          <text fill="#ffffff" x="45%" y="50%" style={{ color: 'black' }}>
            {this.state.text}
          </text>
          <g>
            <text fill="#ffffff" x="46%" y="53%">
              weds
            </text>
          </g>
          <g>
            <text fill="#ffffff" x="45%" y="55%">
              {this.state.text1}
            </text>
          </g>
          <g>
            <text fill="#ffffff" x="39%" y="58%">
              You are inivited to attend the
            </text>
          </g>
          <g>
            <text fill="#ffffff" x="42%" y="62%">
              {this.state.type} Cermony
            </text>
          </g>
          <g>
            <text fill="#ffffff" x="42%" y="66%">
              of our beloved {this.state.gender}
            </text>
          </g>
          <g>
            <text fill="#ffffff" x="40%" y="69%">
              In {this.state.venue} at {this.state.time}
            </text>
          </g>
        </svg>
      </div>
    );
  }
}

export default ArrestWarrant;
