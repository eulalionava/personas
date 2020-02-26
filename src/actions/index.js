import http from './http';

const startGetUsers = ()=>{ return {type:'START_GET_USERS',ready:false}}
const completeGetusers = (data)=>{ return {type:'COMPLETE_GET_USERS',data}}
const errorgetUsers = (err)=>{ return {type:'ERROR_GET_USERS',err}}

const startGetUserById = ()=>{ return {type:'START_GET_USER_BY_ID',ready:false}}
const completeGetuserById = (data)=>{ return {type:'COMPLETE_GET_USER_BY_ID',data}}
const errorgetUserById = (err)=>{ return {type:'ERROR_GET_USER_BY_ID',err}}


export const getUsers =()=>{
    
    return(dispatch,getState)=>{
        dispatch(startGetUsers());
        //Madamos la peticion con una promesa
        http.get('users/')
        .then( (response)=>{
            if(response.data){
                //MANDAMOS LO DATOS
                dispatch(completeGetusers(response.data));
            }
        })
        .catch( (err)=>{
            dispatch(errorgetUsers(err));
        })
    }
}

export const getUserById =(userId)=>{
    
    return(dispatch,getState)=>{
        dispatch(startGetUserById());
        //Madamos la peticion con una promesa
        http.get('users/' + userId)
        .then( (response)=>{
            console.log(response.data);
            if(response.data){
                //MANDAMOS LO DATOS
                dispatch(completeGetuserById(response.data));
            }
        })
        .catch( (err)=>{
            dispatch(errorgetUserById(err));
        })
    }
}