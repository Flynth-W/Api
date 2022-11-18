import { Profile } from "../../controllers/user/profile/main.ts"
import { Account } from "../../controllers/user/account/main.ts"
export function userRoute(_routes:string[] , req:Request){
    switch ( _routes[0] ){
        case "profile" :
            return Profile( _routes[1] , req )
        case "account" :
            return Account( _routes[1] , req )
        default :
            return new Response("asd", { status: 202 });
    }
}
