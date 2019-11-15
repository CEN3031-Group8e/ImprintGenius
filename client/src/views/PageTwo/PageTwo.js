import UploadFile from "../../components/PageTwo/UploadFile";
import React from 'react';
import DisplayItem from '../../components/PageTwo/DisplayItem.js';
import {ColorPicker, btnsList} from '../../components/PageTwo/ColorPicker.js';
import QuantitySelect from '../../components/PageTwo/QuantitySelect.js';


class PageTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageType: 'tshirt',
            apparelMode: true,
            clicked: true,
			selectedFile: null,
            selectedImage: null //selected image data URL (base64)

			colorsChosen: [], //updated from ColorPicker (child)
            totalSizes: [],
            openColors: false,
            openSizes: false,
            capacity:100
        };

        this.updateType = this.updateType.bind(this);
        this.updateMode = this.updateMode.bind(this);
		this.updateFile = this.updateFile.bind(this);
        this.updateSelectedImgDataURL = this.updateSelectedImgDataURL.bind(this);
		this.updateColors = this.updateColors.bind(this);
        this.updateTotalSizes = this.updateTotalSizes.bind(this);

    }

    updateType(imgType){ //from child to parent
        this.setState({
            imageType: imgType
        })
    }
    updateMode(mdType){ //from child to parent
        this.setState({
            apparelMode: mdType
        })
    }
	updateFile(selectedFileNew)
    { //from child to parent
        this.setState({
            selectedFile: selectedFileNew
        }

        );
    }
	updateColors(clrs){ //from child to parent
        this.setState({
            colorsChosen: clrs
        })
    }
    updateTotalSizes(total){
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
                    <QuantitySelect capacity={this.state.capacity }
                        colorsArr={this.state.colorsChosen} //send to child
                        updateTotalSizes={this.updateTotalSizes}/>); //update parent
            }
            else{
                return <div>Must choose colors first!</div>;
            }
        }       
    }

    updateSelectedImgDataURL(selectedImageNew)
    {
	    { //from child to parent
	        this.setState({
	            selectedImage: selectedImageNew
	        }

	        );
	    }
    }
    displayFunc() {
      return <DisplayItem updateDisplay={this.updateType}/>;
    }


    render(){
        return (
            <div>
            {this.displayFunc()}
			<UploadFile updateFile={this.updateFile} updateImage = {this.updateSelectedImgDataURL}/>
	            //passing functions to update the parent state, to the child

			 <div className="ColorQuantity">
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
            </div>

	        )
	    }
	}


export default PageTwo;
