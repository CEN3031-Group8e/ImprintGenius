import React from 'react';
import './DisplayItem.css';
import img1 from '../../assets/test1.png';
import img2 from '../../assets/test2.png';
import img3 from '../../assets/test3.png';
import lrg1 from '../../assets/large1.png';
import lrg2 from '../../assets/large2.png';
import lrg3 from '../../assets/large3.png';
import apparel1 from '../../assets/apparel1.png';
import pop1 from '../../assets/pop1.png';
import pop2 from '../../assets/pop2.png';
import powerbank1 from '../../assets/powerbank1.png';
import powerbank2 from '../../assets/powerbank2.png';

//Updates which large image is displayed
const largePath = {
tshirt: lrg1,
longsleeve: lrg2,
hoodie: lrg3,
pop: pop2,
power: powerbank2
}



class DisplayItem extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          imageType: 'shirt', //Which large image being displayed
          apparelMode: true, //Checks if user is on apparel mode or not (popsocket, etc.)
          clicked: true
      };

  }

    //Hide apparel types (tshirt, etc.) when user selects other merch type
    swapImage = (imgNum) => {
        this.setState(state => ({ imageType: imgNum }))
        if (imgNum == 'pop' || imgNum == 'power'){
          this.setState(state => ({ apparelMode: false }))
        }
        else {
          this.setState(state => ({ apparelMode: true }))
        }

    }

    //Display image even if user hasnt clicked yet
    ifClicked = (clicked) => {

      if (clicked) {
      return <img style = {{maxWidth: '200px'}} src = {largePath['tshirt']} />;
      }
      else {
      return   <img style = {{maxWidth: '200px'}} src = {largePath[this.state.imageType]} />;
      }

    }


    render() {
        const modeType = this.state.apparelMode;

        let display1, display2, display3;
        if (modeType) {
          display1 = <img style = {{maxWidth: '100px'}} src = {img1} onClick={() => {this.swapImage('tshirt'); this.props.updateDisplay('tshirt'); this.state.clicked = false; }} />;
          display2 = <img style = {{maxWidth: '100px'}} src = {img2} onClick={() => {this.swapImage('longsleeve'); this.props.updateDisplay('longsleeve'); this.state.clicked = false;}} />;
          display3 = <img style = {{maxWidth: '100px'}} src = {img3} onClick={() => {this.swapImage('hoodie'); this.props.updateDisplay('hoodie'); this.state.clicked = false; }} />;
            }

        return (

                <div className='tempStyling'>

                <div className='leftBar'>
                  <img style = {{maxWidth: '75px'}} src = {apparel1} onClick={() => {this.swapImage('tshirt'); this.props.updateDisplay('tshirt'); this.state.clicked = false; }} />
                  <img style = {{maxWidth: '75px'}} src = {pop1} onClick={() => {this.swapImage('pop'); this.props.updateDisplay('pop'); this.state.clicked = false;}}  />
                  <img style = {{maxWidth: '75px'}} src = {powerbank1} onClick={() => {this.swapImage('power'); ; this.props.updateDisplay('powerbank2'); this.state.clicked = false;}}/>
                </div>

                <div className='centerImage'>
                {this.ifClicked(this.state.clicked)}
                </div>

                <div className='bottomBar'>
                {display1}
                {display2}
                {display3}
                </div>

                </div>


                );
    }
}

export default DisplayItem;
