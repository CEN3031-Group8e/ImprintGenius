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
        imageType: 'tshirt',
        apparelMode: true
      }
  }


    render()
    {
      return(
        <div>
               <Switch>
                 <Route exact path="/PageTwo" component={PageTwo} />
               </Switch>
             </div>
      );
    }
}

export default App;
