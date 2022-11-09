import { GET_USER_REQUEST, GET_USER_SUCCESS } from "./userType"
const initialState={
    loading:false,
    users:[]
}
const  userReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_USER_REQUEST:
            return{
                ...state,
                loading:true
            }
        case GET_USER_SUCCESS:
            return{
                loading:false,
                users:action.payload
            }
    }
}
export default userReducer