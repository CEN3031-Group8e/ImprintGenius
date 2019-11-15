import React from 'react';
import './QuantityForm.css';

// https://stackoverflow.com/questions/55453192/selecting-multiple-options-in-reactjs

class QuantityForm extends React.Component 
{  
    constructor(props) {
        super(props);
        this.state = { 
            missing: this.props.missing, //"missing"
            colorBtn: this.props.color,
            sizes: [], 
            singleTotal: 0,   //total sizes for that color  
            formID: this.props.id     
        }
    }    

    handleChange(e){
        if(isNaN(e.target.value))
            return;
        let change = {}
       
        let newSizes = [...this.state.sizes];
        //console.log("typeof",typeof newSizes[e.target.id] );
        //console.log("newSizes[e.target.id]", newSizes[e.target.id])
        var oldValue = newSizes[e.target.id];
        newSizes[e.target.id] = e.target.value; 
        var sum = 0;
        newSizes.map(size => {
            size = parseInt(size,10);
            if(!isNaN(size))
                sum += size;
        });

        this.props.updateCounter(this.state.formID, sum); 
        console.log("total from map: ",sum)
        this.setState(
            (prevState)=>({
                //change
                sizes: newSizes,
                singleTotal: sum 
            }),
            ()=>{
        });
        //Goal: find original value from sizes[i], add it back to total
        //Then subtract new value from sum
    }
    render() {
		return(
        <div>
            <form id="sizeForm" onSubmit={this.handleSubmit}>
                <div>XS 
                <input 
                    type="text" //text box
                    pattern="[0-9]*"
                    name="sizeXS"
                    id='0'
                    onChange={this.handleChange.bind(this)}
                    
                    value={this.state.sizes[0]} 
                    placeholder="#" 
                />
                </div>
                
                <div>S <input 
                    type="text" //text box
                    pattern="[0-9]*"
                    name="sizeS"
                    id='1'
                    onChange={this.handleChange.bind(this)} 
                    value={this.state.sizes[1]} 
                    placeholder="#" 
                /> </div>
                
                <div>M <input 
                    type="text" //text box
                    pattern="[0-9]*"
                    name="sizeM"
                    id='2'
                    onChange={this.handleChange.bind(this)} 
                    value={this.state.sizes[2]} 
                    placeholder="#" 
                /></div> 
                
                <div>L <input 
                    type="text" //text box
                    pattern="[0-9]*"
                    name="sizeL"
                    id='3'
                    onChange={this.handleChange.bind(this)} 
                    value={this.state.sizes[3]} 
                    placeholder="#" 
                />  </div>
                
                <div>XL <input 
                    type="text" //text box
                    pattern="[0-9]*"
                    name="sizeXL"
                    id='4'
                    onChange={this.handleChange.bind(this)} 
                    value={this.state.sizes[4]} 
                    placeholder="#" 
                /></div> 
                
                <div>XXL <input 
                    type="text" //text box
                    pattern="[0-9]*"
                    name="sizeXXL"
                    id='5'
                    onChange={this.handleChange.bind(this)} 
                    value={this.state.sizes[5]} 
                    placeholder="#" 
                /> </div>
                     
            </form>

        </div>
        );
    }    
}


export default QuantityForm;
