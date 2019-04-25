import axios from 'axios';
// import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';


export const registerUser =(userData, history) =>(dispatch) =>{
    console.log(userData)
    let data = JSON.stringify(userData);
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        }
      };
  
  
    axios.post('api/users/register',data, config).then(res=> console.log(res)).catch(err=> console.log(err))//we'll change to dispatch later
}