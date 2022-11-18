export function _jwt(body:Record<never,never> , status:number){
        const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
    const requestOptions = {
        headers: new Headers(headerDict),
        status
    }

    return new Response(JSON.stringify(body) , requestOptions)

}

