import { PureComponent } from "react";
import Headermangment from "./headermangment";
import LatestArticle from "./latestarticle";


class Technology extends PureComponent{

    render(){
        return(
            <>
            <Headermangment/>
       <LatestArticle content="Technology"/>
          

            </>
        )
    }
}


export default Technology;