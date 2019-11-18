
import React from 'react';
import UploadFile from "../../components/PageTwo/UploadFile";
import DisplayItem from '../../components/PageTwo/DisplayItem.js';
import {ColorPicker, btnsList} from '../../components/PageTwo/ColorPicker.js';
import QuantitySelect from '../../components/PageTwo/QuantitySelect.js';
import './PageTwo.css';

class PageTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageType: 'tshirt',
            apparelMode: true,
            clicked: true,
			selectedFile: null,
            selectedImage: null, //selected image data URL (base64)

			colorsChosen: [], //updated from ColorPicker (child)
            totalSizes: [],
            capacity:100,

            openSideBarOption: false, //based on button id

            checkBtnId: null
            
        };

        this.updateType = this.updateType.bind(this);
        this.updateMode = this.updateMode.bind(this);
		this.updateFile = this.updateFile.bind(this);
        this.updateSelectedImgDataURL = this.updateSelectedImgDataURL.bind(this);
		this.updateColors = this.updateColors.bind(this);
        this.updateTotalSizes = this.updateTotalSizes.bind(this);

    }
//all update functions below are from child component to parent (page2)
    updateType(imgType){
        this.setState({
            imageType: imgType
        });
    }
    updateMode(mdType){ 
        this.setState({
            apparelMode: mdType
        });
    }
	updateFile(selectedFileNew){ 
        this.setState({
            selectedFile: selectedFileNew
        });
    }
    updateSelectedImgDataURL(selectedImageNew){
	    this.setState({
	            selectedImage: selectedImageNew
	        });
    }
	updateColors(clrs){ 
        this.setState({
            colorsChosen: clrs
        });
    }
    updateTotalSizes(total){
        this.setState({
            itemSum: total
        });
    }
    checkBtns(){
        if(this.state.sideBarOption == "upload"){
            return(
                <UploadFile updateFile={this.updateFile} 
                            updateImage = {this.updateSelectedImgDataURL}/>)
        }
        else if(this.state.sideBarOption == "colors"){
            return (<ColorPicker updatePicker={this.updateColors}/>); //child to Parent
        }
        else if(this.state.sideBarOption == "quantity"){
            if(this.state.colorsChosen.length !== 0){
                return (
                    <QuantitySelect capacity={this.state.capacity }
                        colorsArr={this.state.colorsChosen} //send to child
                        updateTotalSizes={this.updateTotalSizes}/> //update parent
                )}
            else{
                return <div>Must choose colors first!</div>;
            }
        }       
    }

  

    render(){
        return (
            <div>
         

           <DisplayItem updateDisplay={this.updateType}></DisplayItem>

			 <div className="SideBar">
             <button className="btn-sidebar" 
                    onClick={() => {
                        this.setState({
                            checkBtnId: "upload",
                            
                            colorsChosen: [] //reset array (start-over)
                        })}}>
                    Upload File
                </button>
                <button className="btn-sidebar" 
                    onClick={() => {
                        this.setState({
                            checkBtnId: "colors",
                            
                            colorsChosen: [] //reset array (start-over)
                        })}}>
                    Colors
                </button>
                <button className="btn-sidebar" 
                    onClick={() => {
                        this.setState({
                            checkBtnId: "quantity",
                            
                        })}}>
                    Quantity
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
