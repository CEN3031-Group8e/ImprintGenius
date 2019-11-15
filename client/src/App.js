import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import DisplayItem from "./components/PageTwo/DisplayItem"
import PageTwo from "./views/PageTwo/PageTwo"


class App extends React.Component
{
  constructor(props) {
    super(props);
      this.state = {
        //selectedFile: null,
        //selectedImage: null
      }
  }

    render() 
    {
      return(
        <div>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>     
          <Route path = "/PageTwo" component = {PageTwo} />  
          <Route component={NotFound}/>
        </Switch>
      </div>      
      );
    }
}

export default App;
