import { _user } from "./user.ts"
import { DJWT } from "../../service/jwt/main.ts"

export async function Authenticate(jwt:string,user:"admin"|"user"){
    
    const vrfJWT= await DJWT.Verify(jwt)
    if( !vrfJWT.ok ){ return vrfJWT }        
    
    switch (user){
        //serach in  UserDB.account 
        case "user":
            return _user(vrfJWT.body)
        default:
            return {body:user,statusText:"Username does not exist",ok:false}

    } 
}
//const  jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijp7Im5hbWUiOiJ1c2VyMyIsInBhc3N3b3JkIjoibm9yZWFkdXNlciJ9fQ.l6KCxdUujZiS9r1JyIQGaWLIP9UOUZkqOnm2MM3cA-0"
//console.log(await Authenticate(jwt,"user"))
