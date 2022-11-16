import type { response  } from "../../deps.ts"

export function _email(email:string):response{
    if( email === undefined ){
        return {body: email ,statusText:"undefined",ok:false}
    }
    return {body: email ,statusText:"OK",ok:true}
}


