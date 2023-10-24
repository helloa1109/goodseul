import { atom , selector} from 'recoil';
import { Message, chatHistory, chatRoomList, goodseulDto } from '../../hooks/Chat/ChatType';

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

export const getChatHistoryAtom = atom<chatHistory[]>({
    key: 'getChatHistoryAtom',
    default : [],
})

export const getChatRoomListAtom = atom<chatRoomList[]>({
    key: 'getChatRoomListAtom',
    default : [],
})

export const getChatRoomIdxAtom = atom<chatRoomList[]>({
    key: 'getChatRoomIdxAtom',
    default : [],
})

export const getRoomIdAtom = atom ({
    key:'getRoomIdAtom',
    default : '',
});

export const getUserNickAtom = atom({
    key: 'getUserNickAtom',
    default: '',
})
// 테스트

