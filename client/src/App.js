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
        selectedPackage: null
      }
      this.didSelectPackage = this.didSelectPackage.bind(this);
   }
   didSelectPackage(data) {
     this.setState({ selectedPackage: data }, () => {
     });
   }
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
            component={() => <Customizer data={this.state.selectedPackage} />}
          />
          <Route
            path='/Report'
            component={() => <Report />}
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
