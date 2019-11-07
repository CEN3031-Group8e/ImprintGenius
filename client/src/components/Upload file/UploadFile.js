import React from 'react';
import './UploadFile.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

class UploadFile extends React.Component 
{
    
    onChangeHandler=event=>
    {
        this.setState({
            selectedFile: event.target.files[0]
            
          })
        console.log(event.target.files[0])
        window.URL.createObjectURL(event.target.files[0])
        //console.log(this.state.selectedFile)
        
        
    }

    
    onClickHandler = () => {
        /*const data = new FormData() 
        data.append('file', this.state.selectedFile)
                //const image = this.state.selectedFile
               
                console.log("image ", data)*/

            var input = this.state.selectedFile    
            var reader = new FileReader();
            reader.onload = function()
            {
                var dataURL = reader.result;
                var output = document.getElementById('output')
                output.src = dataURL;

            }

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
                        <input type="file"  className="form-control"  onChange={this.onChangeHandler}  />
                       {/*<input type="file" name="file" onchange={this.onChangeHandler}/>*/}
    
                       
                      </div>                 
                    
                  </form>
                  
                  
              </div>
              
            </div>
            <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
            <img id = 'output'></img>
        </div>
    
        )
    }
  }

  export default UploadFile;