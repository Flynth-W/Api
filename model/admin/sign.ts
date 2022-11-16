import { Model } from "../../deps.ts"
import type { property  } from "../../deps.ts"
import { Checks } from "../checks/Checks.ts"
import type { typeAccount } from "./account.ts"
import { AdminAccout } from "./account.ts"


export type typeSign={
    account?:property | typeAccount
    dataId?:property|string
}


const _modelSign:typeSign={
    account:{ check:Checks.Model(AdminAccout)},
    dataId:{check:Checks.String(0,100)}
}

export const AdminSing= new Model(_modelSign)

// Test:
//const Useracc={
//    account:{
//        name:"juan",
//        password:"wfeewfasdasd"
//    },
//    dataId:"23pieroerur"
//}
//console.log(AdminSing.Put(Useracc))
