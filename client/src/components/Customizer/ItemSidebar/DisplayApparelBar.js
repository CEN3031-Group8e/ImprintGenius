import React from 'react';
import tshirtIcon from '../../../assets/test1.png';
import longsleeveIcon from '../../../assets/test2.png';
import hoodieIcon from '../../../assets/test3.png';
// import apparelData from '../../../data/itemsData';

const smallPath = {
  tshirt: tshirtIcon,
  longsleeve: longsleeveIcon,
  hoodie: hoodieIcon
}


class DisplayPackageBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageType: 'tshirt', //Which large image being displayed
      apparelMode: true, //Checks if user is on apparel mode or not (popsocket, etc.)
    };

  }

  clickHandler(image) {
    this.state.imageType= image;
    this.props.updateBar(image);
  }


  render() {
    let apparelitems = ["tshirt", "longsleeve", "hoodie"];

    return (
      <div>
      {apparelitems.map((image) =>
        <img style = {{maxWidth: '140px'}} key={image} src={smallPath[`${image}`]}
        onClick={() => {this.clickHandler(`${image}`);}}/>
      )}
      </div>

    );
  }
}

export default DisplayPackageBar;
