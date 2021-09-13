import './../styles/blog.css'
import BlogJson from './../blog.json';

import Bimage from './image/blog.jpg';


import './../styles/navigation.css'
import { Container  } from 'react-bootstrap';

import {Navbar} from 'react-bootstrap';

import './../styles/navigation.css'
import { NavLink } from 'react-router-dom';



function Reactblog(){
    var ReactImgae = "https://miro.medium.com/max/1400/1*1Z177dpTeAp7uEFc5Zx2xg.png";
    var code = "https://miro.medium.com/max/875/1*08y12Sp1d9cLSKE9nz1EaA.png";
    var clap = "https://image.flaticon.com/icons/png/128/1616/1616602.png";
    var share = "https://image.flaticon.com/icons/png/128/929/929610.png";
    var man = "https://image.flaticon.com/icons/png/128/265/265674.png";
   var facebook = "https://image.flaticon.com/icons/png/128/733/733547.png"
   
    var twitter = "https://image.flaticon.com/icons/png/128/733/733579.png";
    var insta = "https://image.flaticon.com/icons/png/128/2111/2111463.png";
    var youtube = "https://img.icons8.com/external-justicon-flat-justicon/2x/external-youtube-social-media-justicon-flat-justicon.png";
   
   
   
   
   
    return (
        <>
      
<div className="ReactBlog">
 <span className="n1 n3 n4">The</span>
          <span className="n2 n3">Siren</span>
      <Navbar collapseOnSelect   className="class1" >
  <Container>
 
  <Navbar.Brand  className="c1"> <span className="n1">The</span>
          <span className="n2">Siren</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
 
  <NavLink to="/bollywood" style={{width: "80vw"}}>   <button  style={{marginLeft:"70%",width:"auto", border : "3px solid green", backgroundColor:"white"}}>Get Started</button></NavLink>
 
  </Container>
 
</Navbar>

 </div>



            <div className="ClapShare">
                <span> <img src={clap}   className="b1" alt="clap" /> 9.3k </span><br/>
                <span> <img src={share}  className="b1" alt="clap" /> Share this article </span>
             </div> 

         <div className="Blog">
           <h2>5 Ways to animate a React app.</h2>
           
            <img className="b1" src={facebook} alt="f"/>
            <img className="b1" src={twitter} alt="t"/>
            <img className="b1" src={insta} alt="i"/>
            <img  className="b1" src={youtube} alt="y"/>
             <div><img  className="b2" src={man} alt="y"/>
             <span className="t1">{BlogJson[0].name}Npzekhenko<span className="bt">Jan 28 2019 min read</span></span>
             </div>

             
                 <br/>
                <div className="BM">
                <img className="b3"  src={ReactImgae} alt="Imag"/>
                 <p className="btext"> Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.
Let’s talk about them 😎</p>
             
                </div>
                
              

             

             <div>
                 <img className="b4" src={code} alt="code"/>
             </div>

            
            
             <div className="btnSection">
                 <button>React</button> <button>Animation</button> <button>Javascript</button>
                 </div>
                 <br/>
             <span><img src={clap} className="b1" alt="clap" />9.3 claps</span><br/>
             <hr/><br/>
             <div><img  className="b2" src={man} alt="y"/>
             <span className="t1">{BlogJson[0].name}Npzekhenko<span className="bt">Jan 28 2019 min read</span></span>
             </div>
</div>


<div className="bContanier">
<b>More From  Siren</b>
           
            <br/>
             <hr/>

             {
                 BlogJson.map((item)=>{
                     return(
                         <>
                         <div className="bCard">
                            <p>{item.uppertext}</p>
                             <img className="bI" src={Bimage} alt="Bi" />
                             <h2>{item.btext}</h2>
                            <div><img  className="b6" src={man} alt="y"/> 
                            <span className="t1">{item.name}Npzekhenko<span className="bt">{item.date}</span></span></div>
                         </div>

                         </>
                     )
                 })
             }
            </div>
           
        </>
    )
}


export default Reactblog;