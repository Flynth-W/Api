import { Responses } from "../../../../service/responses/main.ts"
import { UserDB } from "../../../../db/user/user.clltns.ts"

export async function _user(filter:any){

    const respAccount = await UserDB.account.deleteOne(filter)
    const respProfile = await UserDB.profile.deleteOne(filter)
    if( respAccount === 1 && respProfile === 1 ){ return Responses.Json({message:"Error "},404) }
    return Responses.Json({message:"OK"},202)
}

