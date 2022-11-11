import { Model } from "../../deps.ts"
import type { property  } from "../../deps.ts"
import { Checks } from "./checks/Checks.ts"
import type { typeAccount } from "./account.ts"
import { UserAccout } from "./account.ts"


export type typeAccounts={
    account?:property | typeAccount
    dataId?:property|string
}


const _modelAccounts:typeAccounts={
    account:{ check:Checks.Account(UserAccout)},
    dataId:{check:Checks.Name(0,100)}
}

export const UserAccouts= new Model(_modelAccounts)

//const Useracc={
//    account:{
//        name:"juan",
//        password:"wfeewfasdasd"
//    },
//    dataId:"23pieroerur"
//}
//console.log(UserAccouts.Put(Useracc))
