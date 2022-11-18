import { _create } from "./create.ts"
import { _verify } from "./verify.ts"

export class DJWT{
    static Create=_create
    static Verify=_verify
}
//console.log( await  DJWT.Create({name:"jhuan",pass:"sksldik"}).body )
//console.log( await DJWT.Verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijp7Im5hbWUiOiJqaHVhbiIsInBhc3MiOiJza3NsZGlrIn19.87WLXpvuvMKphPQLUNGLLOTmEL4CW9BAQgkQ03Ub36g") )
