import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


export class SelectModal extends Component {

  render() {

    return (
      <div>


        <Modal show={this.props.show}>
          <Modal.Header>
            <Modal.Title>{this.props.SelectModalProps.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Card style={{ width: '18rem' }}>
              <Card.Img onClick={this.increment} variant="top" src={this.props.SelectModalProps.img} alt={this.props.SelectModalProps.title}/>
              <Card.Body>
                <Card.Title> {this.props.SelectModalProps.title}</Card.Title>
                <Card.Text>
                  {this.props.SelectModalProps.description}
                </Card.Text>

              </Card.Body>
            </Card>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleModel}>Close</Button>
           
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default SelectModal
