import {PureComponent } from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";

import Home from "./component/home";

import './styles/header.css'
import './App.css'
import Bollywood from "./component/bollywood";
import Hollywood from "./component/hollywood";

import Fitness from "./component/fitness";
import Food from "./component/food";
import Technology from "./component/technology";
import Reactblog from "./component/reactblog";



class App extends PureComponent{


  render(){

    return(
      <>
   <div>
<BrowserRouter basename={process.env.PUBLIC_URL}>
 
  
  
    
   
   
    
    
   <Switch>
 
  
   <Route path="/home" component={Home}></Route>

   <Route path="/bollywood"  component={Bollywood}  exact></Route>
   <Route path="/hollywood" component={Hollywood} exact></Route>
   <Route path="/fitness" component={Fitness} exact></Route>
   <Route path="/food" component={Food} exact></Route>
   <Route path="/technology" component={Technology} exact></Route>
   <Route path="/Reactblog" component={Reactblog} exact></Route>
   <Route path="/" component={Home}></Route>

   
    
    
    
       
   
     </Switch>
    
    </BrowserRouter>
   
    </div> 

      </>
    )
  }

}


export default App;