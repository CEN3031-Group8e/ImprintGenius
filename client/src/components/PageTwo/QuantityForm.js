import React from 'react';
import './QuantityForm.css';

// https://stackoverflow.com/questions/55453192/selecting-multiple-options-in-reactjs

class QuantityForm extends React.Component 
{  
    constructor(props) {
        super(props);
        this.state = { 
            current: this.props.currMissing,
            colorBtn: this.props.color,
            sizes: []            
        }
    }    

    handleChange(e){
        
        let change = {}
        //old=change[e.target.name] 
        //current += old;
        //current -= e.target.value;
        
        //change[e.target.id] = e.target.value; //index using id assigned
        
        let newSizes = [...this.state.sizes];
        console.log("(old)newSizes:");
        console.log(newSizes);
        let newCurrent = this.state.current;
        newCurrent = (newCurrent) + Number(this.state.sizes[e.target.id]); //curr + oldVal
        
        console.log("current1:", parseInt(this.state.sizes[e.target.id]));
        newCurrent = newCurrent - e.target.value; //curr - newVal

        newSizes[e.target.id] = e.target.value;
        this.setState(
            (prevState)=>({
                //change
                sizes: newSizes,
                current:newCurrent

            }),
            ()=>{
            console.log("sizes:");
            console.log(this.state.sizes);
            // console.log("current:");
            // console.log(this.state.current);
        });
        console.log("handleChange:");
        console.log(change);
        

        //5
        //20
        //missing initialized to 20 (already there) missing = packageTotal
        //missing -=input (5)
        //
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //on submit, capture the form data and return
        var arr = this.state.sizes;
        console.log("arr in handleSubmit:");
        console.log(arr);

        this.props.updateSizes(this.state.sizes, this.state.colorBtn); //send to parent the arr submitted
        
        //clear texts
        this.setState({ 
           sizes: ''              
        });
    }

    render() {
		return(
        <div>
            {//<h2> Quantity Form Componenent</h2>
            }
            {"Current is: " + this.state.current}
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
