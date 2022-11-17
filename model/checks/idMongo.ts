import type { response  } from "../../deps.ts"

export function _idMongo(id:string):response{
        return {body: id ,statusText:"OK",ok:true}
}
