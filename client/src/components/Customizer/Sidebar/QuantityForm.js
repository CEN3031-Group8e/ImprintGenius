import React from 'react';
import './QuantityForm.css';

// https://stackoverflow.com/questions/55453192/selecting-multiple-options-in-reactjs

class QuantityForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            missing: this.props.missing, //"missing"
            colorBtn: this.props.colorBtn, //{id,color, name, #}
            sizes: this.initSizes(this.props.sizes), //XS-XXL mapped by id of form sub section XS = 0
            oneSizeTotal: 0,   //total sizes for that color
        }
    }
    initSizes(sizes){   //initialize the array to have x elements, each element will contain array[6]
        if (sizes == undefined || sizes == null){
            //if haven't filled in the form yet,
            return ['','','','','',''];
        }
        else{ //already have something in the form, reload it
            return sizes;
        }
    }
    handleChange(e){
        if(isNaN(e.target.value))
            return;

        let newSizes = [...this.state.sizes];
        newSizes[e.target.id] = e.target.value;
        var sum = 0;
        newSizes.map(size => {
            size = parseInt(size,10);
            if(!isNaN(size))
                sum += size;
        });
        //update counter/"missing" in quantity select
        //this.props.updateCounter(this.state.colorBtn, sum, newSizes);

        this.setState(
        (prevState)=>({
            //change
            sizes: newSizes,
            oneSizeTotal: sum
        }),
        ()=>{//update counter/"missing" in quantity select
            this.props.updateCounter(this.state.colorBtn, sum, newSizes);
        });
    }
    render() {
		return(
        <div>
          <div className="">

            <form id="sizeForm" onSubmit={this.handleSubmit}>
                <div>XS
                <input
                    type="text" //text box
                    pattern="[0-9]*"
                    name="sizeXS"
                    id='0'
                    onChange={this.handleChange.bind(this)}

                    value={this.state.sizes[0]}
                    placeholder="0"
                />
                </div>

                <div>S <input
                    type="text" //text box
                    pattern="[0-9]*"
                    name="sizeS"
                    id='1'
                    onChange={this.handleChange.bind(this)}
                    value={this.state.sizes[1]}
                    placeholder="0"
                /> </div>

                <div>M <input
                    type="text" //text box
                    pattern="[0-9]*"
                    name="sizeM"
                    id='2'
                    onChange={this.handleChange.bind(this)}
                    value={this.state.sizes[2]}
                    placeholder="0"
                /></div>

                <div>L <input
                    type="text" //text box
                    pattern="[0-9]*"
                    name="sizeL"
                    id='3'
                    onChange={this.handleChange.bind(this)}
                    value={this.state.sizes[3]}
                    placeholder="0"
                />  </div>

                <div>XL <input
                    type="text" //text box
                    pattern="[0-9]*"
                    name="sizeXL"
                    id='4'
                    onChange={this.handleChange.bind(this)}
                    value={this.state.sizes[4]}
                    placeholder="0"
                /></div>

                <div>XXL <input
                    type="text" //text box
                    pattern="[0-9]*"
                    name="sizeXXL"
                    id='5'
                    onChange={this.handleChange.bind(this)}
                    value={this.state.sizes[5]}
                    placeholder="0"
                /> </div>

            </form>

          </div>
        </div>
        );
    }
}


export default QuantityForm;
