import React from 'react';
import './QuantityForm.css';

/*
    One form = one "sizes" array for one button color
    example: red, green, blue, are selected
    red has one quantity form with one sizes (e.g. XS-XXL) array
 */

class QuantityForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            sizeOptions: this.props.sizeOptions,
            colorBtn: this.props.colorBtn, //{id,color, name, #}
            sizes: this.initSizes(this.props.sizes), //XS-XXL mapped by id of form sub section XS = 0
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
        if(isNaN(e.target.value)) //do not allow user to enter improper input, i.e. NaN
            newSizes[e.target.id] = ''; 
        else
            newSizes[e.target.id] = e.target.value;
        //count each text box for the entire color sizes
        var sum = 0;
        newSizes.map(size => {
            size = parseInt(size,10);
            if(!isNaN(size))
                sum += size;
        });
        this.setState(
        (prevState)=>({
            sizes: newSizes
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
                            id={sizeElement.id}
                            onChange={this.handleChange.bind(this)} //if the form has been changed
                            value={this.state.sizes[sizeElement.id]} //number or ''  otherwise
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
