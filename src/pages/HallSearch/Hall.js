import React, { useState, useEffect } from "react";
import axios from 'axios';
import hallSearch from "../../Assets/images/weddingHallsearch.jpg"

const CaseStatusLaw= () => {

  const [VenueType, setVenueType] = useState("");
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [city, setCity] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:2000/api/hall/gethalls')
      .then((res) => {
        setData(res.data.dataH);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = () => {
    const search = data.filter(x => x.VenueType === VenueType || x.city === city);
    console.log(VenueType, city);
    console.log(data);
    console.log(search);
    setSearchData(search);
    setShow(true);
  }

  const handleChangeVenueType = (e) => {
    setVenueType(e.target.value);
  }

  const handleChangecity = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  }




  return (

    <div>
     
<img src={hallSearch} alt="weddinghall"/>
<h1>Select </h1>
      <form className="d-flex flex-column justify-content-center align-items-center">

        <label className="judge-name-case-no">Hall Type:</label>
        <select className="option-judge-case-no"
         
          onChange={handleChangeVenueType}>
          <option 
          name="select judge name" disabled>Select HallType</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.VenueType}>{el.VenueType}</option>
            ))}
          </> : null}

        </select>
        <label className="party-name-case-year">Select  VenueType:</label>
        <select
          onChange={handleChangecity}
          className="option-party-c-year">
          <option name="select party name" disabled>Select city</option>
          {data.length > 0 ? <>
            {data.map(el => (
              <option name={el.city}>{el.city}</option>
            ))}
          </> : "No Record to display"}

        </select>

      </form>
      <button onClick={handleSubmit} className="status-search-btn-case-status" > Search </ button>
      <br/>
      <br/>
      {show ? (
        <>

          <div className="row">
            <div className="col-md-12 mb-3 d-flex">
             

              <div >
                <span>Name</span>
              </div>

              <div >
                <span >Hall</span>
              </div>

              <div >
                <span  >MaximumCapacity</span>
              </div>
              <div >
                <span  >MinimumGuest</span>
              </div>
              <div >
                <span  >VenueType</span>
              </div>
              <div >
                <span  >City</span>
              </div>
              <div >
                <span  >description</span>
              </div>
              <div >
                <span  >Img</span>
              </div>
              
            </div>
            <div >

              {searchData.map((list) => {
                const {
                 
                Hall,
                MaximumCapacity,
                MinimumGuest,
                Services,
                VenueType,
                city,
                description,
                name,
                img

              
               

                } = list;
                return (


                  <div
                    key={name}
                    className="row justify-content-around p-3 align-items-center shadow-sm"
                  >


                  
<div>
                      <span>
                     
                          <img src={img} alt="asd"/>
                          
                        </span>
                    </div>
                    <div>
                      <span>{name}</span>
                    </div>

                    <div >
                        
                      <span >{Hall}</span>
                    </div>

                    <div >
                      <span >{MaximumCapacity}</span>
                    </div>
                   
                   
                    <div >
                    <span >{MinimumGuest}</span>
                    </div>
                    <div >
                    <span >{Services}</span>
                    </div>
                    <div >
                    <span >{VenueType}</span>
                    </div>
                    <div >
                    <span >{city}</span>
                    </div>
                    <div >
                    <span >{description}</span>
                    </div>
                  




                  </div>
                )
              })}
            </div>
          </div>
        </>) : null}
    </div>

  )
}
export default CaseStatusLaw;









