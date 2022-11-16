import { Model } from "../../deps.ts"
import type { property  } from "../../deps.ts"
import { Checks } from "../checks/Checks.ts"
import type { typeProfile } from "./profile.ts"  
import { AdminProfile } from "./profile.ts"

export type typeData={
    id?:property | number
    profile?:property|typeProfile
}


const _modelData:typeData={
    id:{ check:Checks.Number(0,1000000)},
    profile:{ check:Checks.Model(AdminProfile)},
}

export const AdminData= new Model(_modelData)


// Test

//const user:typeData={
//    id:345,
//    profile:{
//        name:"juasnd",
//        email:"admin@gmail.com",
//        RoleKey:"asdasdwa "
//    } ,
//}
//
//console.log( AdminData.Put(user))
