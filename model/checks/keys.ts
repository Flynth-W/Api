import type { response  } from "../../deps.ts"

export function _keys(key:string):response{
    if( key === undefined ){
        return {body: key ,statusText:"undefined",ok:false}
    }
    return {body: key ,statusText:"OK",ok:true}
    
}

