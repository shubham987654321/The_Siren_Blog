import { PureComponent } from "react";
import Headermangment from "./headermangment";
import LatestArticle from "./latestarticle";
import Toppost from "./toppost";

class Fitness extends PureComponent{

    render(){
        return(
            <>
            <Headermangment/>
        <LatestArticle content="Fitness"/>
            <Toppost/>

            </>
        )
    }
}


export default Fitness;