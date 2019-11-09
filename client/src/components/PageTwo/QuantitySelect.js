import React from 'react';
import QuantityForm from '../../components/PageTwo/QuantityForm.js';

import './QuantitySelect.css';

// https://stackoverflow.com/questions/55453192/selecting-multiple-options-in-reactjs

class QuantitySelect extends React.Component 
{
    constructor() {
        super();
        this.state = { 
            colorsArr: [] ,
            totalItems: 0,
            sizeArr: [] //XS-XXL, so length=6
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
            //data seems to be passing correctly 
            //need to run more tests
            //from form to select to app
            //clean up logger
            console.log("post set, sizerArr");
            console.log( this.state.sizeArr);
        }) 
    }

    render() {
		return(
        <div>
            <h2> Quantity Select Componenent</h2>
            {console.log("colorsArr is:")}
            {console.log(this.props.colorsArr)}
            {"(in QuantitySelect) the color count is "+ this.props.colorsArr.length}
            
            <QuantityForm updateSelect={this.updateSizes}/>
        </div>
        );
    }    
}


export default QuantitySelect;
