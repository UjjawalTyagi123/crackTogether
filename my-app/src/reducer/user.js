import { FETCH_USERS, SEND,GET_BY_DOMAIN, START_LOADING, END_LOADING } from "../components/constants";

const users=(state = { isLoading: true, users: [] }, action) =>{
   
    switch(action.type){
        case START_LOADING:
           return { ...state, isloading: true };
        case END_LOADING:
            return {...state,isloading:false};
        case SEND:
            return {...state,users:[...state.posts,action.payload.data]};
        case FETCH_USERS:
            return {...state,users:action.payload.data};
        case GET_BY_DOMAIN:
             return {...state,users:action.payload.data};
        default:
            return state;
    }

};

export default users;