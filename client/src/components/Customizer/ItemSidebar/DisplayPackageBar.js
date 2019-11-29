import React from 'react';

import apparelIcon from '../../../assets/apparelIcon.png';
import bottleIcon from '../../../assets/bottleIcon.png';
import cableIcon from '../../../assets/cableIcon.png';
import notebookIcon from '../../../assets/notebookIcon.png';
import penIcon from '../../../assets/penIcon.png';
import stickerIcon from '../../../assets/stickerIcon.png';
import walletIcon from '../../../assets/walletIcon.png';


const smallPath = {
  tshirt: apparelIcon,
  bottle: bottleIcon,
  cable: cableIcon,
  notebook: notebookIcon,
  pen: penIcon,
  sticker: stickerIcon,
  wallet: walletIcon
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
    let packitems = ["tshirt", "bottle", "cable", "notebook", "pen", "sticker", "wallet" ];

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
