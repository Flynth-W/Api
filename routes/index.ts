import {userRoute} from "./user/index.ts"

export function routes(_rout:string[] | null,req:Request){
    if( _rout === null ){
        console.log("nulll rout ")
        return new Response("asd", { status: 404 })   
    }
    switch ( _rout[0] ){
        case "user":
            return userRoute(_rout.slice(1),req)
        case "admin":
            console.log("admin")
            break;
        default :
            console.log("default")
            break;

    }
    return new Response("asd", { status: 200 });
}

