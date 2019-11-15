import React from 'react';
import QuantityForm from '../../components/PageTwo/QuantityForm.js';
import {ColorPicker,btnsList} from '../../components/PageTwo/ColorPicker.js';
import './QuantitySelect.css';
import './ColorPicker.css';

// https://stackoverflow.com/questions/55453192/selecting-multiple-options-in-reactjs
function displayMissing(capacity, arr){ 
    //takes in an array of XS-XXL  
    var sum = 0;
    arr.map(e => {
        sum += e.count;

    });
    var missing = capacity - sum;
    if (missing < 0)
    {
        return (
        <h3>Items over: {0 - missing}</h3>)
    }
    else{
        return <h3>Missing items: {missing}</h3>
    }
        
}
class QuantitySelect extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = { 
            colors: this.props.colorsArr, //received from PageTwo (which pg2 received from ColorPicker)
            allSizes: this.initAllSizes(this.props.colorsArr), //XS-XXL, so length=6 , will update from child QuantityForm ON SUBMIT
            countArr: [], //elements: {colorId, count}
            capacity: this.props.capacity, //fixed atm (will be passed in from parent App.js to know which package was chosen)           
        }
        this.updateSizes = this.updateSizes.bind(this);
        this.updateCounter = this.updateCounter.bind(this);
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
    updateSizes(btnColor,sizeArr){ 
        //find the index that needs to be updated, USED IN QUANTITYFORMS
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
            console.log("post set, allSizes", newArr);
        }) 
    }
   
    updateCounter(id, itemsCount){
        //remove previous count
        var newArr = this.state.countArr.filter(e => e.formID !== id);
        newArr.push( //add new count to index
        {
            formID: id,
            count: itemsCount
        })
        this.setState(
        {
            countArr: newArr
        })
    }
   
    handleSubmit = (event) => {
        event.preventDefault();
        var sum = 0;
        this.state.countArr.map(e => {
            sum += e.count;
        });
        this.props.updateTotalSizes(sum); //sending ALL sizes to page 2      
    }
  
    render() {
		return(
        <div> 
                { this.state.colors.map(btn => (
                    <div key={btn.id}  >
                        {console.log("btn is",btn)}
                        <button className="btn-display"
                            key={btn.id}
                            style={{background: btn.color}} 
                            
                        >
                        </button>
                        <div>
                            <QuantityForm id={ btn.id } missing={this.state.capacity} color={btn} //send to child, Form
                                    updateCounter={this.updateCounter} updateSizes={this.updateSizes}//update parent 
                            />
                       </div>
                    </div>
                ))}
               <h3>{displayMissing(this.state.capacity, this.state.countArr)}</h3>
            {/*<input className= "btn-submit" type ="submit" 
                value ="Submit" /> */}
        </div>
        );
    }    
}


export default QuantitySelect;
