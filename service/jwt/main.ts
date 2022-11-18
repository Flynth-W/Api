import { _create } from "./create.ts"
import { _verify } from "./verify.ts"

export class DJWT{
    static Create=_create
    static Verify=_verify
}
//const  jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Njg4MDUwNjcsImJvZHkiOnsibmFtZSI6InVzZXIzIiwicGFzcyI6Im5vcmVhZHVzZXIifX0.trQMKPxWWH87Sf5MnEfVeFmooHx3XpcTQf6SGcbVeZE"
//console.log( await DJWT.Verify(jwt) )

//console.log( await  DJWT.Create({name:"user3",password:"noreaduser"}).body )
