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
//Promo item large images
import bottle from '../../assets/bottle.jpg';
import cable from '../../assets/cable.jpg';
import notebook from '../../assets/notebook.jpg';
import pen from '../../assets/pen.jpg';
import sticker from '../../assets/sticker.jpg';
import wallet from '../../assets/wallet.jpg';

import {promoItemsData, apparelItemsData} from '../../data/itemsData.js'
import { element } from 'prop-types';

const largePath = { //Chooses which image to display based on current imageType state
  tshirt: tshirt,
  longsleeve: longsleeve,
  hoodie: hoodie,
  bottle: bottle,
  cable: cable,
  notebook: notebook,
  pen: pen,
  sticker: sticker,
  wallet: wallet
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
      currentItemData: null,

      //updated from ColorPicker (child)
      allApparelColorsChosen: this.initAllApparelColorsChosen(), //{type, colorsChosen[] (5 max)}
      allPromoColorsChosen: this.initAllPromoColorsChosen(),  //{type, colorsChosen (one)}
      //allSizes: [], //{color, sizes[]}
      allApparelSizes: this.initAllApparelSizes(), //{type, allSizes[]}
      sideBarOption: null //based on button id
    };
    this.updateType = this.updateType.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateSelectedImgDataURL = this.updateSelectedImgDataURL.bind(this);
    this.updateColors = this.updateColors.bind(this);
    this.updateApparelAllSizes = this.updateApparelAllSizes.bind(this);
    this.updateFileTwo = this.updateFileTwo.bind(this);
    this.updateSelectedImgDataURLTwo = this.updateSelectedImgDataURLTwo.bind(this);
  }
  initAllApparelSizes(){   //each arr element init with itemType + colorsChosen[]
    var tempAllApparelSizes = [];
    apparelItemsData.map(item => {
      tempAllApparelSizes.push({
        type: item.type, //id from itemData
        allSizes: [] //each element: {color, sizes[]}, for storing allsizes array (XS-XXL)
      })
    });

    return tempAllApparelSizes;
 }

  initAllApparelColorsChosen(){   //each arr element init with itemType + colorsChosen[]
    var tempAllChosen = [];
    apparelItemsData.map(item => {
      tempAllChosen.push({
        type: item.type, //distinguish what item it is
        colorsChosen: [] //empty arr[max 5] to be filled by colorPicker return
      })
    });
    return tempAllChosen;
 }
 initAllPromoColorsChosen(){
  var tempAllChosen = [];
  promoItemsData.map(item => {
    tempAllChosen.push({
      type: item.type,
      colorsChosen: []//up to 1 item can be stored
    })
  });
  return tempAllChosen;

}
  //all update functions below are from child component to parent (page2)
  updateColors(clrs){
    if(this.state.apparelMode === true)
    {
      var tempIndex = this.state.allApparelColorsChosen.findIndex(item => item.type === this.state.imageType)
      var temparr = this.state.allApparelColorsChosen;
      temparr[tempIndex].colorsChosen = clrs;
      this.setState({
        allApparelColorsChosen: temparr
      })
    }
    else
    {
      var tempIndex = this.state.allPromoColorsChosen.findIndex(item => item.type === this.state.imageType)
      var temparr = this.state.allPromoColorsChosen;
      temparr[tempIndex].colorChosen = clrs;
      this.setState({
        allPromoColorsChosen: temparr
      })
    }
  }

  //{type,allSizes}/type
  updateApparelAllSizes(allSizes){ //allsizes now contains sum per form/color
    var tempIndex = this.state.allApparelSizes.findIndex(item => item.type === this.state.imageType)
    var temparr = this.state.allApparelSizes;
    temparr[tempIndex].allSizes = allSizes;

    this.setState({
      allApparelSizes: temparr,
    })
  }


  updateType(imgType){
    this.setState({
      imageType: imgType
    }) //Sets apparelMode state based on what was clicked in child
    if (imgType === 'tshirt' || imgType === 'longsleeve' || imgType === 'hoodie'){
      this.setState({apparelMode: true})
    }
    else {
      this.setState({apparelMode: false})
    }
  }

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
      var allItemsColors; //data to be passed into colorpicker
      var allColorsChosen; //{type, colorsChosen[]}
      var maxColorsChosen;
      if(this.state.apparelMode){
        allItemsColors = apparelItemsData; //from ItemData.js
        allColorsChosen = this.state.allApparelColorsChosen;
        maxColorsChosen = 5;
      }
      else{ //promo type
        allItemsColors = promoItemsData; ////from ItemData.js
        allColorsChosen = this.state.allPromoColorsChosen;
        maxColorsChosen = 1;
      }
      //item data contains {type, allPossibleColors[], package size,etc.}
      var itemData = allItemsColors.find(e => e.type === this.state.imageType);
      var element = allColorsChosen.find(e => e.type === this.state.imageType);
      var colorsChosen = element.colorsChosen;
       if(itemData !== this.state.currentItemData){ //avoid infinite loop crash, only update on change
        this.setState(({
          currentItemData: itemData
        }),
        () => { //only render until state is updated
          return (<ColorPicker maxColorsChosen={maxColorsChosen}
                               itemData ={this.state.currentItemData}
                               updateColors={this.updateColors} //child to parent sending clicked colors
                               colorsChosen={colorsChosen}/>); //send to child to show saved state
        })
      }
      else{ //render unupdated
        return (<ColorPicker maxColorsChosen={maxColorsChosen}
                             itemData ={this.state.currentItemData}
                             updateColors={this.updateColors} //child to parent sending clicked colors
                             colorsChosen={colorsChosen}/>); //send to child to show saved state
      }
    }
    else if(this.state.sideBarOption === "quantity"){
      //because user may be in quantity option when switching to promo item
      //this prevents crash (quantity doesnt show up for promo)
      if(!this.state.apparelMode) 
        return;
     //{type, colorsChosen[]}
        var apparelColors = this.state.allApparelColorsChosen.find(e => e.type === this.state.imageType);
        var colorsChosen = apparelColors.colorsChosen;

        // allSizes: {color,sizes[],sum}/element
        var sizesOfApparelItem = this.state.allApparelSizes.find(e => e.type === this.state.imageType);
        var allSizes = sizesOfApparelItem.allSizes;


        var apparelItem = apparelItemsData.find(e => e.type === this.state.imageType);
        var sizeOptions = apparelItem.sizeOptions;
       var capacity = apparelItem.capacity;

        if(colorsChosen.length !== 0){

          return (

            <QuantitySelect
            sizeOptions ={sizeOptions}
                capacity={capacity }
                colorsChosen={colorsChosen} //send to child
                allSizes={allSizes}
                updateApparelAllSizes={this.updateApparelAllSizes}/> //update parent
        )}
        else{
          return <div className="innerBoxCustomizer"><h1>Choose Quantities</h1><p>Must choose colors first!</p></div>
        }
    }
  }
  updatePalette(data)
  {
    if(data !== this.state.currentItemData){
      this.setState({
        currentItemData: data
      })
    }
  }

  //send data to app.js once required data is saved
  handleSubmit()
  {
    if(this.state.selectedImage != null && this.state.selectedImageTwo != null)
    {
      this.props.updateData(this.state.selectedImage, this.state.selectedImageTwo);
    }

    else
    alert("Please fill all details before submitting");


  }

  //render upload/colors/quantity/help buttons based on whether item is selected or apparel
  renderBtns()
  {

    if(this.state.apparelMode === true)
        return(
        <div className='buttonContainer'>
          <button className='itemControlButton'
            onClick={() => {
              this.setState({
                  sideBarOption: "upload",
            })}}>
            Upload
          </button>
          <button className='itemControlButton borderTop'
            onClick={() => {
              this.setState({
                sideBarOption: "colors",
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
            })}}>
            Upload
          </button>

          <button className='itemControlButton borderTop'
            onClick={() => {
              this.setState({
                sideBarOption: "colors",
            })}}>
            Colors
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
    if (this.state.apparelMode === true) {
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
    if (this.state.apparelMode === true) {
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
              <button type="button"  onClick={ () => {
                          this.handleSubmit(); //update app.js
                          }}>Submit</button>

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
