import React, { useEffect, useRef, useState } from "react";
import * as StompJS from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { useRecoilValue } from "recoil";
import { person1State, person2State } from "../../recoil/Chat/ChatAtom";
import "../../style/Chat/Chat.scss";
import { useParams } from "react-router-dom";
import { Message } from "../../hooks/Chat/ChatType";



const Room = () => {


    const person1 = useRecoilValue(person1State);
    const person2 = useRecoilValue(person2State);

    const { roomId } = useParams();
    
    const [chatClient, setChatClient] = useState<StompJS.CompatClient | null>(null);

    const msgRef = useRef<HTMLInputElement>(null);
    const [msg, setMsg] = useState<Message[]>([]);

    // sender에는 현재로그인한 유저의 jwt 디코딩 후 나온 idx 값을 넣음
    // receiver에는 (현재는 임시인 상황)
    // 기업회원의 idx를 받아와서 기업 <-> 유저간 실시간 채팅이 되도럭 값을 넣음
    const sender = person1;
    const receiver = person2;

    // 채팅 스크롤 관련 ref
    const chatRef = useRef<null | HTMLDivElement>(null); 

    console.log(person1);
    console.log("sender", sender);
    console.log("receiver", receiver);
    console.log(roomId);

    useEffect(() => {
        // if(chatClient){
            
            connect();
        // }
        // return () => disConnect();
    }, []);

    // const disConnect = () => {

    //     if (chatClient === null) {
    //         return;
    //     }
    //     chatClient?.deactivate();
    // };


    // const handleconnect = () => {
    //     connect(
    //         () => {
    //             setChatClient(ws);
    //             ws.subscribe(`/sub/${roomId}`, data => {
    //                 AddChat(data);
    //             });
    //             enter(sender, receiver, "rr");
    //         },
    //         (error:any) => {
    //             console.log("WebSocket 연결 에러:", error);
    //         }
    //     );
    // };

    const connect = () => {
        const sock = new SockJS("http://dopeboyzclub.ddns.net:7780/ws");
        const ws = StompJS.Stomp.over(sock);
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
        } else {
            console.log("클라이언트 null");
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
        } else {
            console.log("클라이언트 null");
        }
    };

    const handleOneKeyEnter = (e: any) => {
        if (chatClient) {
            publish(sender, receiver, msgRef);
        } else {
            console.log("클라이언트 Null");
        }
    };

    const handleOneKeyPress = (e: any) => {
        if (e.isComposing || e.keyCode === 229) return;
        if (e.key === "Enter") {
            handleOneKeyEnter(e);
        }
    }

    const scrollToBottom = () => {
            chatRef.current?.scrollIntoView({ behavior: 'smooth',block : 'end' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [msg]);

    return (
        <div className="ChatRoom">
            <div>roomID : {roomId ? roomId : null}</div>
            <div className="chats"  ref={chatRef}>
                {msg.map((item, index) => (
                    <div className="Chattest">
                        <div key={index} className="chatMyInfo">
                            <span className="ChatMyText">{item.sender} : {item.message} </span>
                        </div>
                        <div className="GoodSeulInfo">
                            <span className="GoodSeulText">{item.receiver} ㅎㅇ</span>
                        </div>
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