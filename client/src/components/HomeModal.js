import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
    return (
      <div>
      <Button color="success" onClick={this.toggle}>React Modal</Button>
      <Modal isOpen={this.state.modal}>
        <Button close onClick={this.toggle}></Button>
        <ModalHeader>HELLO!</ModalHeader>
        <ModalBody>hello body!</ModalBody>
      </Modal>
      </div>
    )
  }
}

//export default HomeModal;
