import UploadFile from "../../components/PageTwo/UploadFile";
import React from 'react';
import DisplayItem from '../../components/PageTwo/DisplayItem.js';


class PageTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageType: 'tshirt',
            apparelMode: true,
            clicked: true,
			selectedFile: null,
            selectedImage: null //selected image data URL (base64)
        };

        this.updateType = this.updateType.bind(this);
        this.updateMode = this.updateMode.bind(this);
		this.updateFile = this.updateFile.bind(this);
        this.updateSelectedImgDataURL = this.updateSelectedImgDataURL.bind(this);
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
            </div>

	        )
	    }
	}


export default PageTwo;
