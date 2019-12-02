import React from 'react';
import { Route, Switch, Redirect, Link  } from 'react-router-dom';
import Home from "./views/Home/Home"
import Customizer from "./views/Customizer/Customizer"
import NotFound from "./views/NotFound"
import './App.css';
import Report from "./views/Report/Report"
import Header from "./components/Header/Header"

//import DisplayItem from "./components/CustomizerPage/ItemSidebar/DisplayItem"
class App extends React.Component {
   constructor(props) {
     super(props);
      this.state = {
        selectedPackage: null,



        selectedImage: null, //image data uri for apparel logo
        selectedImageTwo: null, //image data uri for promo items logo

        allApparelColorsChosen: [], //{type, colorsChosen[] (5 max)}
        allPromoColorsChosen: [], //{type, colorsChosen[] (1 item in colorsChosen[])}
        allApparelSizes: [] //{type, allSizes[]}, allsizes array = {color, formCount, sizes[]}, sizes[] = array of numbers (eg:  sizes[0] = 2 means 2 items of size xs)


      }
      this.didSelectPackage = this.didSelectPackage.bind(this);
      this.updateData= this.updateData.bind(this);
   }

   didSelectPackage(data) {
     this.setState({ selectedPackage: data }, () => {
     });
   }


   //new
   updateData(selectedImage, selectedImageTwo, allApparelColorsChosen, allPromoColorsChosen, allApparelSizes ){
    this.setState({
      selectedImage: selectedImage,
      selectedImageTwo: selectedImageTwo,
      allApparelColorsChosen: allApparelColorsChosen,
      allPromoColorsChosen: allPromoColorsChosen,
      allApparelSizes: allApparelSizes

  })}

  //new end
   render() {
     return(
       <div>
       <Header />
       <Switch>
         <Route
            path='/Home'
            component={() => <Home didSelectPackage={this.didSelectPackage} />}
          />
          <Route
            path='/Customizer'
            component={() => <Customizer data={this.state.selectedPackage} updateData={this.updateData}  />}
          />
          <Route
            path='/Report'
            component={() => <Report selectedImage={this.state.selectedImage} selectedImageTwo={this.state.selectedImageTwo}
            allApparelColorsChosen={this.state.allApparelColorsChosen} allPromoColorsChosen={this.state.allPromoColorsChosen}
            allApparelSizes={this.state.allApparelSizes}/>}
          />
         <Route exact path="/">
           <Redirect to="/Home" />
         </Route>
         <Route component={NotFound}/>
       </Switch>
     </div>
     );
   }
}

export default App;
