import axios from 'axios';
import { GET_USER_REQUEST,GET_USER_SUCCESS } from "./userType";
const getUserRequest=()=>{
    return{
        type:GET_USER_REQUEST
    }
}
const getUserSuccess=(data)=>{
    return{
        type:GET_USER_SUCCESS,
        payload:data
    }
}
export const getUsers=()=>{
    console.log("ABC")
    return (dispatch)=>{
    //dispatch(getUserRequest)
         axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response =>{
            const users =response.data
            console.log(users);
    //dispatch(getUserSuccess(users))
          })
    }
}