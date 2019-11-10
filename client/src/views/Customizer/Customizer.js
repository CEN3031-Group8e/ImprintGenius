import React, { Component } from 'react';
import './Customizer.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import '../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UpArrow from '../../assets/upArrow.png' // relative path to image
import DownArrow from '../../assets/downArrow.png' // relative path to image
import Shirt from '../../assets/shirt.png' // relative path to image

class Customizer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        selectedPackage: this.props.location
      }
    }

    render() {
      const { data } = this.props.location;

      return (
        <div>
          <Container className='' fluid={true}>
            <Row>
              <Col md={2}>
                <div className='itemSidebar'>
                  <h3 className='sidebarTitle'>Package Items</h3>
                  <img src={UpArrow} className='arrow m30Top'></img>
                  <div className='itemContainer'>
                    {data.items.map((item) =>
                      <div className='packItem'>

                      </div>
                    )}
                  </div>
                  <img src={DownArrow} className='arrow m30Top'></img>
                  <p className='m30Top greenLink'>View All</p>
                  <p className='greenLink'>View Unfinished</p>
                </div>
              </Col>
              <Col md={5}>
                <img src={Shirt} className='shirtImg'></img>
              </Col>
              <Col md={5}>
                <div className='itemControls'>
                  <h3 className='blackText customizeTitle'>T-Shirt</h3>
                  <div className='buttonContainer'>
                    <div className='itemControlButton'>
                      Upload
                    </div>
                    <div className='itemControlButton borderTop'>
                      Colors
                    </div>
                    <div className='itemControlButton borderTop'>
                      Quantity
                    </div>
                    <div className='itemControlButton borderTop'>
                      Help
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
}

export default Customizer;
