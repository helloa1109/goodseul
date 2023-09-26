import { atom } from 'recoil';

export const loginIdInput = atom ({
    key: 'loginID',
    default : ""
})
export const loginPwInput = atom ({
    key: 'loginPW',
    default : ""
})

export const accessTokenState = atom ({
    key: 'accessToken',
    default: ""
})

export const refreshTokenState = atom ({
    key: 'refreshToken',
    default: ""
})