/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Row, Col, Form } from 'antd';
import one from './c1.jpg';
import two from './c2.png';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #A52A2A 30%, #00008B 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    '&:hover': {
      color: 'black',
    },
  },
});

const InputData = ({ match }) => {
  const classes = useStyles();
  const history = useHistory();
  const [s, sets] = useState();
  const [temp, settemp] = useState('');
  const [field, setfield] = useState({
    bname: '',
    gname: '',
    bfname: '',
    gfname: '',
    venue: '',
    ftype: '',
    dtime: '',
    error: '',
    tempno: '',
  });

  useEffect(async () => {
    if (match.params.temp === 1) {
      sets(one);
      setfield({ ...field, tempno: '1' });
    } else if (match.params.temp === 2) {
      sets(two);
      setfield({ ...field, tempno: '2' });
    }
  }, [match.params.temp]);

  const editor = () => {
    if (!field.bname) {
      setfield({ ...field, error: 'Enter Bride Name' });
    } else if (!field.gname) {
      setfield({ ...field, error: 'Enter Groom Name' });
    } else if (!field.bfname) {
      setfield({ ...field, error: 'Enter Bride Father Name' });
    } else if (!field.ftype) {
      setfield({ ...field, error: 'Enter Function Type' });
    } else if (!field.fdate) {
      setfield({ ...field, error: 'Enter Function Date' });
    } else if (!field.dtime) {
      setfield({ ...field, error: 'Enter Fumction Time' });
    } else if (!field.venue) {
      setfield({ ...field, error: 'Enter Venue' });
    } else {
      history.push({ pathname: '/Templates', field });
    }
  };

  return (
    <div>
      <h3 style={{ marginTop: '5%' }}>Please enter the following fields</h3>

      <form className="sign-field">
        <Row>
          <Col>
            <Form.Control
              placeholder="Bride name"
              value={field.bname}
              onChange={(e) => setfield({ ...field, bname: e.target.value })}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Groom name"
              value={field.gname}
              onChange={(e) => setfield({ ...field, gname: e.target.value })}
            />
          </Col>
        </Row>
        <Row className="sign-field">
          <Col>
            <Form.Control
              placeholder="Bride's Father name"
              value={field.bfname}
              onChange={(e) => setfield({ ...field, bfname: e.target.value })}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Function Type"
              value={field.ftype}
              onChange={(e) => setfield({ ...field, ftype: e.target.value })}
            />
          </Col>
        </Row>
        <Row className="sign-field">
          <Col>
            <Form.Control
              placeholder="Venue"
              value={field.venue}
              onChange={(e) => setfield({ ...field, venue: e.target.value })}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Function Date"
              value={field.fdate}
              onChange={(e) => setfield({ ...field, fdate: e.target.value })}
            />
          </Col>
        </Row>
        <Row className="sign-field">
          <Col>
            <Form.Control
              className="sign-up"
              placeholder="Function Time"
              value={field.dtime}
              onChange={(e) => setfield({ ...field, dtime: e.target.value })}
            />
          </Col>
        </Row>
        <h6 style={{ color: 'red' }}>{field.error}</h6>
        <Row>
          <button
            type="submit"
            className={classes.root}
            style={{ marginTop: '10px', marginLeft: '500px' }}
            onClick={editor}
          >
            Submit
          </button>
        </Row>
      </form>
    </div>
  );
};

export default InputData;
