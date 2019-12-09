import React from 'react';
import QuantityForm from '../Sidebar/QuantityForm.js';
import './QuantitySelect.css';
import './ColorPicker.css';

// https://stackoverflow.com/questions/55453192/selecting-multiple-options-in-reactjs
/*
    One form = one "sizes" array for one button color
    example: red, green, blue, are selected
    red has one quantity form with one sizes (e.g. XS-XXL) array
    One quantity select contains all these forms
    example:
        red has one form with one sizes array
        green has one form, one sizes...etc.
        select has red,green, and blue's sizes data....3 arrays
        all together it appends in an array "allSizes"

        This is for ONE apparel item.
        Therefore hoodie has its own select, tshirt has its own select...
        each with their own colors and respective sizes array
 */
class QuantitySelect extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sizeOptions: this.props.sizeOptions,
            colorsArr: this.props.colorsChosen, //received from Customizer (which Customizer received from ColorPicker)
            allSizes: this.initAllSizes(this.props.colorsChosen, this.props.allSizes), //XS-XXL, so length=6 
            //countArr: this.props.countArr, //elements: {colorId, count, sizes}
            capacity: this.props.capacity, 
        }
        this.updateSizesAndCounter = this.updateSizesAndCounter.bind(this);
    }

    initAllSizes(colorsArr, allSizes){   //initialize the array to have x elements, each element will contain array[6]
       if (allSizes === undefined || allSizes === null){
        //if haven't filled in the form yet,
            var tempAllSizes = []
            colorsArr.map(btn => {
                tempAllSizes.push({
                    color: btn, //{id, name, #}
                    sizes: [], //[XS-XXL]
                    formCount: 0
                })
            });
            return tempAllSizes;
        }
        else{ //already have something in the form, reload it ("saved state")
            //where e is {color, sizes[]}
           var tempArr = allSizes.filter(e => colorsArr.includes(e.color));
           this.props.updateApparelAllSizes(tempArr);
            return tempArr; // [{color, sizes}]
        }
    }
    updateSizesAndCounter(colorBtn, itemsCount, newSizes){ //note: id is both color and form id
        //used in child, quantity form to retrieve current color sizes array being edited
        //and to update current (quantity select)
        //allSizes = {color, sizes, count}
        var newAllSizes = this.state.allSizes.filter(e => e.color !== colorBtn); //remove old
        newAllSizes.push(//element = one form (one color)
        {
            color: colorBtn,
            sizes: newSizes,
            formCount:itemsCount //sum for one color
        })
        //Handle live counting updates
        this.setState(
        () => ({
            //countArr: newArr,
            allSizes: newAllSizes
        }),() => {

            this.props.updateApparelAllSizes(this.state.allSizes)//, this.state.countArr) //update parent (Customizer)
        });
    }
    getSizes(colorBtn){
        //gets the sizes array based on current item type from the master array
        var element = this.state.allSizes.find(e => e.color === colorBtn);
        if(element === undefined || element === null)
            return []
        else
            return element.sizes;
    }
    displayMissing(){
        //handles render of current count or how many missing based on pack capacity
        //counts through all sums of each color (this is for one apparel item)
        var sum = 0;
        this.state.allSizes.map(e => {
            sum += e.formCount;
        });
        var missing = this.state.capacity - sum;
        if (missing < 0)
            return (<p className="cnt cntPckd">Too many items inputted! {0 - missing} over.</p>)
        else
            return <p className="cnt cntPckd">Missing items: {missing}</p>
    }
    render() {
		return(
        <div>
          <div className="innerBoxCustomizer">
            <h1>Choose Quantities</h1>
            <p>How many of each size?</p>
              { //map one form (returns a sizes array) to the current colors chosen/selected by user
              this.state.colorsArr.map(btn => (
                  <div key={btn}  >
                      <button className="btn-display"
                          key={btn}
                          style={{background: btn}}>
                      </button>
                      <div>
                          <QuantityForm id={ btn } colorBtn={btn} //send to child, Form
                                sizeOptions={this.state.sizeOptions} //e.g. XS-4XL or S-2XL
                                  capacity={this.state.capacity} //e.g. 100 shirts
                                  sizes={this.getSizes(btn)} //reload sizes to rerender
                                  updateSizesAndCounter={this.updateSizesAndCounter} //updates "missing" counter and sizes of color
                          />
                      </div>
                  </div>
              ))}
                {//render visual to inform user of how many apparel items left they can have in sizes forms 
            <div>{this.displayMissing()}</div>}
          </div>
        </div>
        );
    }
}
export default QuantitySelect;
