import { Responses } from "../../../../service/responses/main.ts"
import { UserDB } from "../../../../db/user/user.clltns.ts"

export async function _user(filter:any, account:any){
//    console.log(account,filter)

    const resp = await UserDB.account.updateOne(filter,{$set :{...account}})
    if( resp.matchedCount === 0){ Responses.Json({error:"account not found"},404) }

    return Responses.Json({message:"OK"},202)
}
