import React from 'react';
import QuantityForm from '../../components/PageTwo/QuantityForm.js';
import ColorPicker from '../../components/PageTwo/ColorPicker.js';
import './QuantitySelect.css';
import './ColorPicker.css';

// https://stackoverflow.com/questions/55453192/selecting-multiple-options-in-reactjs
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
           {// <h2> Quantity Select Componenent</h2>
           }
           
            { //testing the array received from parent, PageTwo
             console.log("(in quantity select)colorsArr is:")}
            { console.log(this.state.colors) //get arr from parent, PageTwo
            } 
           
            
            {//"(in QuantitySelect) the color count is "+ this.props.colorsArr.length
            }
            <div>
                <div >
                    <button
                        
                        style={{background: btnsList[this.state.colors[0]].color}}
                        className={ "btn-display" }>
                    </button>
                </div>
                <div>
                    <QuantityForm id='0' currMissing={this.state.capacity} //send to child, Form
                            updateSum={this.updateTotal} updateArr={this.updateSizes}//update parent 
                    />
                </div>
            </div>
            
            <div>
                <div >
                    <button
                        
                        style={{background: btnsList[this.state.colors[1]].color}}
                        className={ "btn-display" }>
                    </button>
                </div>
                <div>
                    <QuantityForm id='1' currMissing={this.state.capacity} //send to child, Form
                            updateSum={this.updateTotal} updateArr={this.updateSizes}//update parent 
                    />
                </div>
            </div>
            <input className= "btn-submit" type ="submit" value ="Submit" />

          
            
        </div>
        );
    }    
}


export default QuantitySelect;
