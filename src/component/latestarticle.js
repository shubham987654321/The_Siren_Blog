import Content from '../LatestArticle.json';

import Image from './image/latestarticle.jpg'
import './../styles/latestarticle.css'
import Advertisment from './advertisment';
import Toppost from './toppost';

import { Component } from 'react';
import Reactblog from './reactblog';









class  LatestArticle extends Component{
   
     
    
    
    
    
    constructor(props){
        super();
       
        this.state = {
         i : 1,
          blog :true,
          heading : props.content
        }
       
    }
    
   
    

    render(){
        return(
            <>
            {
            (this.state.blog) ?
            <>
            
             <div style={{cursor : "pointer"}}>
              <h1 styles={{marginLeft:"2vw"}}><b>{this.state.heading}</b></h1>
               <div className="latestarticle" >
                   {
                       Content.map((item)=>{
                           return(
                               <>
                               <div className="ACard" key={item.id}>
                               <img src={Image} className="IACard" alt="xyz"/>
                               <div className="Acontent">
                               <p className=" text1 Atext1  ">{Content[0].text3}</p>
                                   <p className="text2 Atext2">{Content[0].text4}</p>
                                   <span className="t1">{Content[0].travel}</span>
                                   <span className="t2">{Content[0].date}</span>
    
                               </div>
                                 
                               </div>
    
                               </>
                           )
                          
                       })
    
                       
    
    
                   }
                  
                 
                   <Advertisment /> 
                   <Toppost/>

               </div>
               </div>

               </>  : <Reactblog/>

    
             
            }
            </>
        )
                }
    
    }
    
    export default LatestArticle;


 