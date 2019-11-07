import React from 'react';

import './ColorPicker.css';


const btnsList = [
    { id:0, name:"red", color: "#FF0000"},
    { id:1, name:"light-coral", color: "#F08080"},
    { id:2, name:"dark-orange", color: "#FF8C00"},
    { id:3, name:"maroon", color: "#800000"},
    { id:4, name:"gold", color: "#FFD700"},
    { id:5, name:"yellow-green", color: "#9ACD32"},
    { id:6, name:"forest-green", color: "#228B22"},
    { id:7, name:"dark-green", color: "#006400"},
    { id:8, name:"deep-sky-blue", color: "#00BFFF"},

    { id:9, name:"black", color: "#000000"},
    { id:10, name:"white", color: "#FFFFFF"},
    { id:11, name:"dark-blue", color: "#00008B"},
    { id:12, name:"indigo", color: "#4B0082"},
    { id:13, name:"dark-violet", color: "#9400D3"},
    { id:14, name:"deep-pink", color: "#FF1493"},
    { id:15, name:"pale-violet-red", color: "#DB7093"},
    { id:16, name:"midnight-blue", color: "#191970"},
    { id:17, name:"dodger-blue", color: "#1E90FF"}
]
class ColorPicker extends React.Component 
{

    constructor() {
        super();
        //this.handleButton = this.handleButton.bind(this);
        this.state = { 
            count: 0,
            btnVals: [] } //returns array of buttons currently pressed
    }
    
    handleButton = (button) => {
        let tempBtns = this.state.btnVals;
        
        if(tempBtns.includes(button)){ //if button already in list => remove
           //console.log("button #" + button + " ON -> OFF")
            this.setState((prevState) =>({
                    //keep all buttons that are not equal to btn just pressed
                    count: this.state.count - 1,
                    btnVals: tempBtns.filter(e => e !== button) 
                }),
                
                () => {
                    //callback, to check the updated state:
                    console.log("current length: " + this.state.count)
                }
            )
        }
        else if(this.state.count !== 3)
        {
            //console.log("button #" + button + " pressed! -> ON")
            tempBtns.push(button); //add to list ==> this button is pressed
            this.setState(
                ({ 
                    count: this.state.count + 1,
                    btnVals: tempBtns 
                }),
                () => {
                    //callback, to check the updated state:
                    console.log("current length: " + this.state.count)
                } 
            )
        }  
    } 
    render() {
		return(
            <div className="div-colorBox">
            { btnsList.map(btn => 
              (
                <button
                    key={ btn.id }
                    onClick={ () => {
                        this.handleButton(btn.id) ; 
                        
                        //console.log(btn.name + " clicked")
                        }
                    }
                    style={{background: btn.color}}
                    className={ 
                        //if btn exists in list => use btn press class, else btn
                        this.state.btnVals.includes(btn.id) ? "btn-press": "btn"
                    }>
                </button>
            ))}
            <div className="div-cnt">{this.state.count}/3 Colors Picked</div>

            </div>
        );
    }    
}

export default ColorPicker;
