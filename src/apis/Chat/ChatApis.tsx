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
        console.log("axios",goodSeulIdx);
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
        console.log("데이터", resopnse.data);
        return resopnse;
    } catch (error) {
        console.log("error", error);
    }
}

