import { Component } from "react";
import Headername from "./firstHeader";


import Navigation from "./Navigation";



class Headermangment extends Component{
    constructor(){
        super();
       
        this.state = {
         i : 1,
          blog :true
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
                <>
                <div>
                <Headername/>
                 <Navigation/>
                 </div>
                  
           
               
                </> : 
                <>
                 <div></div>
                </>

            }
            

           </>
        )
    }

       
    
}


export default Headermangment;