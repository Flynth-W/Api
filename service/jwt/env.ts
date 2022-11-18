import { environmet } from "../../deps.ts";

const encoder = new TextEncoder()
const keyBuf = encoder.encode(environmet.JWT.key);

export const JWTkey = await crypto.subtle.importKey(
  "raw",
  keyBuf,
  {name: "HMAC", hash: "SHA-256"},
  true,
  ["sign", "verify"],
)

