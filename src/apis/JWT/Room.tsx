import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as StompJS from '@stomp/stompjs';
import SockJS from 'sockjs-client';

type Message = {
    sender: string;
    message: string;
};

const Room = () => {
    const { roomId } = useParams();
    const location = useLocation();
    const sendGetData = location.state;
    const [chatClient, setChatClient] = useState<StompJS.CompatClient>();
    const msgRef = useRef<HTMLInputElement>(null);
    const [msg, setMsg] = useState<Message[]>([]);
    const sender = sendGetData?.sender || ""; 


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

        if (ws.connected) {
            console.log("WebSocket connected");
            ws.subscribe(`/sub/${roomId}`, data => {
                console.log("Received message: ", data);
                console.log(JSON.parse(data.body));
                AddChat(data);
            });
            enter(sendGetData.sender, sendGetData.receiver, "입장ㄱㄱ");
        } else {
            console.error("커넥에러");
        }
    };

    const AddChat = (data: { body: string }) => {
        const messageData = JSON.parse(data.body);
        setMsg((msg) => [
            ...msg,
            messageData,
        ]);
    };

    const publish = (sender: string, receiver: string, message: React.RefObject<HTMLInputElement>) => {
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

    const enter = (sender: string, receiver: string, message: string) => {
        if (chatClient) {
            chatClient.send(`/pub/message`, {}, JSON.stringify({
                type: "ENTER",
                sender,
                receiver,
                message,
            }));
        }
    };

    return (
        <div>
            <h1>{roomId ? roomId : null}</h1>
            <div id="chats">
                {msg.map((item, i) => (
                    <div key={i}>
                        <b>{item.sender} : </b>{item.message}
                    </div>
                ))}
            </div>
            <div id="toolbox" style={{bottom:0 , position:"absolute",width:'100%'}}>
                <input placeholder="보낼 메시지" ref={msgRef} style={{width:'80%'}}></input>
                <button style={{width:'17%'}}  onClick={(e) => {
                    if (sendGetData) {
                        publish(sendGetData.sender, sendGetData.receiver, msgRef);
                    } 
                }}>전송</button>

            </div>
        </div>
    )
}

export default Room;
