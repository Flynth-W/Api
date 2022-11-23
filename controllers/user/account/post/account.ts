import { UserDB } from "../../../../db/user/user.clltns.ts"
import { UserAccount } from "../../../../model/user/account.ts"
import { UserProfile } from "../../../../model/user/profile.ts"
let nick = await UserDB.profile.find({}).toArray()
nick = [...nick]
let nickN = nick.length
async function create(body:any){
    const prof ={...body.profile,nick: nickN + 1}
    const acco ={...body.account,nick: nickN + 1}
    try{

        UserDB.profile.insertOne(prof)
        UserDB.account.insertOne(acco)
        nickN++
        return new Response("", { status: 201 });
    }catch{
        UserDB.profile.deleteOne(prof)
        UserDB.account.deleteOne(acco)
        return new Response("", { status: 409 });
    }
    
}



async function  onlyName(name:string){
    const res = await UserDB.account.findOne({name})
    if( res === undefined ){ return true }
    return false
}


export async function _Account(body:any){
    const only = await onlyName(body.account.name)
    if( only ){
        const checkAcount  = UserAccout.Post({...body.account,profileId:"0"})
        const checkProfile = UserProfile.Post({...body.profile,nick:0 })
        if( checkAcount.ok && checkProfile.ok ){
            return create(body)
        }else{
            return new Response("", { status: 406 });
        }
    }
    return new Response("", { status: 406 });
}


