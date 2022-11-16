import type { response  } from "../../deps.ts"

export function _model(model:any){
    return (x:Record<never,never>,mtd?:string):response=>{
        if( mtd === "post" ){   return model.Post(x)    }
        if( mtd === "put" ){   return model.Put(x)    }
        return {body: x ,statusText:"error ",ok:true}
    }
}

