import { serve } from "https://deno.land/std@0.160.0/http/server.ts";

const port = 8080;

const handler = async(request: Request,
    conn: any
    )=>{
  const body = `Your user-agent is:\n\n${
    request.headers.get("user-agent") ?? "Unknown"
  }`;
  console.log(request)
  console.log(await request.json())
  console.log(request.headers )

  return new Response(body, { status: 200 });
};




console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });
