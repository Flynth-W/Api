import type { response  } from "../../deps.ts"

export function _nick(nick:number):response{
        return {body: nick ,statusText:"OK",ok:true}
}

