/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-unused-state */
import React from 'react';
import ReactEditableSvgLabel from 'react-editable-svg-label';
import ReactToPrint from 'react-to-print';
// eslint-disable-next-line no-unused-vars
import img2 from './img2.svg';

class ArrestWarrant extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => (
            <a href="#" style={{ marginTop: '100px' }}>
              Print this out!
            </a>
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
      venue: 'Sarena Hotel',
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
        <ReactEditableSvgLabel onChange={this.handleChangeText}>
          {this.state.text}
        </ReactEditableSvgLabel>

        <svg width="900px" height="900px">
          {/* <rect x="0" y="0" width="100%" height="100%" fill="#da552f" /> */}

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

        <br />
        <ReactEditableSvgLabel onChange={this.handleChangeText2}>
          {this.state.text1}
        </ReactEditableSvgLabel>
        <br />
        <ReactEditableSvgLabel onChange={this.handleChangeTime} x="40%" y="99%">
          {this.state.time}
        </ReactEditableSvgLabel>
        <br />
        <ReactEditableSvgLabel onChange={this.handleChangeType} x="40%" y="99%">
          {this.state.type}
        </ReactEditableSvgLabel>
        <br />
        <ReactEditableSvgLabel
          onChange={this.handleChangevenue}
          x="40%"
          y="99%"
        >
          {this.state.venue}
        </ReactEditableSvgLabel>
      </div>
    );
  }
}

export default ArrestWarrant;
