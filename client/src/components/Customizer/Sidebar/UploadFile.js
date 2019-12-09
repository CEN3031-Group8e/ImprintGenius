import React from 'react';
import './UploadFile.css';
import '../../../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class UploadFile extends React.Component
{
    constructor(props)
     {
        super(props);
        this.state = {
            selectedFile: null,    //selected apparel logo
            selectedFileTwo: null,  //selected item logo
            selectedImage: null,   //uploaded apparel logo
            selectedImageTwo: null //uploaded item logo

        }
    }
    onChangeHandler=event=>
    {
     
        if(event.target.files[0] != null)
        {
          this.setState({
            selectedFile: event.target.files[0]
          })
          //new
          this.props.updateFile( event.target.files[0])

          try
          {window.URL.createObjectURL(event.target.files[0])}
          catch(error){
            console.log('no chosen file')
          }

        }

    }

    onClickHandler = () => {
      console.log("clicked")
      var input = this.state.selectedFile
      var reader = new FileReader();


      //define onload function
      //onload event is fired when the filereader has finished reading the file
      reader.onload = () =>
      {
          var dataURL = reader.result; //render.result contains resultant contents of the file
          this.setState({
              selectedImage: dataURL
            })
            this.props.updateImage( dataURL) //pass dataURL to customizer parent
           
      }
      //read file. Once it is read, onload function will be called
      reader.readAsDataURL(input);

     }

    allowUpload()
    {
     
      if(this.state.selectedFile === null){
        return;
      } else {
   

      return (
       <div>
         <button className="button greenGradient upBtn"
                onClick={this.onClickHandler}>
                Upload
        </button>

       </div>)}
    }


    onChangeHandlerTwo=event=>
    {
        
        if(event.target.files[0] != null)
        {
          this.setState({
            selectedFileTwo: event.target.files[0],
            
          })
          //new
          this.props.updateFileTwo( event.target.files[0])

          try
          {window.URL.createObjectURL(event.target.files[0])}
          catch(error){
            console.log('no chosen file')
          }

        }

    }

    onClickHandlerTwo = () => {
      console.log("clicked")
      var input = this.state.selectedFileTwo
      var reader = new FileReader();


      //define onload function
      //onload event is fired when the filereader has finished reading the file
      reader.onload = () =>
      {
          var dataURL = reader.result; //render.result contains resultant contents of the file
          this.setState({
              selectedImageTwo: dataURL
            })
            this.props.updateImageTwo( dataURL) //pass dataURL to page2 parent
            //console.log('selectedImage ', this.state.selectedImage)
      }
      //read file. Once it is read, onload function will be called
      reader.readAsDataURL(input);

     }

    allowUploadTwo()
    {
      if(this.state.selectedFileTwo === null){
        return;
      } else {

      return (
       <div>
       <button className="button greenGradient upBtn"
              onClick={this.onClickHandlerTwo}>
              Upload
       </button>

       </div>)}
    }

    render()
    {
      if(this.props.apparelMode === true)
      {
        return(
          <div className="uploadBox">
            <h1>Add an Image</h1>
            <p>Upload your apparel logo file</p>
            <form className="uploadForm" method="post" action="#" id="#">
                <div className="form-group files">
                  <input type="file"   key = {this.state.selectedImage} className="form-control"
                         accept = "image/jpeg, image/jpg, image/png"
                         onChange={this.onChangeHandler}/>
                </div>
            </form>
          {this.allowUpload()}
          </div>
      )

      }

      else
      {
        return(
          <div className="uploadBox" id = "#2">
            <h1>Add an Image</h1>
            <p>Upload your item logo file</p>
            <form className="uploadForm" method="post" action="#" id="#2">
                <div className="form-group files ">
                  <input type="file" key = {this.state.selectedImageTwo} className="form-control"
                         accept = "image/jpeg, image/jpg, image/png"
                         onChange={this.onChangeHandlerTwo}/>
                </div>
            </form>
          {this.allowUploadTwo()}
          </div>
      )
      }

    }
  }

  export default UploadFile;
