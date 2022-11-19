import { UserDB }    from "../../../../db/user/user.clltns.ts"
import { DJWT }      from "../../../../service/jwt/main.ts"
import { Responses } from "../../../../service/responses/main.ts"

export async function _user(account:any){
    const resp = await  UserDB.account.findOne(account)
    if( resp === undefined ){ return Responses.Json({error:"user not registered"},406) }
       
    const jwt= DJWT.Create({nick:resp.nick})
    if( ! jwt.ok ){ return Responses.Json(jwt,  401 ) }

    return Responses.Json({jwt:await jwt.body}, 202) 
}

