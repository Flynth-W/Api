import { serve } from "https://deno.land/std@0.160.0/http/server.ts";
import { routes } from "./routes/index.ts"


const port = 8080;

async function  handler(
    request: Request,
//    conn: any
    ){
    const _rout:any      =request.headers.get("route") 
    const _method   = request.method
    const rout =  JSON.parse(_rout)  
   return    routes(rout)
}




console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });
