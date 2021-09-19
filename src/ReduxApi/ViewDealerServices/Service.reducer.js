import { FETCH_SERVICES_SUCCESS,
    FETCH_SERVICES_REQUEST,
    FETCH_SERVICES_FAILURE

} from './Service.types'
const initialState={
    loading:false,
    services:[],
    error:''

}

const servicesReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_SERVICES_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_SERVICES_SUCCESS:
            return{
                services:action.payload,
                loading:false,
                error:''
            }
        case FETCH_SERVICES_FAILURE:
            return{
                loading:false,
                services:[],
                error:action.payload
            }
            
    
        default: return state
        
    }
}
export default servicesReducer;