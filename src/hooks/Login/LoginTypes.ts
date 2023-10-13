import { type } from "os";
import { signUp } from "../SignUp/SignUpTypes";

export type accessToken = {
    accessToken:string;
}

export type refreshToken = {
    refreshToken:string;
}

export type login = Pick<signUp,'email'|'password' >