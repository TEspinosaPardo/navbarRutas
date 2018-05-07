import React, { Component } from 'react';
import { Panel, Button, FormGroup, ControlLabel, FormControl, Modal } from 'react-bootstrap';
import FieldGroup from 'react-bootstrap';
import ReactDOM from 'react-dom';


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
      //event.preventDefault();
      this.setState({ show: false });
      // Find the text field via the React ref
      //const title = ReactDOM.findDOMNode(this.refs.title).value.trim();  
      //const content = ReactDOM.findDOMNode(this.refs.content).value.trim(); 

      //Tasks.insert({
      //  title,
      //  content,
      //  pinned,
      //  createdAt: new Date(), // current time
      //});

      // Clear form
      //ReactDOM.findDOMNode(this.refs.title).value = '';
      //ReactDOM.findDOMNode(this.refs.content).value = '';
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
        <form>
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
                <FormControl componentClass="textarea" placeholder="textarea"/>
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Submit</Button>
            </Modal.Footer>
          </Modal>
        </form>
        </div>
    );
  }
}
