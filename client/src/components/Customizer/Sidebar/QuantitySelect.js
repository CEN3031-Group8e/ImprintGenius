import React from 'react';
import QuantityForm from '../Sidebar/QuantityForm.js';
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
            colorsArr: this.props.colorsChosen, //received from PageTwo (which pg2 received from ColorPicker)
            allSizes: this.initAllSizes(this.props.colorsChosen, this.props.allSizes), //XS-XXL, so length=6 , will update from child QuantityForm ON SUBMIT
            countArr: [], //elements: {colorId, count, sizes}
            capacity: this.props.capacity, //fixed atm (will be passed in from parent App.js to know which package was chosen)           
        }
        this.updateCounter = this.updateCounter.bind(this);
        this.handleSubmit.bind(this);
    }    
    initAllSizes(colorsArr, allSizes){   //initialize the array to have x elements, each element will contain array[6]
       if (allSizes === undefined || allSizes === null){
        //if haven't filled in the form yet,
            var tempAllSizes = [] 
            colorsArr.map(btn => {
                tempAllSizes.push({
                    color: btn, //{id, name, #}
                    sizes: [] //[XS-XXL]
                })
            });
            return tempAllSizes;
        }
        else{ //already have something in the form, reload it
            //where e is {color, sizes[]}     
            console.log("colorsArr", colorsArr)
           console.log("filter return",allSizes.filter(e => colorsArr.includes(e.color)))
           
           var tempArr = allSizes.filter(e => colorsArr.includes(e.color));
           this.props.updateTotalSizes(tempArr);
            return tempArr; // [{color, sizes}]
        }
    }
    
    updateCounter(colorBtn, itemsCount, newSizes){ //note: id is both color and form id
        
        //update current (quantity select)
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
        () => ({
            countArr: newArr,
            allSizes: newAllSizes
        }),() => {
            this.props.updateTotalSizes(this.state.allSizes) //update parent (Customizer)         
        });

        //this.props.updateTotalSizes(this.state.allSizes) //update parent (Customizer)
        
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateTotalSizes(this.state.allSizes); //sending ALL sizes to Customizer      
    }
    getSizes(colorBtn){
        var element = this.state.allSizes.find(e => e.color === colorBtn);
        if(element === undefined || element === null){
            return []
        }
        else
            return element.sizes; 
            
    }
    render() {
		return(
        <div> 
            { this.state.colorsArr.map(btn => (
                <div key={btn.id}  >
                    <button className="btn-display"
                        key={btn.id}
                        style={{background: btn.number}}       
                    >
                    </button>
                    <div>
                        {   
                        ///******FIX MISSIN VARIABLE RESETS */ 
                            //console.log("found size:", this.getSizes(btn))
                        }
                        <QuantityForm id={ btn.id } colorBtn={btn} //send to child, Form
                                capacity={this.state.capacity}
                                missing={this.state.capacity} 
                                sizes={this.getSizes(btn)} //reload sizes
                                updateCounter={this.updateCounter} 
                                updateSizes={this.updateSizes}
                        />
                    </div>
                </div>
            ))}
           { <div>{displayMissing(this.state.capacity, this.state.countArr)}</div>}

           {/* <button className= "btn-submit" type ="submit" onClick={this.handleSubmit}>
                Submit
            </button>*/}
                
        </div>
        );
    }    
}


export default QuantitySelect;
