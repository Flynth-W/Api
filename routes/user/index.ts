import { Profile } from "../../controllers/user/profile/main.ts"
import { Sign } from "../../controllers/user/sign/main.ts"
export function userRoute(_routes:string[] , req:Request){
    switch ( _routes[0] ){
        case "profile" :
            return Profile( _routes[1] , req )
        case "sign" :
            return Sign( _routes[1] , req )
        default :
            return new Response("asd", { status: 202 });
    }
}
