import { atom } from 'recoil';

export const loginIdInput = atom ({
    key: 'loginID',
    default : ""
})
export const loginPwInput = atom ({
    key: 'loginPW',
    default : ""
})

export const accessTokenData = atom ({
    key: 'accessTokenData',
    default: ""
})

export const refreshTokenState = atom ({
    key: 'refreshToken',
    default: ""
})

export const loginEmail = atom ({
    key: 'email',
    default: ""
})