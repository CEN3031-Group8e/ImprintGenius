import React from 'react';
import './UploadFile.css';
import 'bootstrap/dist/css/bootstrap.css';


class UploadFile extends React.Component
{
  constructor(props) {
    super(props);
    this.state = { 
        selectedFile: null
    } 
    console.log("constructor");
}
    onChangeHandler=event=>
    {
        //setting state in app.js
        this.setState({
            selectedFile: event.target.files[0]

          })
          //new
          this.props.updateFile( event.target.files[0])
          //new
        console.log(event.target.files[0])
        window.URL.createObjectURL(event.target.files[0])
        //console.log(this.state.selectedFile)

    }


    onClickHandler = () => {
      /*if(this.state.selectedFile === null){
        return;
      }*/
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

            console.log('selectedImage ', this.state.selectedImage)

            // console.log('data URL ' ,dataURL)
            // base64Img.img(dataURL, '', '1',function(err) {if (err, 'C:/Users/sneha/softwareEng/ImprintGenius') console.log(err)});


            }

            //read file. Once it is read, onload function will be called
            reader.readAsDataURL(input);

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
            <button type="button" className="btn btn-success btn-block" 
                    onClick={this.onClickHandler}>Upload</button>
            <img id = 'output'></img>
        </div>

        )
    }
  }

  export default UploadFile;
