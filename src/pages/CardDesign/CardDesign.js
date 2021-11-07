/* eslint-disable */
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { ReactComponent as CardSvg } from '../../Assets/images/leafy.svg';

import { Form, Input, Button, Checkbox } from 'antd';

import './CardDesign.scss';

function CardPrint() {
  const componentRef = useRef();
  return (
    <div className="border-page">
      <ReactToPrint
        trigger={() => (
          <button className="card-edit-elements">Print this Card!</button>
        )}
        content={() => componentRef.current}
      />
      <CardSvg
        style={{ width: '400px', marginLeft: '40%', fontSize: '70px' }}
        ref={componentRef}
      />
      <CardDesign />
    </div>
  );
}
export class CardDesign extends React.Component {
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
    document.getElementById(event.target.name).textContent = event.target.value;
  };

  render() {
    return (
      <div>
        <p className="card-heading-for-field-editing">
          You can Edit Your Card fields here:
        </p>
        <div style={{ marginTop: '-10px', marginLeft: '-190px' }}>
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
                name="bride"
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
                name="groom"
                onChange={this.onInputchange}
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
                onChange={this.onInputchange}
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
                onChange={this.onInputchange}
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
                onChange={this.onInputchange}
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
                onChange={this.onInputchange}
                style={{ width: '120px' }}
              />
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
export default CardPrint;
