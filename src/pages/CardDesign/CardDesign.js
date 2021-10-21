/* eslint-disable */
import React, { useRef } from 'react';
import ReactEditableSvgLabel from 'react-editable-svg-label';
import ReactToPrint from 'react-to-print';
// import { ReactComponent as CardSvg } from '../../logo.svg';
import { ReactComponent as CardSvg } from '../../Assets/images/leafy.svg';
import useFields from '../../components/Hooks/useFields';


import { Form, Input, Button, Checkbox } from 'antd';

import './CardDesign.scss';

function ArrestWarrant() {
  const componentRef = useRef();
  return (
    <>
      <Parent />
      <ReactToPrint
        trigger={() => (
          <button className="card-edit-elements">Print this Card!</button>
        )}
        content={() => componentRef.current}
      />
      <CardSvg style={{width:'400px',marginLeft:'30%',fontSize:'70px'}} ref={componentRef} />
    </>
  );
}
export class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bride: 'Maryum',
      groom: 'Hassan',
      time: '10pm',
      event: 'Nikah',
      gender: 'Son',
      venue: 'Sarena Hotel',
    };
  }
  onInputchange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
     document.getElementById('my-text').textContent = event.target.value;
     

  };
  onInputchanges = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    document.getElementById('groom').textContent = event.target.value;
  };
  Timechanges = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    document.getElementById('time').textContent = event.target.value;
  };
  Venuechanges = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    document.getElementById('venue').textContent = event.target.value;
  };
  Genderchanges = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    document.getElementById('gender').textContent = event.target.value;
  };
   Eventchanges = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    document.getElementById('event').textContent = event.target.value;
  };

  render() {
    return (
      <div style={{marginTop:"40px",marginLeft:'300px'}}>
      <p  className="card-heading-for-field-editing">You can Edit Your Card fields here:</p>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Bridename"
            name="bride"
            id="my-text"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              onChange={this.onInputchange}
              placeholder={this.state.bride}
              style={{ width: '120px' }}
            />
          </Form.Item>
          <Form.Item
            label="Groomname"
            name="groom"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              onChange={this.onInputchanges}
              placeholder={this.state.groom}
              style={{ width: '120px' }}
            />
          </Form.Item>
          <Form.Item
            label="Time"
            name="time"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              name="time"
              placeholder={this.state.time}
              onChange={this.Timechanges}
              style={{ width: '120px' }}
            />
          </Form.Item>
          <Form.Item
            label="Venue"
            name="venue"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              name="venue"
              placeholder={this.state.venue}
              onChange={this.Venuechanges}
              style={{ width: '120px' }}
            />
          </Form.Item>
          <Form.Item
            label="Gender"
            name="gender"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              name="gender"
              placeholder={this.state.gender}
              onChange={this.Genderchanges}
              style={{ width: '120px' }}
            />
          </Form.Item>
           <Form.Item
            label="Event"
            name="event"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              name="event"
              placeholder={this.state.event}
              onChange={this.Eventchanges}
              style={{ width: '120px' }}
            />
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default ArrestWarrant;
