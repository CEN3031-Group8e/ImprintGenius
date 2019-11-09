import React from 'react';
import './QuantityForm.css';

// https://stackoverflow.com/questions/55453192/selecting-multiple-options-in-reactjs

class QuantityForm extends React.Component 
{  
    constructor() {
        super();
        this.state = { 
            sumItems:0,
            sizeXS: '',
            sizeS: '',
            sizeM: '',
            sizeL: '',
            sizeXL: '',
            sizeXXL: ''                
        }
    }    

    handleChange(e){
        let change = {}
        change[e.target.name] = e.target.value;
        this.setState(change);
        console.log("handleChange:");
        console.log(change);

    }

    handleSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state.codeVal);
        //console.log(this.state.nameVal);
        //on submit, capture the form data and return
        var st = this.state;
        var arr = [st.sizeXS,st.sizeS,st.sizeM,st.sizeL,st.sizeXL,st.sizeXXL];
        
        console.log("arr:");
        console.log(arr);

        this.props.updateSelect(arr);
        
        //clear texts
        this.setState({ 
            sizeXS: '',
            sizeS: '',
            sizeM: '',
            sizeL: '',
            sizeXL: '',
            sizeXXL: ''                
        });
    }

    render() {
		return(
        <div>
            <h2> Quantity Form Componenent</h2>
          
            <form id="sizeForm" onSubmit={this.handleSubmit}>
                <div>XS <input 
                    type="text" //text box
                    name="sizeXS"
                    onChange={this.handleChange.bind(this)} 
                    value={this.state.sizeXS} 
                    placeholder="#" 
                />
                </div>
                
                <div>S <input 
                    type="text" //text box
                    name="sizeS"
                    onChange={this.handleChange.bind(this)} 
                    value={this.state.sizeS} 
                    placeholder="#" 
                /> </div>
                
                <div>M <input 
                    type="text" //text box
                    name="sizeM"
                    onChange={this.handleChange.bind(this)} 
                    value={this.state.sizeM} 
                    placeholder="#" 
                /></div> 
                
                <div>L <input 
                    type="text" //text box
                    name="sizeL"
                    onChange={this.handleChange.bind(this)} 
                    value={this.state.sizeL} 
                    placeholder="#" 
                />  </div>
                
                <div>XL <input 
                    type="text" //text box
                    name="sizeXL"
                    onChange={this.handleChange.bind(this)} 
                    value={this.state.sizeXL} 
                    placeholder="#" 
                /></div> 
                
                <div>XXL <input 
                    type="text" //text box
                    name="sizeXXL"
                    onChange={this.handleChange.bind(this)} 
                    value={this.state.sizeXXL} 
                    placeholder="#" 
                /> </div>
                     
                <input className= "btn-submit" type ="submit" value ="Submit" />
            </form>

        </div>
        );
    }    
}


export default QuantityForm;
