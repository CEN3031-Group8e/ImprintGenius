import React from 'react';
import HomeModal from '../../components/HomeModal/HomeModal.js'
import { Link } from 'react-router-dom';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText, FormFeedback
} from 'reactstrap';
import Row from 'react-bootstrap/Row';
import Col2 from 'react-bootstrap/Row';
import { Switch, Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import packageData from '../../data/packageinfo';
import Container2 from 'react-bootstrap/Container';
import * as emailjs from 'emailjs-com'
import './PackageReport.css';
import { Client } from '@rmp135/imgur';

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
            <Row>
              {this.props.allApparelSizes.map((item) =>
                <Col lg>
                  {item.type} : {this.DisplayApparel(item)}
                </Col>
              )}
            </Row>
            <Row>
            {this.props.allPromoColorsChosen.map((item) =>
              <Col lg>
                {item.type} : <button className = "btn btn-circle" style = {{background : item.colorsChosen[0]}}></button>
                {/*{item.type} : {item.colorsChosen[0]}*/}
              </Col>
            )}
            </Row>
            <Button className='button greenGradient m15Top overflowHalf' onClick={this.handleSubmit.bind(this)}>
              Confirm Order
            </Button>
        </div>
      </Container2>

    );
  }

  DisplayApparel(item)
  {


    return(
      <div>
        {item.allSizes.map((color) =>
        <div>
               <button className = "btn btn-circle" style = {{background : color.color}}></button>
               <p>{color.formCount}</p>
          </div>
        )}
      </div>
    )


  }


  handleSubmit () {
    // make message stuff
    console.log(this.props);
    var sizes  = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"];
    var sizes2  = ["S", "M", "L", "XL", "2XL", "3XL", "4XL"];
    var message = "";
    message += "---------APPAREL ITEMS---------<br>"
    this.props.allApparelSizes.forEach(function(apparel){ // each apparel
      message +=  apparel.type + ":<br>";
      apparel.allSizes.forEach(function(color){ // each color
        message +=  "Color: " + color.color + "<br>";
        for (var i = 0; i < color.sizes.length; i++) {
          if (color.sizes[i] > 0) {
            if (apparel.type === "longsleeve") {
              message +=  "   " + sizes2[i] + ": " + color.sizes[i] + " <br>";
            } else {
              message +=  "   " + sizes[i] + ": " + color.sizes[i] + " <br>";
            }
          }
        }
      });
    });
    message += "---------PROMO ITEMS---------<br>";
    this.props.allPromoColorsChosen.forEach(function(promo){ // each promo
      message +=  promo.type + ": ";
      message +=  promo.colorsChosen[0] + "<br>";
    });
    console.log(message)
    // make image url
    let client = new Client(config.imgur.clientid)

    var image = this.props.selectedImage;
    image = image.replace("data:image/png;base64,", "");
    image = image.replace("data:image/jpeg;base64,", "");
    image = image.replace("data:image/jpg;base64,", "");

    var image2 = this.props.selectedImageTwo;
    image2 = image2.replace("data:image/png;base64,", "");
    image2 = image2.replace("data:image/jpeg;base64,", "");
    image2 = image2.replace("data:image/jpg;base64,", "");

    var imageLink1 = '';
    var imageLink2 = '';
    //(async () => {
    //  data = await client.Image.upload(image, { type: 'base64'});
    //})();
    client.Image.upload(image, { type: 'base64'}).then(function (json) {
        //console.log(json.data.link)
        //console.log(json.data.link);
        imageLink1 = json.data.link;
    })
    .catch(function (err) {
        console.error(err.message);
    });
    let me = this;
    client.Image.upload(image2, { type: 'base64'}).then(function (json) {
        //console.log(json.data.link);
        imageLink2 = json.data.link;
        var templateParams = {
        message_html: message,
        name: me.state.name,
        number: me.state.number,
        zip: me.state.zipcode,
        email: me.state.email,
        info: me.state.info,
        image1: imageLink1,
        image2: imageLink2,
      }
      emailjs.send(config.email.serviceid, config.email.templateid, templateParams, config.email.userid);
    })
    .catch(function (err) {
        console.error(err.message);
    });
  }

}

export default withRouter(PackageReport);
