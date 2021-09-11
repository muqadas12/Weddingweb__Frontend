
import React, { useEffect, useState } from "react";
import axios from "axios";

import c1 from "../../../Assets/images/c1.jpg"


export const ViewEFiling = (props) => {
  let [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 

  





  

  useEffect(() => {
    
    axios
      .get("http://localhost:2000/api/getdealer/get-dealers")
      .then((res) => {
        console.log(res.data)
        setData(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setIsLoading(false);
      });
  }, []);

 
  
  

  


  return (
    <div>
    <h2 className="cause-list-search">View Services:</h2>
   
   
      <div className="col-md-12 ">
        {isLoading ? (
         
           <p>isLoading</p>
          
        ) : (

          <div className="row">
             <div className="col-md-12 mb-3 d-flex">
              <div className="col-md-2 d-flex">

                <span className="lawyernameviewfiling">Sercice Name</span>
              </div>

              <div className="col-md-2 d-flex">
                <span className="partynamefilingview">Servuce</span>
              </div>
              <div className="col-md-2">
                <span className="casetypefiling">Description</span>
              </div>
              <div className="col-md-2 font-weight-bold h5">
                <span className="plaintshift">Plaint</span>
              </div>
              <div className="col-md-2 font-weight-bold h5">
                <span className="docxshift" >Price</span>
              </div>
              

              <div className="col-md-2 font-weight-bold h5">
                <span className="accbtn">Image</span>
              </div>
            
             
            </div>



            <div className="col-md-12 mb-3 h-80vh">

              
            
              {data.map((list) => {
                const {
                  serviceName,
                  dealerservice,
                  description,
                  price,
                  pathImg
                  
                

                } = list;
                return (
                 
                  
                  <div className="row">
                  <div key={serviceName} className="col-md-12 mb-3 d-flex">
                    
                     
                    <div className="col-md-2 d-flex">
                    
                      <span className="lawyernameviewfile">{serviceName}</span>
                    </div>
                  
                    <div className="col-md-4 d-flex">
                      <span className="partynamefiling">{dealerservice}</span>
                    </div>
                    <div className="col-md-2 d-flex">
                      <span className="typeofcase">{description}</span>
                    </div>
                    <div className="col-md-2 d-flex">
                      <span className="typeofcase">{price}</span>
                    </div>
                    <div>
                  

                        <img src={pathImg} alt="ab"/>
                     {/* <span src={pathImg}>{pathImg}</span> */}
                    </div>
                   
                  

                   
                    
                   
                  
                    
                   
                   

                    
                    
          
                   </div>
                   
                   </div>
                   
                  
                );
                
              })}
              
            </div>
            
           
          </div>
        )}
      </div>
      
    </div>
  );
};
export default ViewEFiling;










