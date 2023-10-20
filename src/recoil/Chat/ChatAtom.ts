import { atom , selector} from 'recoil';
import { Message, goodseulDto } from '../../hooks/Chat/ChatType';

// export const connect = (onConnectCallback:any, onErrorCallback:any) => {
//     ws.disconnect();
//     ws.debug = () => {};
//     ws.connect({}, () => {
//         onConnectCallback();
//     }, (error:any) => {
//         onErrorCallback(error);
//     });
// }

export const msgState = atom<Message[]>({
    key: 'msgState',
    default: [],
});

export const RoomIdxAtom = atom<string>({
    key: 'RoomIdxAtom',
    default: ''
})

export const person1State = atom<number>({
    key: 'person1State',
    default: 0,
});

export const person2State = atom<number>({
    key: 'person2State',
    default: 0,
});

export const getGoodSeulInfoAtom = atom<goodseulDto[]>({
    key: 'getGoodSeulInfoAtom',
    default: [],
});

// 테스트

