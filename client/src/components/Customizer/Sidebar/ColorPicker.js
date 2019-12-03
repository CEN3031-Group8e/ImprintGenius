import React from 'react';
import './ColorPicker.css';
import '../../../App.css';

// https://stackoverflow.com/questions/55453192/selecting-multiple-options-in-reactjs

class ColorPicker extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            maxBtnCap: this.props.maxColorsChosen,
            itemData: this.props.itemData,
            colorsAvailable: [],
            btnVals: this.initChosenColors(this.props.colorsChosen)//returns array of buttons currently pressed
        }
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
        else if(this.state.btnVals.length !== this.state.maxBtnCap)
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
        if(count === this.state.maxBtnCap )
             return <p className="cnt cntLimit">
                 Color Limit Reached!
             </p>
        else{
            return(
                <p className="cnt cntPckd" >
                        { count + "/" + this.state.maxBtnCap + " Colors Picked  "}
                </p>
            )
        }
    }

    display()
    {
        if(this.props.apparelMode === true)
        return(<p>Select 1-5 colors for your apparel</p>)
        else
        return(<p>Select 1 color for your item</p>)
    }
    render() {
		return(
        <div>
            <div className="colorPicker-box" >
                <h1>Choose Colors</h1>
               {this.display()}

                <div className="palette-box">
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
