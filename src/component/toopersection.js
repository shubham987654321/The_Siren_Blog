import { PureComponent } from "react";
import One from './image/first.jpg';
import Second from './image/second.jpg';
import './../styles/imagewidth.css'



class Toopersection extends PureComponent{


    render(){

        return(
            <>

           <div>
              <span> <img  className="firstImage" src={One} alt="headerImage"/></span>
               <span className="container2">
               <img  className="secondImage" src={Second} alt="headerImage2"/>
               <img  className="secondImage2" src={Second} alt="headerImage2"/>
               </span>
           </div>


            </>
        )
    }
}

export default Toopersection;