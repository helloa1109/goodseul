import axios from "axios";
import { axiosPunch } from "../JWT/JWTConfig";
import { JWTDecoding } from "../JWT/JWTDecoding";
import { decodeToken } from "../../hooks/JWT/JWTType";

// Server URL variable
const serverUrl = "http://dopeboyzclub.ddns.net:7780";

export const RoomCreate = async (goodSeulIdx:number) => {
    try {
        const res = await axiosPunch({
            method: 'post',
            url: serverUrl + "/api/lv1/chat/room",
            data: JSON.stringify({ person1: (JWTDecoding() as decodeToken).idx, person2: `${goodSeulIdx}` }),
            headers: { 'Content-Type': 'application/json' }
        });
        return res;
    } catch (error) {
        console.error("Error", error);
    }
};

export const getGoodSeulInfo = async () => {
    try {
        const resopnse = await axiosPunch({
            method: 'get',
            url: (`${serverUrl}/api/lv1/gs?goodseulIdx=19`),
        });
        return resopnse;
    } catch (error) {
        console.log("error", error);
    }
}

export const getChatHistory = async (roomId?: string,page?:number,previousPage?:number) => {
    try {
        const url = page
            ? `${serverUrl}/api/lv1/chat?page=${page}&roomId=${roomId}`
            : `${serverUrl}/api/lv1/chat?roomId=${roomId}`;

        const res = await axiosPunch({
            method: 'get',
            url,
        });

        console.log("chat history", res);
        return res;
    } catch (error) {
        console.error("Error", error);
        throw error; 
    }
}

export const getChatRoomList = async () => {

    try {
        const res = await axiosPunch({ 
            method : 'get',
            url : serverUrl + "/api/lv1/chat/room",
            headers: { 'Content-Type': 'application/json' }
        });
        return res;
    }catch(error){
        console.log(error);
    }
}
