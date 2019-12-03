import React from 'react';
import './QuantityForm.css';

// https://stackoverflow.com/questions/55453192/selecting-multiple-options-in-reactjs

class QuantityForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            sizeOptions: this.props.sizeOptions,
            missing: this.props.missing, //"missing"
            colorBtn: this.props.colorBtn, //{id,color, name, #}
            sizes: this.initSizes(this.props.sizes), //XS-XXL mapped by id of form sub section XS = 0
            oneSizeTotal: 0   //total sizes for that color
        }

    }

    initSizes(sizes){   //initialize the array to have x elements, each element will contain array[6]
        if (sizes === undefined || sizes === null){
            //if haven't filled in the form yet,
            return ['','','','','',''];
        }
        else{ //already have something in the form, reload it
            return sizes;
        }
    }

    handleChange(e){
        let newSizes = [...this.state.sizes];
        if(isNaN(e.target.value))
            newSizes[e.target.id] = ''; //do not allow user to enter improper input
        else
            newSizes[e.target.id] = e.target.value;
        var sum = 0;
        newSizes.map(size => {
            size = parseInt(size,10);
            if(!isNaN(size))
                sum += size;
        });

        this.setState(
        (prevState)=>({
            //change
            sizes: newSizes,
            oneSizeTotal: sum
        }),
        ()=>{//update counter/"missing" in quantity select
            this.props.updateSizesAndCounter(this.state.colorBtn, sum, newSizes);
        });
    }
    render() {
		return(
        <div>
          <div className="">
            <form id="sizeForm" onSubmit={this.handleSubmit}>
            {this.state.sizeOptions.map(sizeElement => (
                <div className="sizeInput">
                    {sizeElement.name}
                    <input className="inputField"
                        type="text" //text box
                        pattern="[0-9]*"
                       // name={element.name}
                        id={sizeElement.id}
                        onChange={this.handleChange.bind(this)}
                        value={this.state.sizes[sizeElement.id]}
                        placeholder="0"
                    />
                </div>
            ))}
            </form>
          </div>
        </div>
        );
    }
}

export default QuantityForm;
