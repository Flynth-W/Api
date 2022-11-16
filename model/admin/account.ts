import { Model } from "../../deps.ts"
import type { property  } from "../../deps.ts"
import { Checks } from "../checks/Checks.ts"

export type typeAccount={
    name?:property | string
    password?:property|string
}


const _modelAccount:typeAccount={
    name:{ check:Checks.String(0,15)},
    password:{ check:Checks.Password({min:10,max:20})},
}

export const AdminAccout= new Model(_modelAccount)


// Test :
//const user:typeAccount={
//    name:"exampleName" ,
//    password:"exampleName" ,
//}
//
//console.log( UserAccout.Post(user))
