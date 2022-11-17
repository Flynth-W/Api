import { Model } from "../../deps.ts"
import type { property  } from "../../deps.ts"
import { Checks } from "../checks/Checks.ts"
import type { typeAccount } from "./account.ts"
import { UserAccout } from "./account.ts"


export type typeLogins={
    account?:property | typeAccount
    dataId?:property|string
}


const _modelLogins:typeLogins={
    account:{ check:Checks.Model(UserAccout)},
    dataId:{check:Checks.String(0,100)}
}

export const UserLogins= new Model(_modelLogins)

// Test:
//const Useracc={
//    account:{
//        name:"juan",
//        password:"wfeewfasdasd"
//    },
//    dataId:"23pieroerur"
//}
//console.log(UserLogins.Put(Useracc))
