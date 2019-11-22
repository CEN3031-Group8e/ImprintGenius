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
import DisplayPackageBar from '../../components/Customizer/ItemSidebar/DisplayPackageBar.js';
import {ColorPicker} from '../../components/Customizer/Sidebar/ColorPicker.js';
import QuantitySelect from '../../components/Customizer/Sidebar/QuantitySelect.js';
//Large images of package items
import tshirt from '../../assets/large1.png';
import longsleeve from '../../assets/large2.png';
import hoodie from '../../assets/large3.png';
import popsocket from '../../assets/pop2.png';
import powerbank from '../../assets/powerbank2.png';

const largePath = { //Chooses which image to display based on current imageType state
  tshirt: tshirt,
  longsleeve: longsleeve,
  hoodie: hoodie,
  popsocket: popsocket,
  powerbank: powerbank
}

class Customizer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedPackage: this.props.location.state, //passed from Home page

      imageType: 'tshirt',
      apparelMode: true,
      selectedFile: null,
      selectedImage: null, //selected image data URL (base64)

      //test
      selectedFileTwo:null,
      selectedImageTwo:null,

      //test

      colorsChosen: [], //updated from ColorPicker (child)
      allSizes: [], //{color, sizes[]}
      capacity:100,

      sideBarOption: null //based on button id
    };

    this.updateType = this.updateType.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateSelectedImgDataURL = this.updateSelectedImgDataURL.bind(this);
    this.updateColors = this.updateColors.bind(this);
    this.updateTotalSizes = this.updateTotalSizes.bind(this);

    //test
    this.updateFileTwo = this.updateFileTwo.bind(this);
    this.updateSelectedImgDataURLTwo = this.updateSelectedImgDataURLTwo.bind(this);

    //test

  }
  //all update functions below are from child component to parent (page2)
  updateFile(selectedFileNew){
    this.setState({
        selectedFile: selectedFileNew
  })}

  //test
  updateFileTwo(selectedFileNew){
    this.setState({
        selectedFileTwo: selectedFileNew
  })}

  //test
  updateSelectedImgDataURLTwo(selectedImageNew){
    this.setState({
          selectedImageTwo: selectedImageNew
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

  updateType(imgType){
    this.setState({
      imageType: imgType
    }) //Sets apparelMode state based on what was clicked in child
    if (imgType == 'tshirt' || imgType == 'longsleeve' || imgType == 'hoodie'){
      this.setState({apparelMode: true})
    }
    else {
      this.setState({apparelMode: false})
    }
  }


  checkBtns(){
    if(this.state.sideBarOption === "upload"){
        return(
            <UploadFile updateFile={this.updateFile}
                        updateImage = {this.updateSelectedImgDataURL}
                        apparelMode = {this.state.apparelMode}
                        updateFileTwo={this.updateFileTwo}
                        updateImageTwo = {this.updateSelectedImgDataURLTwo}/>)
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
            return <div className="innerBoxCustomizer"><h1>Choose Quantities</h1><p>Must choose colors first!</p></div>
        }
    }
  }

  //render upload/colors/quantity/help buttons based on whether item is selected or apparel
  renderBtns()
  {
    if(this.state.apparelMode == true)
        return(
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
    )

    else
    return(
        <div className='buttonContainer'>
          <button className='itemControlButton'
            onClick={() => {
              this.setState({
                  sideBarOption: "upload",
                  //colorsChosen: [] //reset array (start-over)
            })}}>
            Upload
          </button>

          <button className='itemControlButton borderTop'>
            Help
          </button>
      </div>

    )

  }

  //Checks if user is editing apparel or an accessory (e.g. popsocket)
  //Displays Apparel bottom bar component - only if editing apparel
  displayBottomBar() {
    if (this.state.apparelMode == true) {
      return (
        <div className="apparelSideBack">
          <h3 className="apparelSidebar">Apparel in your Package</h3>
          <DisplayApparelBar updateBar={this.updateType}></DisplayApparelBar>
        </div>
      );
    }
    else {
      return <h3 className="apparelSidebar">Out of Apparel Mode</h3>;
    }
  }

  renderlogo()
  {
    if (this.state.apparelMode == true) {
      return (
        <img className="selectedImg" src = {this.state.selectedImage} />
      );
    }
    else {
      return <img className="selectedImg" src = {this.state.selectedImageTwo} />;
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

                  {/*Package items sidebar*/}
                  <div className='itemContainer'>
                    <DisplayPackageBar updatePackBar={this.updateType}></DisplayPackageBar>
                  </div>

                  <img src={DownArrow} className='arrow m30Top'></img>
                  <p className='m30Top greenLink'>View All</p>
                  <p className='greenLink'>View Unfinished</p>
                </div>
              </Col>
              <Col md={5}>
                <div className="mainImage">
                  <img className="apparelImg" src = {largePath[this.state.imageType]} />
                     {/* //<img className="selectedImg" src = {this.state.selectedImage} />}//*/}
                     {this.renderlogo()}
                </div>

              </Col>
              <Col md={5}>
                <div className='itemControls'>

                   <div className="btn-component">
                       {this.checkBtns()}
                   </div>

                  <div className='buttonContainer'>
                    {this.renderBtns()}
                  </div>
                </div>
                <div className = 'apparelSidebar'>
                {/*'Apparel in your Package' bottom bar*/}
                {this.displayBottomBar()}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
}

export default withRouter(Customizer);
