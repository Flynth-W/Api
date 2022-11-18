import { _login  }  from "./login.ts"
import { _post   }  from "./post/main.ts"
import { _put    }  from "./put.ts"
import { _delete }  from "./delete.ts"


export function Account( property:string , req:Request){
    switch (req.method){
        case "LOGIN":
            return _login(req)
        case "POST" :
            return _post(req)
        case "PUT"  :
            return _put(req)
        case "DELETE":
            return _delete(req)
    }
    
    return new Response("asd", { status: 202 });
}

