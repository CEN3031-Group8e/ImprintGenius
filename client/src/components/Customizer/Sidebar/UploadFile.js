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
            selectedFile: null,    //apparel logo
            selectedFileTwo: null  //item logo
            //selectedImage: null
        }
    }
    onChangeHandler=event=>
    {
        //setting state in app.js
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
         // var output = document.getElementById('output') //get the area where you want the image to be displayed
         // output.src = dataURL; //set that image's src as the file's dataURL
          this.setState({
              selectedImage: dataURL
            })
            this.props.updateImage( dataURL) //pass dataURL to page2 parent
            //console.log('selectedImage ', this.state.selectedImage)
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
        //setting state in app.js
        if(event.target.files[0] != null)
        {
          this.setState({
            selectedFileTwo: event.target.files[0]
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
         // var output = document.getElementById('output') //get the area where you want the image to be displayed
         // output.src = dataURL; //set that image's src as the file's dataURL
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

    OnClickInput = (event) => {
      event.target.value = ''
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
                  <input type="file"  className="form-control"
                         accept = "image/*"
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
                  <input type="file"  className="form-control"
                         accept = "image/*"
                         onClick = {this.OnClickInput}
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
