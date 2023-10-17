import axios from "axios";
import { axiosPunch } from "../JWT/JWTConfig";

import { JWTDecoding } from "../JWT/JWTDecoding";
import { decodeToken } from "../../hooks/JWT/JWTType";

// Server URL variable
const serverUrl = "http://dopeboyzclub.ddns.net:7780";

export const RoomCreate = async () => {
    
    try {
        const res = await axiosPunch({
            method: 'post',
            url: serverUrl + "/api/lv1/chat/room",
            data: JSON.stringify({ person1: (JWTDecoding() as decodeToken).idx, person2: 45 }), 
            headers: { 'Content-Type': 'application/json' }
        });

        return res;
    } catch (error) {
        console.error("Error creating room:", error);
    }
};
