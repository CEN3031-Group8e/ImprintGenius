import React, { Component } from 'react';
import './Customizer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import '../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UpArrow from '../../assets/upArrow.png' // relative path to image
import DownArrow from '../../assets/downArrow.png' // relative path to image
import Shirt from '../../assets/shirt.png' // relative path to image
import { withRouter } from "react-router-dom";

//sidebar and item display components
import UploadFile from "../../components/PageTwo/UploadFile";
import DisplayItem from '../../components/PageTwo/DisplayItem.js';
import {ColorPicker} from '../../components/PageTwo/ColorPicker.js';
import QuantitySelect from '../../components/PageTwo/QuantitySelect.js';


class Customizer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedPackage: this.props.location.state, //passed from Home page

      imageType: 'tshirt',
      apparelMode: true,
      clicked: true,
      selectedFile: null,
      selectedImage: null, //selected image data URL (base64)

      colorsChosen: [], //updated from ColorPicker (child)
      totalSizes: [],
      capacity:100,

      sideBarOption: null //based on button id
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
  })}
  updateMode(mdType){ 
    this.setState({
        apparelMode: mdType
  })} 
  updateFile(selectedFileNew){ 
    this.setState({
        selectedFile: selectedFileNew
  })}
  updateSelectedImgDataURL(selectedImageNew){
    this.setState({
          selectedImage: selectedImageNew
  })}
  updateColors(clrs){ 
    this.setState({
        colorsChosen: clrs
  })}
  updateTotalSizes(total){
    this.setState({
      itemSum: total
  })}
  checkBtns(){
    if(this.state.sideBarOption === "upload"){
        return(
            <UploadFile updateFile={this.updateFile} 
                        updateImage = {this.updateSelectedImgDataURL}/>)
    }
    else if(this.state.sideBarOption === "colors"){
        return (<ColorPicker updatePicker={this.updateColors}/>); //child to Parent
    }
    else if(this.state.sideBarOption === "quantity"){
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


    render() {
      const { data } = this.props.location.state;

      return (
        <div>
          <Container className='' fluid={true}>
            <Row>
              <Col md={2}>
                <div className='itemSidebar'>
                  <h3 className='sidebarTitle'>Package Items</h3>
                  <img src={UpArrow} className='arrow m30Top'></img>
                  <div className='itemContainer'>
                    {data.items.map((item) =>
                      <div className='packItem'>
                          
                      </div>
                    )}
                  </div>
                  <img src={DownArrow} className='arrow m30Top'></img>
                  <p className='m30Top greenLink'>View All</p>
                  <p className='greenLink'>View Unfinished</p>
                </div>
              </Col>
              <Col md={5}>
                {//tshirt/item displayer (paula's seciton)
                }
                <DisplayItem updateDisplay={this.updateType}></DisplayItem>

              </Col>
              <Col md={5}>
                <div className='itemControls'>

                 <div className="btn-component">
                     {this.checkBtns() }
                 </div>    

                  <div className='buttonContainer'>
                    <button className='itemControlButton'
                      onClick={() => {
                        this.setState({
                            sideBarOption: "upload",
                            colorsChosen: [] //reset array (start-over)
                      })}}>
                      Upload
                    </button>
                    <button className='itemControlButton borderTop'
                      onClick={() => {
                        this.setState({
                          sideBarOption: "colors",
                          colorsChosen: [] //reset array (start-over)
                      })}}>
                      Colors
                    </button>
                    <button className='itemControlButton borderTop'
                      onClick={() => {
                        this.setState({
                          sideBarOption: "quantity",
                      })}}>
                      Quantity
                    </button>
                    <button className='itemControlButton borderTop'>
                      Help
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
}

export default withRouter(Customizer);
