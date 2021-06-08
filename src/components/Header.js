import React from 'react';
import Nav from 'react-bootstrap/Nav'


class Header extends React.Component {
    render() {
        return (
            <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
          
           
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
           <h3>Horned Beasts 🦄</h3> 
              </Nav.Link>
            </Nav.Item>
          </Nav>
        )
    }
}


export default Header;
