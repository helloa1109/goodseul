import React, { useCallback, useEffect, useRef, useState } from "react";
import "../../style/Chat/Chat.scss";
import emoji from "../../image/Chat/emoji.png";
import chatprofile from "../../image/Chat/profile.png";
import { getChatHistory } from "../../apis/Chat/ChatApis";
import { useChatConstants } from "./useChatConstants";
// import ChatScroll  from "./ChatScroll"; 


const Room = () => {

    const {
        person1,
        person2,
        sock,
        userNick,
        roomId,
        ws,
        chatClient,
        setChatHistory,
        setChatClient,
        msgRef,
        msg,
        setMsg,
        sender,
        receiver,
        senderNow,
        chatRef,
        chatHistory,
        page,
        setPage,
        setLoading,
        loading,
    } = useChatConstants();

    const [connecting, setConnecting] = useState(true);
    // const { handleScroll } = ChatScroll();

    const handleScroll = useCallback(() => {
        const chatDiv = document.getElementById('chats') as HTMLDivElement;
        const divTop = chatDiv.getBoundingClientRect().top;
        const area = document.getElementById('ChatRoom');
        const currScroll = area?.scrollTop || 0;

        if (divTop >= 50 && currScroll === 0) {
            // Scrolling at the top of the chat
            setLoading(true);
            setConnecting(false);
            const previousPage = page + 1;

            getChatHistory(roomId, previousPage)
                .then(res => {
                    if (res && res.data) {

                        setMsg([...res.data, ...msg]);
                        setPage(previousPage);
                        setLoading(false);
                    }
                });
        }
    }, [setLoading, roomId, page, msg, setMsg]);

    useEffect(() => {
        const area = document.getElementById('ChatRoom');
        area?.addEventListener('scroll', handleScroll, true);

        return () => {
            area?.removeEventListener('scroll', handleScroll, true);
        };
    }, [handleScroll]);



    /* connect 관련 useEffect */
    useEffect(() => {
        setChatClient(ws);

        connect();
        setMsg([]);

        if (connecting) {
            setConnecting(false);
            getChatHistory(roomId).then(res => {
                if (res && res.data) {
                    setMsg([...res.data, ...msg]);
                    setChatHistory(res.data);
                    console.log("히스토리", chatHistory);
                    setConnecting(false);
                    // scrollToBottom();
                }
            });
        }

        return () => disConnect();

    }, []);

    /* disconnect */
    const disConnect = () => {

        if (chatClient === null) {
            return;
        }
        chatClient.deactivate();
    };


    /* connect */
    const connect = () => {
        disConnect();
        setConnecting(true);
        // setChatClient(ws);
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
            enter(sender, receiver, "입장");
        }, (error: any) => {
            console.log("error", error);
        });

        return () => disConnect();
    };

    const AddChat = (data: { body: string }) => {
        const messageData = JSON.parse(data.body);
        setMsg((msg) => [messageData, ...msg]);
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
        e.preventDefault();
        if (chatClient) {
            publish(sender, receiver, msgRef);
        } else {
            console.log("클라이언트 Null");
        }
    };

    /* 메세지 입력할떄 한국어 입력 시 두번씩 입력되는 문제 해결*/
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

    /* 날짜 표시 관련 js */
    const formatSendTime = (sendTime: any) => {
        const date = new Date(sendTime);
        const formattedDate = date.toISOString().split('T')[0];
        console.log(formattedDate);
        return formattedDate;
    };

    const isDateChanged = (currentMessage: any, previousMessage: any) => {
        if (!previousMessage) {
            return true; // 첫 번째 메시지에는 항상 날짜 출력
        }

        const currentDate = currentMessage.sendTime.split('T')[0];
        const previousDate = previousMessage.sendTime.split('T')[0];

        return currentDate !== previousDate;
    }

    useEffect(() => {
        scrollToBottom();
    }, [msg]);

    return (
        <div className="ChatRoom" id="ChatRoom">
            <div className="chats" id="chats" ref={chatRef}>
                {msg.map((item, index) => (
                    <div className="Chattest">
                        {index === 0 || isDateChanged(item, msg[index - 1]) && (
                            <div className="ChatDateGroup">
                                <div className="Chatdate">{formatSendTime(item.sendTime)}</div>
                            </div>
                        )}
                        <div key={index} className="chatMyInfo">
                            <div className="GoodSeulInfo">
                                {
                                    senderNow === item.sender ? (
                                        <div className="ChatMyTextGroup">
                                            <div className="ChatMyTextReadCheck">
                                                {item.readCheck ? (
                                                    null
                                                ) : (
                                                    <div className="ChatMyReadCheck">
                                                        <span className="ChatMyReadCheckText">1</span>
                                                    </div>
                                                )}
                                            </div>
                                            <span className="ChatMyText">
                                                <span className="ChatMyTextSpan">{item.message}</span>
                                            </span>
                                        </div>

                                    ) :
                                        <div className="ChatOtherTextGroup">
                                            <div className="ChatOtherSection">
                                                <img src={chatprofile} className="ChatProfilePng" alt="ChatProfile" />
                                            </div>
                                            <div className="ChatOtherInfoGroup">
                                                <div className="ChatOtherSenderGroup">
                                                    <span className="GoodSeulSender">{userNick} </span>
                                                </div>
                                                <div className="ChatOtherTextGroup">
                                                    <div className="ChatOtherTextReadCheck">
                                                        {item.readCheck ? (
                                                            null
                                                        ) : (
                                                            <div className="ChatOtherReadCheck">1</div>
                                                        )}
                                                    </div>
                                                    <div className="GoodSeulText">
                                                        <span className="GoodSeulTextSpan">
                                                            {item.message}
                                                        </span>
                                                    </div>
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