import React from 'react';
import HornedBeasts from './HornedBeasts';
import hornedbeastsData from './data.json'


class Main extends React.Component {
  render() {

    return (
      <div>
        {
          hornedbeastsData.map((beasts) => {
            return (
              <HornedBeasts
                title={beasts.title}
                img={beasts.image_url}
                discription={beasts.description}
              />
            )
          })
        }
      </div>
    )
  }
}


export default Main;