import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"
import UploadFile from './components/Upload file/UploadFile';


/*const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>     
        <Route path = "/PageTwo" component = {UploadFile} />  
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
} */

class App extends React.Component
{
  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null
      }
  }

  onChangeHandler=event=>{

    console.log(event.target.files[0])
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
          <Route path = "/PageTwo" component = {UploadFile} />  
          <Route component={NotFound}/>
        </Switch>
      </div>      
      );
    }
}

export default App;
