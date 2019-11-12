import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import './HomeModal.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import packageData from '../../data/packages';
import CardObject from '../../components/CardObject/CardObject.js'

export default class HomeModal extends React.Component {

  constructor(props) {
      super(props);
      this.state = { modal: false};
      this.toggle = this.toggle.bind(this);
  }

  toggle() {
      this.setState({
        modal: !this.state.modal
      });
  }
  render() {
    console.log(this.props)
    console.log(this.props.id)
    return (
      <div>

      <Button className='button blueGradient m30Top' onClick={this.toggle}>See More</Button>
      <Modal size="lg" isOpen={this.state.modal}>
        <ModalHeader>
          <div className='header'>
            Trade Show Basics
          <Button className='modalbutton' align='right' close onClick={this.toggle}>
          <img src={require("../../assets/closebutton.png")} width="40"></img>
          </Button>
          </div>
        </ModalHeader>

            <ModalBody>
            <Row>
              {packageData[this.props.id - 1].items.map((item) =>
                <Col lg>
                  <CardObject data={item} />
                </Col>
              )}
            </Row>
            </ModalBody>
      </Modal>
      </div>
    )
  }
}
