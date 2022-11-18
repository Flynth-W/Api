import { JWTkey } from "./env.ts"
import { verify } from "../../deps.ts";
//import { response } from "../../deps.ts"



export async function _verify(jwt:string){
    try {
        const payload = await verify(jwt, JWTkey); 
        //console.log("JWT is valid");
        return {body:payload,statusText:"OK",ok:true}
    }
    catch(_e){
        const e:Error= _e;
        return {body:jwt,statusText:e.message,ok:false}
    }

}
