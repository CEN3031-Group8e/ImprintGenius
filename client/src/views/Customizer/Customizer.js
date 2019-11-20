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
import UploadFile from "../../components/Customizer/Sidebar/UploadFile";
import DisplayApparelBar from '../../components/Customizer/ItemSidebar/DisplayApparelBar.js';
import {ColorPicker} from '../../components/Customizer/Sidebar/ColorPicker.js';
import QuantitySelect from '../../components/Customizer/Sidebar/QuantitySelect.js';

import tshirt from '../../assets/large1.png';
import longsleeve from '../../assets/large2.png';
import hoodie from '../../assets/large3.png';
import apparelIcon from '../../assets/apparel1.png';
import popsocketIcon from '../../assets/pop1.png';
import popsocket from '../../assets/pop2.png';
import powerbankIcon from '../../assets/powerbank1.png';
import powerbank from '../../assets/powerbank2.png';

const largePath = {
  tshirt: tshirt,
  longsleeve: longsleeve,
  hoodie: hoodie,
  popsocket: popsocket,
  powerbank: powerbank
}

const smallPath = {
  tshirt: apparelIcon,
  popsocket: popsocketIcon,
  powerbank: powerbankIcon
}

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
      allSizes: [], //{color, sizes[]}
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
  updateTotalSizes(all){
    this.setState({
      allSizes: all
  })}
  checkBtns(){
    if(this.state.sideBarOption === "upload"){
        return(
            <UploadFile updateFile={this.updateFile}
                        updateImage = {this.updateSelectedImgDataURL}/>)
    }
    else if(this.state.sideBarOption === "colors"){
        return (<ColorPicker updateColors={this.updateColors} //child to parent sending clicked colors
                             colorsChosen={this.state.colorsChosen}/>); //send to child to show saved state
    }
    else if(this.state.sideBarOption === "quantity"){
        if(this.state.colorsChosen.length !== 0){
            return (
                <QuantitySelect capacity={this.state.capacity }
                    colorsChosen={this.state.colorsChosen} //send to child
                    allSizes={this.state.allSizes}
                    updateTotalSizes={this.updateTotalSizes}/> //update parent
            )}
        else{
            return <div>Must choose colors first!</div>;
        }
    }
  }

  updateApparelMode(imgtype){
  if (imgtype != 'tshirt') { //if Package item clicked is not apparel
    this.setState({
        apparelMode: false
  })
  }
  else {
    this.setState({
        apparelMode: true
  })
  }
}

checkApparelMode() {
  if (this.state.apparelMode == true) {
    return (
      <div>
      <h3 className="apparelSidebar">Apparel in your Package</h3>
      <DisplayApparelBar updateBar={this.updateType}></DisplayApparelBar>
      </div>
    );
  }
  else {
    return <h3 className="apparelSidebar">Out of Apparel Mode (test)</h3>;
  }
}


    render() {
      const { data } = this.props.location.state;
      let packitems = ["tshirt", "popsocket", "powerbank"];


      return (
        <div>
          <Container className='' fluid={true}>
            <Row>
              <Col md={2}>
                <div className='itemSidebar'>
                  <h3 className='sidebarTitle'>Package Items</h3>
                  <img src={UpArrow} className='arrow m30Top'></img>
                  <div className=''>
                  {packitems.map((image) =>
                    <div className='packItem'>
                    <img style = {{maxWidth: '140px'}} key={image} src={smallPath[`${image}`]} onClick={() => {this.updateType(`${image}`); this.updateApparelMode(`${image}`); }}/>
                    </div>
                  )}
                  </div>
                  <img src={DownArrow} className='arrow m30Top'></img>
                  <p className='m30Top greenLink'>View All</p>
                  <p className='greenLink'>View Unfinished</p>
                </div>
              </Col>
              <Col md={5}>
                <img src = {largePath[this.state.imageType]} />

              </Col>
              <Col md={5}>
                <div className='itemControls'>

                   <div className="btn-component">
                       {this.checkBtns()}
                   </div>

                  <div className='buttonContainer'>
                    <button className='itemControlButton'
                      onClick={() => {
                        this.setState({
                            sideBarOption: "upload",
                            //colorsChosen: [] //reset array (start-over)
                      })}}>
                      Upload
                    </button>
                    <button className='itemControlButton borderTop'
                      onClick={() => {
                        this.setState({
                          sideBarOption: "colors",
                          //colorsChosen: [] //reset array (start-over)
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
                <div className = 'apparelSidebar'>
                {this.checkApparelMode()}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
}

export default withRouter(Customizer);
