export function routes(_rout:string[] | null){
    if( _rout === null ){
        console.log("nulll rout ")
        return new Response("asd", { status: 404 })   
    }
    switch ( _rout[0] ){
        case "user":
            console.log("user")
            break ;
        case "admin":
            console.log("admin")
            break;
        default :
            console.log("default")
            break;

    }
    return new Response("asd", { status: 200 });
}

