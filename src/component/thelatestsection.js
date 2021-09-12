

import './../styles/thelatest.css'
import TheLatestJson from "./../TheLatest.json";

import  image3 from './image/latest.jpg'

function TheLatest() {
    

    console.log("The Latest is called");
   
   


   


    return(
        <>
        <h1 styles={{marginLeft:"2vw"}}><b>The Latest</b></h1>
        <div className="theLatest">
        {
           
            TheLatestJson.map((item)=>{
              return( 
                  <>
                  <div className="Card" key={Date.now()}>
                   <img src={image3} className="sCard" alt="img4"/>
                   <div className="content">
                    <p className="text1">{item.text1}</p>
                    <p className="text2">{item.text2}</p>
                    <span className="t1">{item.travel}  </span>
                    <span className="t2">{item.date}</span>
                    </div>
                   
                    </div>
              </>
              )
            })
        }
      
        </div>
       
      

        

       
         


        </>
    )
    
}

export default TheLatest;