import { PureComponent } from "react";
import Headermangment from "./headermangment";
import LatestArticle from "./latestarticle";


class Fitness extends PureComponent{

    render(){
        return(
            <>
            <Headermangment/>
        <LatestArticle content="Fitness"/>
          

            </>
        )
    } 
}


export default Fitness;