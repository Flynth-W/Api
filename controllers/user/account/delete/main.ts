import {Authenticate} from "../../../../middlewares/authentication/main.ts"
import { Responses } from "../../../../service/responses/main.ts"
import { _user } from "./user.ts"

export async function _delete ( req:Request ){
    const jwt = req.headers.get("jwt")
    const user = req.headers.get("user")
    const resp = await Authenticate(jwt,user)
    
    if(!resp.ok){ return Responses.Json({resp},401) }

    const body= await req.json()
    
    switch ( user ){
        case "user":
            return _user(resp.body,body.account)
    }
    return new Response("asd", { status: 202 });
}
