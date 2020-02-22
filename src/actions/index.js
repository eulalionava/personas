import http from './http';

const startGetUsers = ()=>{ return {type:'START_GET_USERS',ready:false}}
const completeGetusers = (data)=>{ return {type:'COMPLETE_GET_USERS',data}}
const errorgetUsers = (err)=>{ return {type:'ERROR_GET_USERS',err}}


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