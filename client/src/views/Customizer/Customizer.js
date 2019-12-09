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

import {largePath, notebookPath, penPath, bottlePath, cablePath, walletPath} from './CustomizerImages.js';


import {promoItemsData, apparelItemsData} from '../../data/itemsData.js'

class Customizer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedPackage: this.props.location.state, //passed from Home page

      imageType: 'tshirt', //initial state: display tshirt
      apparelMode: true,
      selectedFile: null,
      selectedImage: null, //selected image data URL (base64)

      selectedFileTwo:null,
      selectedImageTwo:null,

      //to send to customizer for color palette +
      //for force render checker of customizer/quantity
      currentItemData: null,
      //updated from ColorPicker (child)
      allApparelColorsChosen: this.initAllApparelColorsChosen(), //{type, colorsChosen[] (5 max)}
      allPromoColorsChosen: this.initAllPromoColorsChosen(),  //{type, colorsChosen (one)}
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
      temparr[tempIndex].colorsChosen = clrs;
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


//Show image by color chosen
imagesPath(){
  var allColorsChosen = this.state.allPromoColorsChosen;

  if(this.state.imageType == 'notebook'){
    var element1 = allColorsChosen.find(e => e.type === 'notebook');
    var colorsChosen = element1.colorsChosen;
    var str = 'notebook';
    str += colorsChosen[0];
    str = str.replace('#', '');
    // console.log(str);
    return (notebookPath[str]);
  }

  else if (this.state.imageType == 'pen'){
    var element1 = allColorsChosen.find(e => e.type === 'pen');
    var colorsChosen = element1.colorsChosen;
    var str = 'pen';
    str += colorsChosen[0];
    str = str.replace('#', '');
    return (penPath[str]);
  }

  else if (this.state.imageType == 'bottle'){
    var element1 = allColorsChosen.find(e => e.type === 'bottle');
    var colorsChosen = element1.colorsChosen;
    var str = 'bottle';
    str += colorsChosen[0];
    str = str.replace('#', '');
    return (bottlePath[str]);
  }

  else if (this.state.imageType == 'cable'){
    var element1 = allColorsChosen.find(e => e.type === 'cable');
    var colorsChosen = element1.colorsChosen;
    var str = 'cable';
    str += colorsChosen[0];
    str = str.replace('#', '');
    return (cablePath[str]);
  }

  else if (this.state.imageType == 'wallet'){
    var element1 = allColorsChosen.find(e => e.type === 'wallet');
    var colorsChosen = element1.colorsChosen;
    var str = 'wallet';
    str += colorsChosen[0];
    str = str.replace('#', '');
    return (walletPath[str]);
  }

  else {
    return (largePath[this.state.imageType]);
  }
}

  displayCustomizer(maxColorsChosen, colorsChosen){
   return( <ColorPicker maxColorsChosen={maxColorsChosen}
                        itemData ={this.state.currentItemData}
                        updateColors={this.updateColors} //child to parent sending clicked colors
                        colorsChosen={colorsChosen}
                        apparelMode = {this.state.apparelMode}/>)
  }
  displayQuantity(sizeOptions,capacity,colorsChosen,allSizes){
    return(<QuantitySelect sizeOptions ={sizeOptions}
                          capacity={capacity }
                          colorsChosen={colorsChosen} //send to child
                          allSizes={allSizes}
                          updateApparelAllSizes={this.updateApparelAllSizes}/>

    )
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
        () => { //force rerender/reload of props so the just clicked item's color picker gets displayed
          return (this.displayCustomizer(maxColorsChosen,colorsChosen));
        })
      }
      else{ //render unupdated
        return (this.displayCustomizer(maxColorsChosen,colorsChosen));
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
        var itemDataSelected = apparelItemsData.find(e => e.type === this.state.imageType); //
          if(itemDataSelected !== this.state.currentItemData){ //avoid infinite loop crash, only update on change
            this.setState(({
              currentItemData: itemDataSelected
            }),
            () => { //force rerender because different item clicked, force prop update
              return (this.displayQuantity(sizeOptions, capacity, colorsChosen, allSizes));
            })
          }
          else{ //load same render (props unchanged)
            return (this.displayQuantity(sizeOptions, capacity, colorsChosen, allSizes));
          }
      }
      else{
        return <div className="innerBoxCustomizer"><h1>Choose Quantities</h1><p>Must choose colors first!</p></div>
      }
    }
    else if(this.state.sideBarOption == "help")
    {
      return(
       <div className="innerBoxCustomizer">
         <h1>Get Help</h1>
         <p><b>Phone:</b> 352-554-8254</p>
         <p><b>Email:</b> sales@imprintgenius.com</p>
       </div>)

    }
  }
  isSizesfilled()
  {

    let array1 = this.state.allApparelSizes[0].allSizes;
    var sum1 = 0;
    array1.map(e => {
        sum1 += e.formCount;
    });

    let array2 = this.state.allApparelSizes[1].allSizes;
    var sum2 = 0;
    array2.map(e => {
        sum2 += e.formCount;
    });

    let array3 = this.state.allApparelSizes[2].allSizes;
    var sum3 = 0;
    array3.map(e => {
        sum3 += e.formCount;
    });


    if(sum1 == 60 && sum2 == 10 && sum3 == 5)
    return true
    else
    return false

  }

  isPromoColorsChosen()
  {

    var temp = this.state.allPromoColorsChosen.filter(e => e.colorsChosen.length == 1)
    console.log(temp);

    if(temp.length == 6)
    return true;

    else
    return false;

  }


  //send data to app.js once required data is saved and all details are filled
  handleSubmit()
  {
  
    if( !this.isSizesfilled() || !this.isPromoColorsChosen() || this.state.selectedImage == null || this.state.selectedImageTwo == null)
    {
      alert("Please fill all details before submitting");

    }

    else
    {
      this.props.updateData(this.state.selectedImage, this.state.selectedImageTwo, this.state.allApparelColorsChosen, this.state.allPromoColorsChosen, this.state.allApparelSizes);
      this.props.history.push('/Report', {data: this.props.data})
    }


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
          <button className='itemControlButton borderTop' onClick={() => {
              this.setState({
                sideBarOption: "help",
            })}}>
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

          <button className='itemControlButton borderTop'onClick={() => {
              this.setState({
                sideBarOption: "help",
            })}}>
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

    }
  }

  renderlogo()
  {
    if (this.state.apparelMode === true) {
      return (
        <img className="selectedImg" src = {this.state.selectedImage} />
      );
    }
    else if (this.state.imageType === "pen") {
      return <img className="penImg" src = {this.state.selectedImageTwo} />;
    }

    else if(this.state.imageType === "notebook" ){
      return <img className="notebookImg" src = {this.state.selectedImageTwo} />;
    }

    else if(this.state.imageType === "wallet" || this.state.imageType === "sticker"){
      return <img className="walletImg" src = {this.state.selectedImageTwo} />;
    }

    else if(this.state.imageType === "cable" ){
      return <img className="cableImg" src = {this.state.selectedImageTwo} />;
    }
    else if(this.state.imageType === "bottle" ){
      return <img className="bottleImg" src = {this.state.selectedImageTwo} />;
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
              </div>
            </Col>


            <Col md={5}>
              <div className="mainImage">
                <img className="apparelImg" src = {this.imagesPath()} />
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
              <div className='apparelSidebar'>
              {/*'Apparel in your Package' bottom bar*/}
              {this.displayBottomBar()}
              </div>

              <button type="button" className={
                !this.isSizesfilled() || !this.isPromoColorsChosen() || this.state.selectedImage == null || this.state.selectedImageTwo == null ? "submitBtn greenGradient disabled": "submitBtn greenGradient enabled"
              } onClick={ () => {
                  this.handleSubmit(); //update app.js
              }}>Submit Order</button>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Customizer);
