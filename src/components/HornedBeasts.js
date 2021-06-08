import React from 'react';


class HornedBeasts extends React.Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increment = ()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <div>
                    <h2>
                        {this.props.title}
      </h2>
                    <img onClick={this.increment} src={this.props.img} alt={this.props.title}></img>
                    <p>
                      {this.props.description}
      </p>
      <h3> 👀{this.state.count}</h3>
                </div>
     



                </div>


            

        )
    }
}


export default HornedBeasts;