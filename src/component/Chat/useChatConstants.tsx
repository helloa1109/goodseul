import { useRecoilValue, useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import SockJS from "sockjs-client";
import * as StompJS from "@stomp/stompjs";
import { getUserNickAtom, person1State, person2State, getChatHistoryAtom } from "../../recoil/Chat/ChatAtom";
import { Message } from "../../hooks/Chat/ChatType";
import { JWTDecoding } from "../../apis/JWT/JWTDecoding";
import { decodeToken } from "../../hooks/JWT/JWTType";

export const useChatConstants = () => {
  const person1 = useRecoilValue(person1State);
  const person2 = useRecoilValue(person2State);

  const sock = new SockJS("http://dopeboyzclub.ddns.net:7780/ws");
  const userNick = useRecoilValue(getUserNickAtom);

  const { roomId } = useParams();

  const ws = StompJS.Stomp.over(()=>sock);
  const [chatClient, setChatClient] = useState<StompJS.CompatClient | null>(null);

  const msgRef = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState<Message[]>([]);

  const sender = person1;
  const receiver = person2;
  const senderNow = (JWTDecoding() as decodeToken).idx;

  const chatRef = useRef<null | HTMLDivElement>(null);
  const [chatHistory, setChatHistory] = useRecoilState(getChatHistoryAtom);

  const [page, setPage] = useState<number>(1);

  const [loading, setLoading] = useState(false);

  return {
    person1,
    person2,
    sock,
    userNick,
    roomId,
    ws,
    chatClient,
    setChatClient,
    msgRef,
    setMsg,
    msg,
    sender,
    receiver,
    senderNow,
    chatRef,
    chatHistory,
    setChatHistory,
    setPage,
    page,
    setLoading,
    loading,
  };
};
