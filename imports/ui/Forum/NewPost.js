import React, { Component } from 'react';
import { Panel, Button, FormGroup, ControlLabel, FormControl, Modal } from 'react-bootstrap';
import FieldGroup from 'react-bootstrap';


export default class NewPost extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false
        };
    }


    handleClose() {
      this.setState({ show: false });
    }
    
    handleShow() {
      this.setState({ show: true });
    }

  render() {
    function FieldGroup({ id, label, help, ...props }) {
        return (
            <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
            </FormGroup>
        );
    }
    return (
        <div>
            
            <Button bsStyle="success" onClick={this.handleShow}>
                New post
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New post form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FieldGroup
            id="formControlsText"
            type="text"
            label="Text"
            placeholder="Enter text"
            />
            <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Textarea</ControlLabel>
            <FormControl componentClass="textarea" placeholder="textarea" />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Submit</Button>
          </Modal.Footer>
        </Modal>
        </div>
    );
  }
}
