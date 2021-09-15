import { FETCH_CATERING_REQUEST,
    FETCH_CATERING_SUCCESS,
    FETCH_CATERING_FAILURE


 } from "./CateringTypes";
 import axios from "axios"

 export const fetchCatering=()=>{
    
     return(dispatch)=>{
        dispatch(fetchcateringrequest());
         axios.get('http://localhost:2000/api/catering/get-catering')
         .then((res)=>{
             const cateringser=res.data;
             console.log(cateringser)
             dispatch(fetchcateringSuccess(cateringser))

         })
         .catch((err)=>{
             dispatch(fetchCateringFailure(err.message))
         })


     }
 }

 export const fetchcateringrequest=()=>{
     return{
         type:FETCH_CATERING_REQUEST
     }
 }
 export const fetchcateringSuccess=(cateringser)=>{
     return{
         type:FETCH_CATERING_SUCCESS,
         payload:cateringser
     }
    }
 export const fetchCateringFailure=(err)=>{
     return{
         type:FETCH_CATERING_FAILURE,
         payload:err

     }
 }

