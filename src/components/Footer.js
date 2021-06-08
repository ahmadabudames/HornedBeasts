import React from 'react';
import Nav from 'react-bootstrap/Nav'

class Footer extends React.Component {
    render() {
        return (
            <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
          
           
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
           <h3>Done By Ahmad Abudames ✌️ </h3> 
              </Nav.Link>
            </Nav.Item>
          </Nav>
        )
    }
}


export default Footer;