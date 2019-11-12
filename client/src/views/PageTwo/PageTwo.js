//import UploadFile from "../../components/PageTwo/Upload file/UploadFile";


//this is page 2 view
/*ReactDOM.render(
    <UploadFile/>
)*/
import React from 'react'
import UploadFile from '../../components/PageTwo/UploadFile'
class PageTwo extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            selectedFile: null,
            selectedImage: null //selected image data URL (base64)
        };
        this.updateFile = this.updateFile.bind(this);
        this.updateSelectedImgDataURL = this.updateSelectedImgDataURL.bind(this);
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
   

    render()
    {
        return(
            <UploadFile updateFile={this.updateFile} updateImage = {this.updateSelectedImgDataURL}/> 
            //passing functions to update the parent state, to the child         
        )
    }
}


export default PageTwo;