export { Model } from "../libAPI/mods.ts"
export { Connect }  from "../libAPI/mods.ts"
export type { property } from "../libAPI/mods.ts"
export type { response } from "../libAPI/mods.ts"

    import file from "./.env.json" assert { type: "json" }
export const environmet = {...file}

export  { create, verify , getNumericDate, } from "https://deno.land/x/djwt@v2.4/mod.ts";
export type {  Payload, Header} from "https://deno.land/x/djwt@v2.4/mod.ts";

