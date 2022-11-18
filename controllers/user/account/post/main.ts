import { _Account } from "./account.ts"
export async function _post(req:Request){
    const body = await  req.json()
    switch ( body.log ){
        case "account" :
            return _Account(body)
            
    }

    console.log("rana rene") 
    return new Response("asd", { status: 202 });
}
