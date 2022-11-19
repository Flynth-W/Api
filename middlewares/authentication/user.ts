import { UserDB } from "../../db/user/user.clltns.ts"


export async function _user(filter:any){

    if( filter.body === undefined ){ 
        return {body:filter,statusText:"undefined body",ok:false}  
    }

    const resp = await UserDB.account.findOne(filter.body)

    if( resp === undefined ){ 
        return {body:filter,statusText:"no exist",ok:false}  
    }

    return {body:{nick:resp.nick},statusText:"OK",ok:true}
}
