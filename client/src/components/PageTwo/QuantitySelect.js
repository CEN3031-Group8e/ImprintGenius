import React from 'react';
import QuantityForm from '../../components/PageTwo/QuantityForm.js';
import './QuantitySelect.css';
import './ColorPicker.css';

// https://stackoverflow.com/questions/55453192/selecting-multiple-options-in-reactjs
function displayMissing(capacity, sizearr){ 
    //takes in an array of XS-XXL  
    var sum = 0;
    sizearr.map(e => {
        sum += e.count;
    });
    var missing = capacity - sum;
    if (missing < 0)
    {
        console.log("items over")
        return (
        <div>Items over: {0 - missing}</div>)
    }
    else{
        return <div>Missing items: {missing}</div>
    }
        
}
class QuantitySelect extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = { 
            colors: this.props.colorsArr, //received from PageTwo (which pg2 received from ColorPicker)
            allSizes: this.initAllSizes(this.props.colorsArr), //XS-XXL, so length=6 , will update from child QuantityForm ON SUBMIT
            countArr: [], //elements: {colorId, count, sizes}
            capacity: this.props.capacity, //fixed atm (will be passed in from parent App.js to know which package was chosen)           
        }
        this.updateCounter = this.updateCounter.bind(this);
        this.handleSubmit.bind(this);
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
    updateCounter(colorBtn, itemsCount, newSizes){ //note: id is both color and form id
        //allSizes = {color={id,name,#}, sizes}
        var newAllSizes = this.state.allSizes.filter(e => e.color.id !== colorBtn.id);
        newAllSizes.push(
        {
            color: colorBtn,
            sizes: newSizes
        })
      
    //Handle live counting updates
        //remove previous count
        var newArr = this.state.countArr.filter(e => e.formID !== colorBtn.id);
        newArr.push( //add new count to index
        {
            formID: colorBtn.id,
            count: itemsCount
        })
        this.setState(
        {
            countArr: newArr,
            allSizes: newAllSizes
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateTotalSizes(this.state.allSizes); //sending ALL sizes to Customizer      
    }
    render() {
		return(
        <div> 
            { this.state.colors.map(btn => (
                <div key={btn.id}  >
                    
                    <button className="btn-display"
                        key={btn.id}
                        style={{background: btn.color}} 
                        
                    >
                    </button>
                    <div>
                        <QuantityForm id={ btn.id } missing={this.state.capacity} colorBtn={btn} //send to child, Form
                                updateCounter={this.updateCounter} updateSizes={this.updateSizes}//update parent 
                        />
                    </div>
                </div>
            ))}
           { <div>{displayMissing(this.state.capacity, this.state.countArr)}</div>}

            <button className= "btn-submit" type ="submit" onClick={this.handleSubmit}>
                Submit
            </button>
                
        </div>
        );
    }    
}


export default QuantitySelect;
