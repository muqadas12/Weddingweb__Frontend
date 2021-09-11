import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
    loading:false,
    token:'',
    error:''

}
const fetch2=async(api,body,token='')=>{
   const res=await  fetch(api,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
    })
    return await res.json();


}

export const signupUser=()=>createAsyncThunk(
    'signupuser',
    async(body)=>{
       const result=await  fetch2('http://localhost:2000/api/users/signup',body)
       return result;
       
    }

)

const authReducer=createSlice({
    name:'Users',
    initialState,
    reducers:{},
    extraReducers:{
        [signupUser.fulfilled]:(state,action)=>{
            state.loading=false
            if(action.payload.error){
                state.error=action.payload.error

            }

        },
        [signupUser.pending]:(state,action)=>{
            state.loading=true

        }

    }
})
export default authReducer.reducer;