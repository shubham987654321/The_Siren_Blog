import { PureComponent } from "react";
import Headermangment from "./headermangment";
import LatestArticle from "./latestarticle";


class Food extends PureComponent{

  

    render(){
        return(
            <>
            <Headermangment/>
             <LatestArticle content="Food"/>
          

            </>
        )
    }
}


export default Food;