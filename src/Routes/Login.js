import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Col } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    height: 300,
  },
});

function valuetext(value) {
  return `${value} years`;
}

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 10,
    label: '1',
  },
  {
    value: 20,
    label: '2',
  },
  {
    value: 30,
    label: '3',
  },
  {
    value: 40,
    label: '4',
  },
  {
    value: 50, 
    label:'5',
  },
  {
    value: 60,
    label:'6',
  },
  {
    value: 70,
    label:'7',
  },
  {
    value: 80,
    label:'8',
  },
  {
    value:90, 
    label: '9',
  },
  {
    value:100,
    label: '10',
  }
];

export default function Login() {
  const classes = useStyles();
  return (
    <>
    {/* <------------------------FORM FIELDS---------------------------->*/}
    <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

{/* <------------------------------SLIDERS-----------------------------------> */}
  <Typography id="vertical-slider" gutterBottom>
        Years of experience
      </Typography>
      <div className={classes.root}>
        <Slider
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={30}
          aria-labelledby="vertical-slider"
        />
        <Slider
          
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={30}
          aria-labelledby="vertical-slider"
        />
        <Slider
          orientation="vertical"
          defaultValue={30}
          aria-labelledby="vertical-slider"
          getAriaValueText={valuetext}
          marks={marks}
        />
      </div>
</>

  );
}