import { _string } from "./string.ts";
import { _number } from "./number.ts";
import { _password } from "./password.ts";
import { _model } from "./model.ts";
import { _keys } from "./keys.ts";
import { _email } from "./email.ts";
import { _idMongo } from "./idMongo.ts";
import { _nick } from "./nick.ts";
export class Checks {
    
    static String=_string
    static Number=_number
    static Password=_password
    static Model=_model
    static Keys=_keys
    static Email=_email
    static IdMongo=_idMongo
    static Nick=_nick
}
