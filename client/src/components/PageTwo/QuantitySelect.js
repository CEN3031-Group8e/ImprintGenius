import React from 'react';
import QuantityForm from '../../components/PageTwo/QuantityForm.js';
import {ColorPicker,btnsList} from '../../components/PageTwo/ColorPicker.js';
import './QuantitySelect.css';
import './ColorPicker.css';

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
        console.log("sizeList", sizelist);        
        this.setState(
        ({
            sizeArr: sizelist
        }),
        () => {
            console.log("post set, sizerArr", this.state.sizeArr);
        }) 
    }
    updateTotal(total){
        console.log("tot in updateSum", total);
        
        this.setState(
        ({
            totalItems: total
        }),
        () => {
            console.log("post set, totalItems", this.state.totalItems);
        }) 
    }
    render() {
		return(
        <div>
           {// <h2> Quantity Select Componenent</h2>
           }
           
            { //testing the array received from parent, PageTwo
             console.log("(in quantity select)colorsArr is:",this.state.colors)}           
            
            {//"(in QuantitySelect) the color count is "+ this.props.colorsArr.length
            }
            {/*<div>
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
            */}
            
            
                { this.state.colors.map(btn => 
                    (
                    <div>
                        {console.log("btn is",btn)}
                        <button className="btn-menu"
                            key={btn.id }
                            style={{background: btn.color}}
                            onClick={ () => {
                                //this.handleButton(btn.id) ; 
                                //this.props.updatePicker(this.state.btnVals); //update page2 (parent)
                                //console.log(btn.name + " clicked")
                                }
                            }
                           
                            className= "btn-display"
                        >
                        </button>
                        <div>
                            <QuantityForm id={ btn.id } currMissing={this.state.capacity} //send to child, Form
                                    updateSum={this.updateTotal} updateArr={this.updateSizes}//update parent 
                            />
                       </div>
                    </div>

                ))}
                
            <input className= "btn-submit" type ="submit" value ="Submit" /> 
        </div>
        );
    }    
}


export default QuantitySelect;
