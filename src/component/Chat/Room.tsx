import React, { useEffect, useRef, useState } from "react";
import * as StompJS from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { useRecoilValue } from "recoil";
import { person1State, person2State } from "../../recoil/Chat/ChatAtom";
import "../../style/Chat/Chat.scss";
import { useParams } from "react-router-dom";
import { Message } from "../../hooks/Chat/ChatType";
import { JWTDecoding } from "../../apis/JWT/JWTDecoding";
import { decodeToken } from "../../hooks/JWT/JWTType";
import emoji from "../../image/Chat/emoji.png";
import chatprofile from "../../image/Chat/profile.png";

import { useLocation } from "react-router-dom";

const Room = () => {


    const person1 = useRecoilValue(person1State);
    const person2 = useRecoilValue(person2State);

    const sock = new SockJS("http://dopeboyzclub.ddns.net:7780/ws");


    const { roomId } = useParams();

    // const ttValue = useRecoilValue(ttAtom);

    // console.log("디코딩된 idx",ttValue);
    const ws = StompJS.Stomp.over(sock);
    const [chatClient, setChatClient] = useState<StompJS.CompatClient | null>(null);

    const msgRef = useRef<HTMLInputElement>(null);
    const [msg, setMsg] = useState<Message[]>([]);

    // sender에는 현재로그인한 유저의 jwt 디코딩 후 나온 idx 값을 넣음 ?
    // receiver에는 (현재는 임시인 상황)
    // 기업회원의 idx를 받아와서 기업 <-> 유저간 실시간 채팅이 되도럭 값을 넣음

    // const sender = person1;
    // const receiver = person2;
    const location = useLocation();
    const senderNow = ((JWTDecoding() as decodeToken).idx);
    const sendGetData = location.state;
    // console.log("now",senderNow ,sendGetData.sender);
    // 채팅 스크롤 관련 ref
    const chatRef = useRef<null | HTMLDivElement>(null);

    console.log(person1);
    // console.log("sender", sendGetData.sender);
    // console.log("receiver", sendGetData.receiver);
    console.log(roomId);

    useEffect(() => {

        setChatClient(ws);
        setMsg([]);
        connect();
        return () => disConnect();
        
    }, []);
    console.log("dd",chatClient);
    const disConnect = () => {

        if (chatClient === null) {
            return;
        }
        chatClient.deactivate();
    };

    const connect = () => {
        disConnect();

        setChatClient(ws);
        // ws.disconnect();
        
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
            enter(sendGetData.sender, sendGetData.receiver, "입장");
        }, (error: any) => {
            console.log("error", error);
        });

        // sock.onclose = () => {
        //     console.log("닫힘");
        //     setTimeout(() => {
        //         connect();
        //     }, 1000);
        // };
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
            if (message.current) {
                message.current.value = '';
            }
        } else {
            console.log("클라이언트 null");
        }
    }


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
            publish(sendGetData.sender, sendGetData.receiver, msgRef);
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

    // 자동으로 맨 아래있는 텍스트로 이동
    const scrollToBottom = () => {
        chatRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    };

    const newDate = new Date();
    const formatDate = (date: any) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}년 ${month}월 ${day}일`;
    };
    console.log(newDate);

    useEffect(() => {
        scrollToBottom();
    }, [msg]);

    return (
        <div className="ChatRoom">
            {/* <div>roomID : {roomId ? roomId : null}</div> */}
            <div className="chats" ref={chatRef}>
                <div className="ChatDateGroup">
                    <div className="Chatdate">{formatDate(newDate)}</div>
                </div>
                {msg.map((item, index) => (
                    <div className="Chattest">
                        <div key={index} className="chatMyInfo">
                            <div className="GoodSeulInfo">
                                {
                                    senderNow === item.sender ? (
                                        <span className="ChatMyText"><span className="ChatMyTextSpan">{item.message}</span> </span>
                                    ) :
                                        <div className="ChatOtherTextGroup">
                                            <div className="ChatOtherSection">
                                                <img src={chatprofile} className="ChatProfilePng" alt="ChatProfile" />
                                            </div>
                                            <div className="ChatOtherInfoGroup">
                                                <div className="ChatOtherSenderGroup">
                                                    <span className="GoodSeulSender">{item.sender} </span>
                                                </div>
                                                <div className="GoodSeulText">
                                                    <span className="GoodSeulTextSpan"> {item.message}</span>
                                                </div>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="toolbox">
                <input placeholder="보낼 메시지" ref={msgRef} type="text" className="chatinput"
                    onKeyDown={handleOneKeyPress}>
                </input>
                <img src={emoji} className="ChatEmoji" alt="ChatEmoji" />
                <button className="chatBtn"
                    onClick={handleOneKeyEnter}>전송</button>
            </div>
        </div>
    )
}

export default Room;