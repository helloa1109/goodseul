import React, { useEffect, useRef, useState } from "react";
import * as StompJS from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { useRecoilValue } from "recoil";
import { RoomIdxAtom, person1State, person2State } from "../../recoil/Chat/ChatAtom";
import "../../style/Chat/Chat.scss";
import { useParams } from "react-router-dom";

type Message = {
    sender: string;
    message: string;
    receiver: string;
};

const Room = () => {
    const person1 = useRecoilValue(person1State);
    const person2 = useRecoilValue(person2State);
    // const roomId = useRecoilValue(RoomIdxAtom);
    const {roomId} = useParams();
    console.log(roomId);
    const [chatClient, setChatClient] = useState<StompJS.CompatClient>();
    const msgRef = useRef<HTMLInputElement>(null);
    const [msg, setMsg] = useState<Message[]>([]);
    const sender = person1;
    const receiver = person2;

    console.log(person1);
    console.log("sender", sender);
    console.log("receiver", receiver);

    useEffect(() => {
        connect();
    }, []);

    const connect = () => {
        let sock = new SockJS("http://dopeboyzclub.ddns.net:7780/ws");
        let ws = StompJS.Stomp.over(sock)
        setChatClient(ws);

        ws.debug = function (str) {
            console.log(str);
        };

        ws.connect({}, (e: any) => {
            console.log("WebSocket connected");
            ws.subscribe(`/sub/${roomId}`, data => {
                console.log("Received message: ", data);
                console.log(JSON.parse(data.body));
                AddChat(data);
            });
            enter(sender, receiver, "입장ㄱㄱ");
        }, (error: any) => {
            console.log("error", error);
        })
    };

    const AddChat = (data: { body: string }) => {
        const messageData = JSON.parse(data.body);
        setMsg((msg) => [
            ...msg,
            messageData,
        ]);
    };


    const publish = (sender: number, receiver: number, message: React.RefObject<HTMLInputElement>) => {
        if (chatClient) {
            chatClient.send(`/pub/message`, {}, JSON.stringify({
                type: "TALK",
                sender,
                receiver,
                message: message.current?.value,
            }));
        }

        if (message.current) {
            message.current.value = '';
        }
    };

    const enter = (sender: number, receiver: number, message: string) => {
        if (chatClient) {
            chatClient.send(`/pub/message`, {}, JSON.stringify({
                type: "ENTER",
                sender,
                receiver,
                message,
            }));
        }
    };

    const handleOneKeyEnter = (e: any) => {
        publish(sender, receiver, msgRef);
    };

    const handleOneKeyPress = (e: any) => {
        if (e.isComposing || e.keyCode === 229) return;
        if (e.key === "Enter") {
            handleOneKeyEnter(e);
        }
    }

    return (
        <div className="ChatRoom">
            <div>roomID : {roomId ? roomId : null}</div>
            <div className="chats">
                {msg.map((item, index) => (
                    <div key={index} className="chatInfo">
                        <span>{item.sender} : {item.message}  </span>
                    </div>
                ))}
            </div>
            <div className="toolbox">
                <input placeholder="보낼 메시지" ref={msgRef} style={{ width: '80%' }} type="text" className="chatinput"
                    onKeyDown={handleOneKeyPress}></input>
                <button style={{ width: '17%' }} className="chatBtn"
                    onClick={handleOneKeyEnter}>전송</button>
            </div>
        </div>
    )
}

export default Room;
