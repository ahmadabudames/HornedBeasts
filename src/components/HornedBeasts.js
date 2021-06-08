import React from 'react';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import Modal from 'react-bootstrap/Modal'


class HornedBeasts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (

            <Card style={{ width: '18rem' }}>
                <Card.Img onClick={this.increment} variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title> {this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <Button variant="primary">👀{this.state.count}</Button>
                </Card.Body>
            </Card>

        )

    }
}


export default HornedBeasts;