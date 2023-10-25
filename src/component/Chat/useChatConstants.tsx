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
  // 사람1,2
  const person1 = useRecoilValue(person1State);
  const person2 = useRecoilValue(person2State);

  // 상대방 닉네임
  const userNick = useRecoilValue(getUserNickAtom);

  // 소켓 설정 
  const sock = new SockJS("http://dopeboyzclub.ddns.net:7780/ws");
  const ws = StompJS.Stomp.over( () => sock);
  const [chatClient, setChatClient] = useState<StompJS.CompatClient | null>(null);

  // 룸 아이디
  const { roomId } = useParams();

  // 채팅 메세지 저장
  const msgRef = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState<Message[]>([]);
  
  // 보내는 사람, 받는사람
  const sender = person1;
  const receiver = person2;
  const senderNow = (JWTDecoding() as decodeToken).idx;

  // 스크롤 관련 ref 
  const chatRef = useRef<null | HTMLDivElement>(null);

  // 이전 대화내용 목록 저장 
  const [chatHistory, setChatHistory] = useRecoilState(getChatHistoryAtom);

  // 대화내용 무한스크롤 관련 변수
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
