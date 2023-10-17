import { type } from "os";

export type Token = string | null;

export type accessDecodeToken = {
    'prints':{
        "sub":string,
        "exp":number,
        "email":string
    }
}

export type decodeToken = {
        "sub":string,
        "nickname" : string,
        "exp":number,
        "idx":number,
        "userProfile":string
}
