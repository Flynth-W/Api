import { Connect  } from "../../deps.ts"
// connect to mongodb
const data={
    urlmongo:"mongodb://127.0.0.1:8011",
    dbs:"user",
    clltn:"sign"
}

export const signClltn=await Connect(data.urlmongo,data.dbs,data.clltn)
