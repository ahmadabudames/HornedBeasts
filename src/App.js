
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import hornedbeastsData from './components/data.json'
import SelectModal from './components/SelectModal';
import Forms from './components/Forms';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      SelectModalProps: {}
    }
  };

  handleModel = (lastProps) => {
    this.setState({
      show: !this.state.show,
      SelectModalProps: lastProps
    })
  }
  render() {
    return (
      <div>
        <Header />
        < Main
          hornedbeastsData={hornedbeastsData}
          handleModel={this.handleModel}
        />  
           
        <SelectModal
        show={this.state.show}
        SelectModalProps={this.state.SelectModalProps}
        />
     
        <Footer />
      </div>
    )
  }
}


export default App;
