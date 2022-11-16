import { Model } from "../../deps.ts"
import type { property  } from "../../deps.ts"
import { Checks } from "../checks/Checks.ts"

export type typeProfile={
    name?:property | string
    email?:property| string
    RoleKey?:property | string
}


const _modelProfile:typeProfile={
    name:{ check:Checks.String(0,15)},
    email:{ check:Checks.Email},
    RoleKey:{check:Checks.Keys}
}

export const AdminProfile= new Model(_modelProfile)


// Test
//const user:typeProfile={
//    name:"exampleName" ,
//    age:32 ,
//}
//
//console.log( UserProfile.Put(user))

