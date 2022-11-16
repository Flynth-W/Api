import type { response  } from "../../../deps.ts"

export function _number(min:number,max:number){
    return (x:number):response=>{
        if( x === undefined ){ return {body: x ,statusText:"nesesita un valor",ok:false}}
        if( min <= x && x <= max  ){
            return {body: x ,statusText:"OK",ok:true}
        }
        return {body: x ,statusText:`no esta en los limites ${min} ~ ${max}`,ok:false}
    }
}

