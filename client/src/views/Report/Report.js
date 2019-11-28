import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from "react-router-dom";
import './Report.css';
import * as emailjs from 'emailjs-com'
const config =  require('../../config.js');


class Report extends Component {


  constructor(props) {
	super(props);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
    <div>
    	<h1>Let's see if it works</h1>
    	<input type="button" value="Submit" onClick={this.handleSubmit} />
    </div>
	)
  }

  handleSubmit (event) {
    var templateParams = {
      from_name: 'imprintreport@gmail.com',
      to_name: 'imprintreport@gmail.com',
      subject: 'this is a subject',
      message_html: 'some message?'
    }
    emailjs.send(config.email.serviceid,config.email.templateid, templateParams, config.email.userid);
  }

}

export default withRouter(Report);
