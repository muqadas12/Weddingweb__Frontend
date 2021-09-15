import { FETCH_DEALER_SUCCESS,
    FETCH_DEALER_REQUEST,
    FETCH_DEALER_FAILURE

} from "./Dealer.types";
const initialState={
    loading:false,
    dealers:[],
    error:''

}

const dealerReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_DEALER_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_DEALER_SUCCESS:
            return{
                dealers:action.payload,
                loading:false,
                error:''
            }
        case FETCH_DEALER_FAILURE:
            return{
                loading:false,
                dealers:[],
                error:action.payload
            }
            
    
        default: return state
        
    }
}
export default dealerReducer;