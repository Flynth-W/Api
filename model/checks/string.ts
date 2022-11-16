import type { response  } from "../../deps.ts"

export function _string(min:number,max:number){
    return (x:string):response=>{
        const length=x.length
        if( min <= length && length <= max ){
            return {body: x ,statusText:"OK",ok:true}
        }
        return {body: x ,statusText:"Out to limits",ok:false}
    }
}
