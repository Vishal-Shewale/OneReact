import { myAxios } from "./helper";

export const signUp=(user)=>{
    myAxios
    .post('/api/auth/register')
    .then((response)=>response.json());
}