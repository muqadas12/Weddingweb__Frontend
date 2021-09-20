import axios from 'axios';
import { FETCH_BOOKFOOD_REQUEST,
    FETCH_BOOKFOOD_SUCCESS,
    FETCH_BOOKFOOD_FAILURE

} from './BookCatering.types'

export const fetchbookFoodServices=(data)=>{

    return(dispatch)=>{
        dispatch(fetchBookFoodRequest())
        axios.post('http://localhost:2000/api/cateringfood/booking',data)
        .then((res)=>{
            const bookFood=res.data;
            console.log(bookFood,'hiii')
            alert('Food booked successfully')
            dispatch(fetchBookFoodSucces(bookFood))
        })
        .catch((error)=>{
            dispatch(fetchBookFoodFailure(error.message))
        })

    }
}


export const fetchBookFoodRequest=()=>{
    return{
        type:FETCH_BOOKFOOD_REQUEST
    }
}
export const fetchBookFoodSucces=bookFood=>{
    return{
        type:FETCH_BOOKFOOD_SUCCESS,
        payload:bookFood
    }
}

export const fetchBookFoodFailure=error=>{
    return{
        type:FETCH_BOOKFOOD_FAILURE,
        payload:error
    }
}
//payload is the data we need to pass to reducer