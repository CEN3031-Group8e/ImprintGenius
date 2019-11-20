import React from 'react';
import './UploadFile.css';
import 'bootstrap/dist/css/bootstrap.css';

class UploadFile extends React.Component
{
    constructor(props)
     {
        super(props);
        this.state = { 
            selectedFile: null
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
          var output = document.getElementById('output') //get the area where you want the image to be displayed
          output.src = dataURL; //set that image's src as the file's dataURL
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
      }
      return (
      <div>
        <button type="button" className="btn btn-success btn" 
                onClick={this.onClickHandler}>
                Upload
        </button>
        
      </div>)
    }
    render()
    {
        return(
            <div className="container">
            <div className="row">
              <div className="col-md-6">
                  <form method="post" action="#" id="#">
                      <div className="form-group files">
                        <label>Upload Your File </label>
                        <input type="file"  className="form-control" 
                                accept = "image/*" 
                                onChange={this.onChangeHandler}  />
                      </div>
                  </form>
              </div>
            </div>
            {this.allowUpload()}
            <img id = 'output'></img>
            
        </div>
        )
    }
  }

  export default UploadFile;