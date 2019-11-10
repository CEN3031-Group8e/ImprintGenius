import React from 'react';
import './DisplayItem.css';
import img1 from './images/test1.png';
import img2 from './images/test2.png';
import img3 from './images/test3.png';
import lrg1 from './images/large1.png';
import lrg2 from './images/large2.png';
import lrg3 from './images/large3.png';


const largePath = {
one: lrg1,
two: lrg2,
three: lrg3
}


class DisplayItem extends React.Component {

    state = {
    size: 'one'
    }


    swapImage = (imgnum) => {

        this.setState(state => ({ size: imgnum }))

    }

    getImageNum = () => this.state.size

    render() {
        const imageNum = this.getImageNum();

        return (
                <div className='tempStyling'>


                <div>
                <img style = {{maxWidth: '200px'}} src = {largePath[imageNum]} />

                </div>


                <div>
                <img style = {{maxWidth: '100px'}} src = {img1} onClick={() => this.swapImage('one')} />
                <img style = {{maxWidth: '100px'}} src = {img2} onClick={() => this.swapImage('two')} />
                <img style = {{maxWidth: '100px'}} src = {img3} onClick={() => this.swapImage('three')} />

                </div>
                </div>



                );
    }
}

//const rootElement = document.getElementById("root");

export default DisplayItem;
