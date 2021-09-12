import './../styles/post.css';
import postimage from './image/post.jpg';
import ToppostJson from './../post.json';
import Image from './image/latestarticle.jpg';
import React, { Component } from 'react';

// import { render } from '@testing-library/react';
// import Reactblog from './reactblog';

class Toppost extends Component
{
  constructor(){
      super();
     
      this.state = {
       i : 1,
        blog :true
      }
     
  }
  
   fun2 = ()=>{
    console.log("fun2 is called")
   this.setState(
       {
           blog : false
       }
   )
   
     console.log(this.state.blog)
    
     
  }
 


render(){
    return (
        <>
{
       
    

     
        <div   className="post">
           
        <h1 ><b>Top Post</b></h1>
        <img src={postimage}  className="pImage" alt="postimage"/>
   
                           <span className=" text1 ptext1  ">{ToppostJson[0].text3} <span className="t3">
                           {this.state.i++}
                           </span></span> <br/>
                           
                              <span className="t5">
                               <span className="t1 ">{ToppostJson[0].travel}</span>
                               <span className="t2">{ToppostJson[0].date}</span>
                               </span>
                               <hr/>

                        
        {
            ToppostJson.map((item)=>{
                return(
                    <>
                <div className="ACard pCard">
                           <img src={Image} className="ipCard" alt="xyz"/>
                           <div className=" pContent">
                           <span className=" text1 ptext1  ">{item.text3} <span className="t3">
                           {this.state.i++}
                           </span></span>
                              <span className="t5">
                               <span className="t1">{item.travel}</span>
                               <span className="t2">{item.date}</span>
                               </span>

                           </div>
                             
                           </div>
                           </>
                )
            })
        }
        
       

        </div>
       
      
       
   

}

        </>
    )
}
}


export default Toppost;