import TheLatest from "./thelatestsection";
import Toopersection from "./toopersection";
import TheLatestJson from "./../TheLatest.json";
import LatestArticle from "./latestarticle";
import TopStory from "./lateststories";
import Image from './image/latestarticle.jpg'
import './../styles/latestarticle.css'
import { Component } from "react";
import Reactblog from "./reactblog";
import Headermangment from "./headermangment";




class  Home extends Component {
    constructor(props){
        super();
       
        this.state = {
        
          blog :true,
         
        }
       
    }
    
     fun3 = ()=>{
      console.log("fun2 is called")
     this.setState(
         {
             blog : false
         }
     )
    }

render(){
    return(
<>
        {
            (this.state.blog) ?
    
        
      <div>
      <Headermangment/>
        <Toopersection />
        <TheLatest content={TheLatestJson} />
        <div onClick={this.fun3}>
        <LatestArticle  content= {"Latest Article"} />
        </div>
        <img src={Image} className="bigImage" alt="bgimage" onClick={this.fun3} />
        
        
     
       
        <TopStory/>
        </div>
    
      :   <Reactblog/>
    
       }

        </>
    )
}
    
}

export default Home;