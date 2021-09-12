import { PureComponent } from "react";
import Headermangment from "./headermangment";
import LatestArticle from "./latestarticle";



class Hollywood extends PureComponent{

    render(){
        return(
            <>
            <Headermangment/>
            <LatestArticle content="Hollywood"/>
            
           
            </>
        )
    }
}


export default Hollywood;