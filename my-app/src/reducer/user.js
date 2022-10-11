import { FETCH_USERS, SEND,GET_BY_DOMAIN } from "../components/constants";

const user=(users=[],action)=>{
   
    switch(action.type){
       
        case SEND:
            return action.payload;
        case FETCH_USERS:
            return action.payload;
        case GET_BY_DOMAIN:
             return action.payload;
        default:
            return users;
    }

}

export default user;