import { UserDB } from "../../../db/user/user.clltns.ts"
async function onlyUser(body:Record<never,never>){
    
}


export async function _login(req:Request){
    const body = await  req.json()
    console.log(body) 
    const jwt="nole"
    return new Response("asd", { status: 202 });
}
