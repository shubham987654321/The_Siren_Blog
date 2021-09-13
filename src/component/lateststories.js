import './../styles/thelatest.css'
import StoryJson from "./../story.json";
import './../styles/story.css'


function TopStory() {


    

    console.log("The Latest is called");
   
   


   


    return(
        <>
        <br></br><h1 styles={{marginLeft:"2vw"}}><b>Latest Stories</b></h1>
        <hr/>
        <div className="theLatest story">
       
        {
           
            StoryJson.map((item)=>{
              return( 
                  <>
                  <div className="Card St" key={item.id}>
                   
                   <div className="content">
                    <p className="text1">{item.text3}</p>
                    <p className="text2">{item.text4}</p>
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

export default TopStory;