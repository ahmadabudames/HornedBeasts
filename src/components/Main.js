import React from 'react';
import Forms from './Forms';
import HornedBeasts from './HornedBeasts';



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  giveInc = () => {
    this.setState({
      count: this.state.count
    })
  }

  render() {

    return (
      <div>
        {
          this.props.hornedbeastsData.map((beasts) => {
            return (
              <div>
<div>
<Forms/>
  </div>
                <HornedBeasts
                
                  title={beasts.title}
                  giveInc={this.giveInc}
                  img={beasts.image_url}
                  description={beasts.description}
                  handleModel={this.props.handleModel}

                />
              </div>
            )
          })
        }
      </div>
    )
  }
}


export default Main;