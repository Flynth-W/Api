import type { response  } from "../../deps.ts"

export function _password(length:{min:number,max:number}){
    return (x:string):response=>{
        const xLength=x.length
        if( length.min <= xLength && xLength <= length.max ){
            return {body: x ,statusText:"OK",ok:true}
        }
        return {body: x ,statusText:"Out to limits",ok:false}
    }
}

