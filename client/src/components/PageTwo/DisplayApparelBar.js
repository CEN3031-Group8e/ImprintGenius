import React from 'react';
import tshirtIcon from '../../assets/test1.png';
import longsleeveIcon from '../../assets/test2.png';
import hoodieIcon from '../../assets/test3.png';
import tshirt from '../../assets/large1.png';
import longsleeve from '../../assets/large2.png';
import hoodie from '../../assets/large3.png';
import apparelIcon from '../../assets/apparel1.png';
import popsocketIcon from '../../assets/pop1.png';
import popsocket from '../../assets/pop2.png';
import powerbankIcon from '../../assets/powerbank1.png';
import powerbank from '../../assets/powerbank2.png';

const largePath = {
  tshirt: tshirt,
  longsleeve: longsleeve,
  hoodie: hoodie,
  popsocket: popsocket,
  powerbank: powerbank
}


class DisplayApparelBar extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          imageType: 'tshirt', //Which large image being displayed
          apparelMode: true, //Checks if user is on apparel mode or not (popsocket, etc.)
          clicked: true
      };

  }


    render() {

      if (this.state.apparelMode == true) {
        return (
          <div>
          <img style = {{maxWidth: '100px'}} src = {tshirtIcon}  onClick={() => {this.state.imageType= 'tshirt'; this.props.updateBar('tshirt'); this.state.clicked = false; }} />
          <img style = {{maxWidth: '100px'}} src = {longsleeveIcon} onClick={() => {this.state.imageType= 'longsleeve'; this.props.updateBar('longsleeve'); this.state.clicked = false;}}/>
          <img style = {{maxWidth: '100px'}} src = {hoodieIcon} onClick={() => {this.state.imageType= 'hoodie'; this.props.updateBar('hoodie'); this.state.clicked = false; }} />
          </div>
        );
      }
      else {
        return <div>Out of apparel mode</div>;
      }

        return (
          <div></div>

                );
    }
}

export default DisplayApparelBar;
