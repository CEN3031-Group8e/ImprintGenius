import React from 'react';
import './ColorPicker.css';

// https://stackoverflow.com/questions/55453192/selecting-multiple-options-in-reactjs
const maxBtnCap = 3;
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
    { id:15, name:"hot-pink", color: "#FF69B4"},
    { id:16, name:"midnight-blue", color: "#191970"},
    { id:17, name:"dodger-blue", color: "#1E90FF"},
    { id:18, name:"gray", color: "gray"}
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
    constructor() {
        super();
        //this.handleButton = this.handleButton.bind(this);
        this.state = { 
            count: 0,
            btnVals: [] 
        } //returns array of buttons currently pressed
    }
    
    handleButton = (btn) => {
        let tempBtns = this.state.btnVals;
        
        if(tempBtns.includes(btn)){ //if button already in list => remove
            console.log("Removing button from list")
            this.setState((prevState) =>({
                    //keep all buttons that are not equal to btn just pressed
                    count: this.state.count - 1,
                    btnVals: tempBtns.filter(e => e !== btn) 
                }),
                
                () => {
                    //callback, to check the updated state:
                    console.log("current length: " + this.state.count)
                }
            )
        }
        else if(this.state.count !== maxBtnCap)
        {
            console.log("Adding button to list")
            tempBtns.push(btn); //add to list ==> this button is pressed
            this.setState(
                ({ 
                    count: this.state.count + 1,
                    btnVals: tempBtns 
                }),
                () => {
                    //callback, to check the updated state:
                    //console.log("current length: " + this.state.count)
                } 
            )
        }  
        
    } 
    
    render() {
		return(
        <div>
            {//<h1>ColorPicker Componenent</h1>
            }
            <div className="colorPicker-box">
                <h2> Tultex 202 Fine Jersey</h2>
                <h4>Select 1-3 colors for your apparel</h4>
                <div className="palette-box">
                { btnsList.map(btn => 
                (
                    <button className="btn-menu"
                        key={ btn.id }
                        onClick={ () => {
                            {console.log("btn: ", btn)}
                        {console.log("btn.id: ", btn.id)}
                        {console.log("included btnVal: ", this.state.btnVals.includes(btn))}
                        
                            this.handleButton(btn) ; 
                            this.props.updatePicker(this.state.btnVals); //update pageTwo (parent)
                            //console.log(btn.name + " clicked")
                            }
                        }
                        style={{background: btn.color}}
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

export {ColorPicker, btnsList};
