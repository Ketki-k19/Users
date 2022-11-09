import React,{useEffect} from "react";
import { getUsers } from "../redux/Users/userActions";
import { connect } from 'react-redux'
import {useSelector} from 'react-redux'
function Users(){
    // const userState=useSelector(state=>state)
    // console.log(userState)

    // const {users} =userState
    console.log(typeof(getUsers));
    useEffect(()=>{
       getUsers()()
        console.log("Hello World")
    },[])
    return <div>Hello World</div>}
    // return users?.loading?(
    //     <h2>Loading</h2>
    //   ):(
    //     <div>
    //     <h2>USER LIST</h2>
    //     <div>{
    //        users && users.users && users.users.map(user=><p>{user.name}</p>)}
       
    //     </div>
    //     </div>
    //  )
     

    const mapStateToProps=state=>{
        return{
            users:state?.user
        }
    }
    const mapDispatchToProps=dispatch=>{
        return{
            fetchUsers: ()=>dispatch(getUsers())
        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(Users)
//export default Users;