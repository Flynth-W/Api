import { _user } from "./user.ts"

export async function _login(req:Request){
    try{
        const body = await req.json()
        switch (body.user){
            case "user":
                return _user(body.account)
        }
        console.log(body.user)
        return new Response("asd", { status: 202 });

    }catch(_e){
        return new Response("", {status:403})
    }
}


