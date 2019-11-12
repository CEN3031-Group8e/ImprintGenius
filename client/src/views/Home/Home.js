import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './Home.css';
import HomeModal from '../../components/HomeModal/HomeModal.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PackageColumn from "../../components/PackageColumn/PackageColumn"
import packageData from '../../data/packages';
import { withRouter } from "react-router-dom";

class Home extends Component {
    constructor(props) {
      super(props)
      this.state = {
        package: undefined
      }

      this.didSelectPackage = this.didSelectPackage.bind(this);
    }

    didSelectPackage(data) {
      this.setState({ package: data }, () => {
         this.props.didSelectPackage(this.state.package);
      });
    }

    render() {
      return (
        <div>
          <Container className='packagesContainer' fluid={true}>
            <Row>
              {packageData.map((item) =>
                <Col lg>
                  <PackageColumn data={item} didSelectPackage={this.didSelectPackage} />
                </Col>
              )}
            </Row>
          </Container>
        </div>
      );
    }

}

export default withRouter(Home);
