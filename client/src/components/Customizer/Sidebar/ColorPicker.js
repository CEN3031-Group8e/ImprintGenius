import React from 'react';
import './ColorPicker.css';

// https://stackoverflow.com/questions/55453192/selecting-multiple-options-in-reactjs
const maxBtnCap = 3;
const btnsList = [
    { id:0, name:"red", number: "#FF0000"},
    { id:1, name:"light-coral", number: "#F08080"},
    { id:2, name:"dark-orange", number: "#FF8C00"},
    { id:3, name:"maroon", number: "#800000"},
    { id:4, name:"gold", number: "#FFD700"},
    { id:5, name:"yellow-green", number: "#9ACD32"},
    { id:6, name:"forest-green", number: "#228B22"},
    { id:7, name:"dark-green", number: "#006400"},
    { id:8, name:"deep-sky-blue", number: "#00BFFF"},

    { id:9, name:"black", number: "#000000"},
    { id:10, name:"white", number: "#FFFFFF"},
    { id:11, name:"dark-blue", number: "#00008B"},
    { id:12, name:"indigo", number: "#4B0082"},
    { id:13, name:"dark-violet", number: "#9400D3"},
    { id:14, name:"deep-pink", number: "#FF1493"},
    { id:15, name:"hot-pink", number: "#FF69B4"},
    { id:16, name:"midnight-blue", number: "#191970"},
    { id:17, name:"dodger-blue", number: "#1E90FF"},
    { id:18, name:"gray", number: "gray"}
]
function CntrText(count){
    if(count === maxBtnCap )
         return <div className="cnt">
             Color Limit Reached
         </div>
    else{
        return(
            <div className="cnt cntPckd" >
                    { count + "/" + maxBtnCap + " Colors Picked  "}
            </div>
        )
    }
}
class ColorPicker extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = { 
            btnVals: this.initChosenColors(this.props.colorsChosen)
        } //returns array of buttons currently pressed
       
    }
    initChosenColors(colorsArr){  //handle "includes" error of undefined in render
        if (colorsArr === undefined) //before clicking on a color
            return []
        else
            return colorsArr;            
    }
    
    handleButton = (btn) => {
        let tempBtns = this.state.btnVals;
        
        if(tempBtns.includes(btn)){ //if button already in list => remove
            this.setState((prevState) =>({
                    //keep all buttons that are not equal to btn just pressed
                    btnVals: tempBtns.filter(e => e !== btn) 
            }),
            () => {
                 }
            )
        }
        else if(this.state.btnVals.length !== maxBtnCap)
        {
            tempBtns.push(btn); //add to list ==> this button is pressed
            this.setState(
                ({ 
                    btnVals: tempBtns 
                }),
                () => {
                } 
            )
        } 
    } 
    
    render() {
		return(
        <div>
            <div className="colorPicker-box">
                <h2> Tultex 202 Fine Jersey</h2>
                <h4>Select 1-3 colors for your apparel</h4>
                <div className="palette-box">
                { btnsList.map(btn => 
                (
                    <button className="btn-menu"
                        key={ btn.id }
                        onClick={ () => {
                            this.handleButton(btn) ; 
                            this.props.updatePicker(this.state.btnVals); //update pageTwo (parent)
                            }
                        }
                        style={{background: btn.number}}
                        className={ 
                            //if btn exists in list => use btn press class, else btn
                            this.state.btnVals.includes(btn) ? "btn btn-press": "btn btn-nopress"
                        }>
                    </button>
                ))}
                </div>
                {CntrText(this.state.btnVals.length)}
            </div>
            
        </div>
        );  
    }    
}

export {ColorPicker};
