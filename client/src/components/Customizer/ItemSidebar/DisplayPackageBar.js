import React from 'react';
import apparelIcon from '../../../assets/apparel1.png';
import popsocketIcon from '../../../assets/pop1.png';
import powerbankIcon from '../../../assets/powerbank1.png';


const smallPath = {
  tshirt: apparelIcon,
  popsocket: popsocketIcon,
  powerbank: powerbankIcon
}



class DisplayApparelBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageType: 'tshirt', //Which large image being displayed
      apparelMode: true, //Checks if user is on apparel mode or not (popsocket, etc.)
    };

  }

  clickHandler(image) {
    this.state.imageType= image;
    this.props.updatePackBar(image);
  }

  render() {
    let packitems = ["tshirt", "popsocket", "powerbank"];

    return (
      <div>
      {packitems.map((image) =>
        <div className='packItem'>
        <img style = {{maxWidth: '140px'}} key={image} src={smallPath[`${image}`]}
        onClick={() => {this.clickHandler(`${image}`);}}/>
        </div>
      )}
      </div>

    );
  }
}

export default DisplayApparelBar;
