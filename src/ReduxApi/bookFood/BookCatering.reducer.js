import { FETCH_BOOKFOOD_SUCCESS,
    FETCH_BOOKFOOD_REQUEST,
    FETCH_BOOKFOOD_FAILURE

} from './BookCatering.types'
const initialState={
    loading:false,
    bookFood:[],
    error:''

}

const bookFoodservicesReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_BOOKFOOD_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_BOOKFOOD_SUCCESS:
            return{
                bookFood:action.payload,
                loading:false,
                error:''
            }
        case FETCH_BOOKFOOD_FAILURE:
            return{
                loading:false,
                bookFood:[],
                error:action.payload
            }
            
    
        default: return state
        
    }
}
export default bookFoodservicesReducer;