export function Profile( property:string , req:Request){
    const rp = req.headers.get("sign") || "s"
    console.log(JSON.parse(rp))
    return new Response("asd", { status: 202 });
}
