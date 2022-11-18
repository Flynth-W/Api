import { create  } from "../../deps.ts"
import type { Payload , Header } from "../../deps.ts"
import { JWTkey } from "./env.ts"



const algorithm = "HS256"

const header: Header = {
  alg: algorithm,
  typ: "JWT",
};


export function _create(body:any){
    try{
        const payload: Payload = {
        //  iss: environmet.JWT.iss,
        //  exp: getNumericDate(300),
          body
        };
        const jwt =  create(header, payload, JWTkey)
        return {body:jwt,statusText:"ok",ok:true}

    }catch(_e){
        const e:Error= _e;
        return {body,statusText:e,ok:false}
    }
}

