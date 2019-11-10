import React from 'react';
import './DisplayItem.css';
import img1 from './images/test1.png';
import img2 from './images/test2.png';
import img3 from './images/test3.png';
import lrg1 from './images/large1.png';
import lrg2 from './images/large2.png';
import lrg3 from './images/large3.png';
import apparel1 from './images/apparel1.png';
import pop1 from './images/pop1.png';
import pop2 from './images/pop2.png';
import powerbank1 from './images/powerbank1.png';
import powerbank2 from './images/powerbank2.png';


const largePath = {
tshirt: lrg1,
longsleeve: lrg2,
hoodie: lrg3,
pop: pop2,
power: powerbank2
}



class DisplayItem extends React.Component {

    state = {
    imageType: 'tshirt',
    apparelMode: true
    }

    swapImage = (imgNum) => {
        this.setState(state => ({ imageType: imgNum }))
        if (imgNum == 'pop' || imgNum == 'power'){
          this.setState(state => ({ apparelMode: false }))
        }
        else {
          this.setState(state => ({ apparelMode: true }))
        }

    }


    getImageNum = () => this.state.imageType


    render() {
        const imageNum = this.getImageNum();
        const modeType = this.state.apparelMode;

        let display1, display2, display3;
        if (modeType) {
          display1 = <img style = {{maxWidth: '100px'}} src = {img1} onClick={() => this.swapImage('tshirt')} />;
          display2 = <img style = {{maxWidth: '100px'}} src = {img2} onClick={() => this.swapImage('longsleeve')} />;
          display3 = <img style = {{maxWidth: '100px'}} src = {img3} onClick={() => this.swapImage('hoodie')} />;
            }

        return (

                <div className='tempStyling'>

                <div className='leftBar'>
                  <img style = {{maxWidth: '75px'}} src = {apparel1} onClick={() => this.swapImage('tshirt')} />
                  <img style = {{maxWidth: '75px'}} src = {pop1} onClick={() => this.swapImage('pop')}  />
                  <img style = {{maxWidth: '75px'}} src = {powerbank1} onClick={() => this.swapImage('power')}/>
                </div>

                <div className='centerImage'>
                <img style = {{maxWidth: '200px'}} src = {largePath[imageNum]} />
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
