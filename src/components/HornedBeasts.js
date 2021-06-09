import React from 'react';

import Card from 'react-bootstrap/Card'

// import Modal from 'react-bootstrap/Modal'


class HornedBeasts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.props.giveInc();
        let tempCount=this.state.count;

        this.setState({
            count: tempCount += 1
        })
    }
    render() {
        return (

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" onClick={()=>{
                    this.increment();
                    this.props.handleModel(this.props);
                }} src={this.props.img} alt={this.props.title}/>
                <Card.Body>
                    <Card.Title> {this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <Card.Text>👀{this.state.count}</Card.Text>
                 
                </Card.Body>
            </Card>

        )

    }
}


export default HornedBeasts;