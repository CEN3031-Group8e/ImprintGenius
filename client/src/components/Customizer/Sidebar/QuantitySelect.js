import React from 'react';
import QuantityForm from '../Sidebar/QuantityForm.js';
import './QuantitySelect.css';
import './ColorPicker.css';

// https://stackoverflow.com/questions/55453192/selecting-multiple-options-in-reactjs

class QuantitySelect extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            sizeOptions: this.props.sizeOptions,
            colorsArr: this.props.colorsChosen, //received from PageTwo (which pg2 received from ColorPicker)
            allSizes: this.initAllSizes(this.props.colorsChosen, this.props.allSizes), //XS-XXL, so length=6 , will update from child QuantityForm ON SUBMIT
            //countArr: this.props.countArr, //elements: {colorId, count, sizes}
            capacity: this.props.capacity, //fixed atm (will be passed in from parent App.js to know which package was chosen)
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

        //update current (quantity select)
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
        var element = this.state.allSizes.find(e => e.color === colorBtn);
        if(element === undefined || element === null){
            return []
        }
        else
            return element.sizes;

    }
    displayMissing(){
        //takes in an array of XS-XXL
        var sum = 0;
        this.state.allSizes.map(e => {
            sum += e.formCount;
        });
        var missing = this.state.capacity - sum;
        if (missing < 0)
        {
            return (<p className="cnt cntPckd">Too many items inputted! {0 - missing} over.</p>)
        }
        else{

            return <p className="cnt cntPckd">Missing items: {missing}</p>
        }

    }
    render() {
		return(
        <div>
          <div className="innerBoxCustomizer">
            <h1>Choose Quantities</h1>
            <p>How many of each size?</p>
              { this.state.colorsArr.map(btn => (
                  <div key={btn}  >
                      <button className="btn-display"
                          key={btn}
                          style={{background: btn}}>
                      </button>
                      <div>
                          {
                          ///******FIX MISSIN VARIABLE RESETS */
                              //console.log("found size:", this.getSizes(btn))
                          }
                          <QuantityForm id={ btn } colorBtn={btn} //send to child, Form
                                sizeOptions={this.state.sizeOptions}
                                  capacity={this.state.capacity}
                                  missing={this.state.capacity}
                                  sizes={this.getSizes(btn)} //reload sizes
                                  updateSizesAndCounter={this.updateSizesAndCounter}
                                  updateSizes={this.updateSizes}
                          />
                      </div>
                  </div>
              ))}
             { <div>{this.displayMissing()}</div>}

            </div>
        </div>
        );
    }
}


export default QuantitySelect;
