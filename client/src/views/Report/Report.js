import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import PackageReport from '../../components/PackageReport/PackageReport.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from "react-router-dom";
import './Report.css';

class Report extends Component {

  render() {
    console.log(this.props);
	return (
    <div>
      <PackageReport selectedImage={this.props.selectedImage} selectedImageTwo={this.props.selectedImageTwo}
      allApparelColorsChosen={this.props.allApparelColorsChosen} allPromoColorsChosen={this.props.allPromoColorsChosen}
      allApparelSizes={this.props.allApparelSizes}></PackageReport>
    </div>
	)
  }

}

export default withRouter(Report);
