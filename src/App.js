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
<BrowserRouter>
 
  
  
    
   
   
    
    
   <Switch>
 
   <Route path="/" component={Home} exact></Route>
   <Route path="/home" component={Home}></Route>

   <Route path="/bollywood"  component={Bollywood} ></Route>
   <Route path="/hollywood" component={Hollywood}></Route>
   <Route path="/fitness" component={Fitness}></Route>
   <Route path="/food" component={Food}></Route>
   <Route path="/technology" component={Technology}></Route>
   <Route path="/Reactblog" component={Reactblog}></Route>

   
    
    
    
       
   
     </Switch>
    
    </BrowserRouter>
   
    </div> 

      </>
    )
  }

}


export default App;