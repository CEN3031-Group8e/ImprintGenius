import React from 'react';
import QuantityForm from '../../components/PageTwo/QuantityForm.js';

import './QuantitySelect.css';

// https://stackoverflow.com/questions/55453192/selecting-multiple-options-in-reactjs

class QuantitySelect extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = { 
            colors: this.props.colorsArr, //received from PageTwo (which pg2 received from ColorPicker)
            totalItems: 0, //will update from child Form ON CHANGE
            sizeArr: [], //XS-XXL, so length=6 , will update from child QuantityForm ON SUBMIT
            capacity: 100 //fixed atm (will be passed in from parent App.js to know which package was chosen)
        }
        this.updateSizes = this.updateSizes.bind(this);
    }    

    updateSizes(sizelist){
        console.log("sizeList");
        console.log(sizelist);
        
        this.setState(
            ({
            sizeArr: sizelist
        }),
        () => {
            console.log("post set, sizerArr");
            console.log( this.state.sizeArr);
        }) 
    }
    updateTotal(tot){
        console.log("tot in updateSum");
        console.log(tot);
        
        this.setState(
        ({
            totalItems: tot
        }),
        () => {
            console.log("post set, totalItems");
            console.log( this.state.totalItems);
        }) 
    }
    render() {
		return(
        <div>
            <h2> Quantity Select Componenent</h2>
            { //testing the array received from parent, PageTwo
             console.log("(in quantity select)colorsArr is:")}
            { console.log(this.state.colors) //get arr from parent, PageTwo
            } 

            {"(in QuantitySelect) the color count is "+ this.props.colorsArr.length}
            
            <QuantityForm currMissing={this.state.capacity} //send to child, Form
                          updateSum={this.updateTotal} updateArr={this.updateSizes}//update parent 
            /> 
        </div>
        );
    }    
}


export default QuantitySelect;
