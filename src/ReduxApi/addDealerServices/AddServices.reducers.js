import { FETCH_ADDSERVICES_SUCCESS,
    FETCH_ADDSERVICES_REQUEST,
    FETCH_ADDSERVICES_FAILURE

} from './AddServices.types'
const initialState={
    loading:false,
    addservices:[],
    error:''

}

const addservicesReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_ADDSERVICES_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_ADDSERVICES_SUCCESS:
            return{
                addservices:action.payload,
                loading:false,
                error:''
            }
        case FETCH_ADDSERVICES_FAILURE:
            return{
                loading:false,
                addservices:[],
                error:action.payload
            }
            
    
        default: return state
        
    }
}
export default addservicesReducer;