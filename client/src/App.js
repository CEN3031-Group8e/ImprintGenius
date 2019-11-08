import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import page2 from "./views/page2Test/page2"
import NotFound from "./views/NotFound"
//import Header from "./components/Header/Header"

class App extends React.Component
{
 constructor(props) {
   super(props);
     this.state = {
       //add any states you need
       selectedFile: null     

     }
 }
   render()
   {
     return(
       <div>
       <Switch>
         <Route exact path="/Home" component={Home} />
         <Route exact path="/PageTwo" component={page2} />
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
