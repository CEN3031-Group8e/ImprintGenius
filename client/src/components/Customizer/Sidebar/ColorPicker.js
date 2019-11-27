import React from 'react';
import './ColorPicker.css';
import '../../../App.css';

// https://stackoverflow.com/questions/55453192/selecting-multiple-options-in-reactjs
const maxBtnCap = 3;

class ColorPicker extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            itemData: this.props.itemData,
            colorsAvailable: [],
            btnVals: this.initChosenColors(this.props.colorsChosen)//returns array of buttons currently pressed
        }
        console.log("itemData in constructor", this.state.itemData)
       //this.updateItemData = this.updateItemData.bind(this);
    }
    initChosenColors(colorsArr){  //handle "includes" error of undefined in render
        if (colorsArr === undefined || colorsArr === null) //before clicking on a color
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
                    this.props.updateColors(this.state.btnVals);
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
                    this.props.updateColors(this.state.btnVals);
                }
            )
        }
    }
    cntrText(count){
        if(count === maxBtnCap )
             return <p className="cnt cntLimit">
                 Color Limit Reached!
             </p>
        else{
            return(
                <p className="cnt cntPckd" >
                        { count + "/" + maxBtnCap + " Colors Picked  "}
                </p>
            )
        }
    }
    render() {
		return(
        <div>
            <div className="colorPicker-box" >
                <h1>{//this.state.itemData.name
                }</h1>
                <p>Select 1-5 colors for your apparel</p>

                <div className="palette-box">
                {console.log("state item data", this.state.itemData)}

                    {//this.props.onChange
                    }
                {this.state.itemData.colorsAvailable.map(btn =>
                (
                    <button className="btn-menu"
                        //key={ btn.id }
                        onClick={ () => {
                            this.handleButton(btn) ;
                            this.props.updateColors(this.state.btnVals); //update pageTwo (parent)
                            }
                        }
                        style={{background: btn}}
                        className={
                            //if btn exists in list => use btn press class, else btn
                            this.state.btnVals.includes(btn) ? "btn btn-press": "btn btn-nopress"
                        }>
                    </button>
                ))}

                <br></br>
                <p className="chosenTitle">Chosen colors</p>
                {this.state.btnVals.map(btn =>
                (
                  <button className="btn-menu"
                      //key={ btn.id }
                      onClick={ () => {
                          this.handleButton(btn) ;
                          this.props.updateColors(this.state.btnVals); //update pageTwo (parent)
                          }
                      }
                      style={{background: btn}}
                      className={
                          //if btn exists in list => use btn press class, else btn
                          this.state.btnVals.includes(btn) ? "btn btn-press": "btn btn-nopress"
                      }>
                  </button>
                ))}
                </div>
                {this.cntrText(this.state.btnVals.length)}
            </div>

        </div>
        );
    }
}

export {ColorPicker};
