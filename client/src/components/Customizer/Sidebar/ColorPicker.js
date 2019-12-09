import React from 'react';
import './ColorPicker.css';
import '../../../App.css';

//reference: https://stackoverflow.com/questions/55453192/selecting-multiple-options-in-reactjs

class ColorPicker extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            //maximum number of colors user can select (currently 5 for apparel, 1 for promo)
            maxBtnCap: this.props.maxColorsChosen,
            //static data from itemsData.js about hex codes of item
            itemData: this.props.itemData,
            //array of buttons currently selected/highlighted by user
            //first gets updated here, then gets reloaded as prop to handle
            //"saved" state upon component rerender to prevent visual render reset
            btnVals: this.initChosenColors(this.props.colorsChosen) 
        }
    }
    initChosenColors(colorsArr){ 
        //undefined if user hasn't selected any colors yet
        //handles "includes error of undefined" when "re"rendering already colorsChosen
        if (colorsArr === undefined || colorsArr === null) //before clicking on a color
            return []
        else //otherwise reload already selected colors
            return colorsArr;
    }
    handleButton = (btn) => {
        //Note: button = color circle user can select
        let tempBtns = this.state.btnVals;

        if(tempBtns.includes(btn)){ 
            //if button is already in list, i.e, has already been pressed 
            //and the user has pressed it again
            // ==> remove from btnVals (toggle)
            this.setState((prevState) =>({
                    //keep all buttons that are not equal to btn just pressed
                    btnVals: tempBtns.filter(e => e !== btn)
            }),
            () => { //wait until state has been saved before re rendering/updating parent state
                    this.props.updateColors(this.state.btnVals);
            })
        }
        else if(this.state.btnVals.length !== this.state.maxBtnCap) {
            // otherwise, the button is not in list, i.e. has not been already
            // pressed, AND user can still select more colors 
            //add to list ==> this button is pressed (toggle)
            tempBtns.push(btn); 
            this.setState(({
                    btnVals: tempBtns
            }),
            () => { //again wait to rerender until state is "fully saved"
                this.props.updateColors(this.state.btnVals);
            })
        }//else do nothing (max color selected has been reached, have to deselect to add more)
    }
    cntrText(count){
        //handles visual pop ups to inform user if maximum colors have been selected
        if(count === this.state.maxBtnCap )
             return <p className="cnt cntLimit">
                 Color Limit Reached!
             </p>
        else{ //informs user of how many colors they have currently selected
            return(
                <p className="cnt cntPckd" >
                    { count + "/" + this.state.maxBtnCap + " Colors Picked  "}
                </p>
            )
        }
    }

    display(){
        //handles constant visual text depending on item type
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
                    {//render all colors the item has to offer as "buttons"
                    this.state.itemData.colorsAvailable.map(btn => (
                        <button className="btn-menu"
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
                    {this.state.btnVals.map(btn => (
                        <button className="btn-menu"
                            onClick={ () => {
                                //handle if button has been clicked
                                this.handleButton(btn) ;
                                //send updated btnVals data to parent
                                this.props.updateColors(this.state.btnVals); //update Customizer (parent)
                                }
                            }
                            style={{background: btn}}
                            className={
                                //if btn exists in list => use btn press, else btn no press
                                this.state.btnVals.includes(btn) ? "btn btn-press": "btn btn-nopress"
                            }>
                        </button>
                    ))}
                </div>
                { //check current count of colors selected
                    this.cntrText(this.state.btnVals.length)}
            </div>
        </div>
        );
    }
}

export {ColorPicker};
