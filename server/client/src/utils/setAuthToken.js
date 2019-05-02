import axios from 'axios';
//this method is being used for configuring default auth token for axios. 
const setAuthToken = token =>{
    if(token){
        axios.defaults.headers.common['Authorization']=token;
    }else{
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken;