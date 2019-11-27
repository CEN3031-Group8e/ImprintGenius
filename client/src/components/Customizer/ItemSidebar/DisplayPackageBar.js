import React from 'react';

import apparelIcon from '../../../assets/apparelIcon.pdf';
import bottleIcon from '../../../assets/bottleIcon.pdf';
import cableIcon from '../../../assets/cableIcon.pdf';
import notebookIcon from '../../../assets/notebookIcon.pdf';
import penIcon from '../../../assets/penIcon.pdf';
import stickerIcon from '../../../assets/stickerIcon.pdf';
import walletIcon from '../../../assets/walletIcon.pdf';


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
