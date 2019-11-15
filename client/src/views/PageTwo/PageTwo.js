import React from 'react';
import {ColorPicker, btnsList} from '../../components/PageTwo/ColorPicker.js';
import QuantitySelect from '../../components/PageTwo/QuantitySelect.js';
class PageTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorsChosen: [], //updated from ColorPicker (child)
            itemSum: 0,
            openColors: false,
            openSizes: false
        };
        this.updateColors = this.updateColors.bind(this);
    }
    
    updateColors(clrs){ //from child to parent
        this.setState({
            colorsChosen: clrs
        })
    }
    updateSum(total){
        this.setState({
            itemSum: total
        })
    }
    checkBtns(){
        if(this.state.openColors){
            return (<ColorPicker updatePicker={this.updateColors}/>); //child to Parent
        }
        else if(this.state.openSizes){
            if(this.state.colorsChosen.length !== 0){
                return (
                    <QuantitySelect colorsArr={this.state.colorsChosen} //send to child
                                    updateSelect={this.updateSum}/>); //update parent
            }
            else{
                return <div>Must choose colors first!</div>;
            }
        }       
    }
    render(){
        return (
            <div className="App">
                {//<h1>PageTwo Component</h1>
                }
                <h1> </h1>
                <button className="btn-menu menu-colors" 
                    onClick={() => {
                        this.setState({
                            openColors: true,
                            openSizes: false,
                            colorsChosen: [] //reset array (start-over)
                        })}}>
                    Edit Colors
                </button>
                <button className="btn-menu menu-sizes" 
                    onClick={() => {
                        this.setState({
                            openColors: false,
                            openSizes: true
                        })}}>
                    Edit Sizes
                </button>

                <div className="btn-component">
                     {this.checkBtns() }
                </div>
               
                
           </div>
        );
    }
}

export default PageTwo;
