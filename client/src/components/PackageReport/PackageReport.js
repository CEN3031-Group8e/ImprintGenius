import React from 'react';
import HomeModal from '../../components/HomeModal/HomeModal.js'
import { Link } from 'react-router-dom';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText, FormFeedback
} from 'reactstrap';
import { Switch, Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import packageData from '../../data/packageinfo';
import Container2 from 'react-bootstrap/Container';
import * as emailjs from 'emailjs-com'
import './PackageReport.css';

const config =  require('../../config.js');

class PackageReport extends React.Component {

  constructor(props) {
      super(props);
        this.state = {
        'name': '',
        'email': '',
        'number': '',
        'zipcode': '',
        'info' : '',
        validate: {
          emailState: '',
          numberState: '',
        },
      }
      this.handleChange = this.handleChange.bind(this);
    }

    validateEmail(e) {
      const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const { validate } = this.state
        if (emailRex.test(e.target.value)) {
          validate.emailState = 'has-success'
        } else {
          validate.emailState = 'has-danger'
        }
        this.setState({ validate })
      }


      validatePhone(e) {
        const phoneno = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
        const { validate } = this.state
          if (phoneno.test(e.target.value)) {
            validate.numberState = 'has-success'
          } else {
            validate.numberState = 'has-danger'
          }
          this.setState({ validate })
        }
    handleChange = async (event) => {
      const { target } = event;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const { name } = target;
      await this.setState({
        [ name ]: value,
      });
    }

	render() {
		console.log(this.props);
    const { name, email, number, zipcode, info} = this.state;
    return (

      <Container2 className='packagesContainer' fluid={true}>
      <h2>Contact Info</h2>
      <Form className="form" onSubmit={ (e) => this.submitForm(e) }>
        <Col>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="myemail@email.com"
              value={ email }
              valid={ this.state.validate.emailState === 'has-success' }
              invalid={ this.state.validate.emailState === 'has-danger' }
              onChange={ (e) => {
                          this.validateEmail(e)
                          this.handleChange(e)
                        } }
            />
            <FormFeedback valid>
              Looking good!
            </FormFeedback>
            <FormFeedback>
              Looks like there is an issue with your email.
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="name"
            name="name"
            placeholder="John Deere"
            value={ name }
            onChange={ (e) => {
                        this.handleChange(e)
                      } }
          />
          </FormGroup>
        </Col>
        <Col>
        <FormGroup>
          <Label>Zipcode</Label>
          <Input
            type="zipcode"
            name="zipcode"
            placeholder="32612"
            value={ zipcode }
            onChange={ (e) => {
                        this.handleChange(e)
                      } }
          />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Phone Number</Label>
            <Input
              type="number"
              name="number"
              placeholder="YYYXXXZZZZ"
              value={ number }
              valid={ this.state.validate.numberState === 'has-success' }
              invalid={ this.state.validate.numberState === 'has-danger' }
              onChange={ (e) => {
                          this.validatePhone(e)
                          this.handleChange(e)
                        } }
            />
            <FormFeedback valid>
              Looking good!
            </FormFeedback>
            <FormFeedback>
              Looks like there is an issue with your phone number.
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Any additional concerns?</Label>
            <Input
              type="textarea"
              name="info"
              value={ info }
              onChange={ (e) => {
                          this.handleChange(e)
                        } }
            />
          </FormGroup>
        </Col>
    </Form>
        <div className='packageCol m50TopSm'>
            <div className='packageHeader'>
              {packageData[0].name}
            </div>
            <Button className='button greenGradient m15Top overflowHalf' onClick={this.handleSubmit.bind(this)}>
              Confirm Order
            </Button>
        </div>
      </Container2>

    );
	}

  handleSubmit () {
    // make message stuff

    // make image url

    var templateParams = {
      message_html: 'nothing for now!',
      name: this.state.name,
      number: this.state.number,
      zip: this.state.zipcode,
      email: this.state.email,
      info: this.state.info,
    }
    emailjs.send(config.email.serviceid, config.email.templateid, templateParams, config.email.userid);
  }

}

export default withRouter(PackageReport);
