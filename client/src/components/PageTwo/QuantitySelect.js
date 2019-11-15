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
            //allSizes: 0, //will update from child Form ON CHANGE
            allSizes: this.initAllSizes(this.props.colorsArr), //XS-XXL, so length=6 , will update from child QuantityForm ON SUBMIT
            capacity: 100 //fixed atm (will be passed in from parent App.js to know which package was chosen)
        }
        this.updateSizes = this.updateSizes.bind(this);
    }    
    initAllSizes(colors){   //initialize the array to have x elements, each element will contain array[6]
        var tempAllSizes = []
        colors.map(btn => {
            tempAllSizes.push(
            {
                color: btn,
                sizes: []
            })
        });
        return tempAllSizes;
            
    }
    updateSizes(sizeArr, btnColor){ //find the index that needs to be updated
        //sizeArr: array of XS-XXL
        //btn: has color information to remove array and replace
        
        //each e in allSizes has {colorBtn details + sizes XS-XXL}
        //want to find and remove previous button element details
        var newArr = this.state.allSizes.filter(function (e) {
            return e.color === btnColor;
        });
        //now add new/updated {sizeArr, color}
        newArr.push(
        {
            color: btnColor,
            sizes: sizeArr
        })

        this.setState(
        ({
            allSizes: newArr
        }),
        () => {
            console.log("post set, allSize", newArr);
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
                            <QuantityForm id={ btn.id } currMissing={this.state.capacity} color={btn} //send to child, Form
                                    updateSum={this.updateTotal} updateSizes={this.updateSizes}//update parent 
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
