import React from 'react';
import './QuantitySelect.css';

// https://stackoverflow.com/questions/55453192/selecting-multiple-options-in-reactjs

class QuantitySelect extends React.Component 
{
    constructor() {
        super();
        //this.handleButton = this.handleButton.bind(this);
        this.state = { 
            colorsArr: [] }
    }    
    render() {
       //const  colorCount = this.props;
		return(
        <div>
            <h2> Quantity</h2>
            {console.log("colorsArr is:")}
            {console.log(this.props.colorsArr)}
            {"in QuantitySelect the value is "+ this.props.colorsArr.length}
            
        </div>
        );
    }    
}

export default QuantitySelect;
