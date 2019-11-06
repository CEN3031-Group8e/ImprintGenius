import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import ColorPicker from "./components/PageTwo/ColorPicker"
import NotFound from "./views/NotFound"
import Header from "./components/Header/Header"


const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/PageTwo" component={ColorPicker} />
        <Route exact path="/">
          <Redirect to="/PageTwo" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
