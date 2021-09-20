import { FETCH_BOOKCAR_SUCCESS,
    FETCH_BOOKCAR_REQUEST,
    FETCH_BOOKCAR_FAILURE

} from './CarBooking.types'
const initialState={
    loading:false,
    bookCar:[],
    error:''

}

const bookCarReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_BOOKCAR_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_BOOKCAR_SUCCESS:
            return{
                bookCar:action.payload,
                loading:false,
                error:''
            }
        case FETCH_BOOKCAR_FAILURE:
            return{
                loading:false,
                bookCar:[],
                error:action.payload
            }
            
    
        default: return state
        
    }
}
export default bookCarReducer;