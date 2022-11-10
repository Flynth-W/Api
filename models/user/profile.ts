import { Model } from "../../deps.ts"
import type { property  } from "../../deps.ts"
import { Checks } from "./checks/Checks.ts"

export type typeProfile={
    name?:property | string
    age?:property|number
}


const _modelProfile:typeProfile={
    name:{ check:Checks.Name(0,15)},
    age:{ check:Checks.Age(18,35)},
}

export const UserProfile= new Model(_modelProfile)



//const user:typeProfile={
//    name:"exampleName" ,
//}
//
//console.log( UserProfile.Put(user))

