import React from 'react';
import { useRecoilValue, getRoomIdAtom, getUserNickAtom, isFindIdAtom,useLocation } from "./index";
const HeaderTitle = () => {

    const RoomID = useRecoilValue(getRoomIdAtom);
    const UserNick = useRecoilValue(getUserNickAtom);
    const isFindId = useRecoilValue<boolean>(isFindIdAtom);

    const Location = useLocation();

    let subHeaderTitle = "구슬";

    if (Location.pathname === "/login") {
        subHeaderTitle = "로그인";
    } else if (Location.pathname === "/signup") {
        subHeaderTitle = "회원가입";
    } else if (Location.pathname === "/Location") {
        subHeaderTitle = "위치기반";
    } else if (Location.pathname === "/Review") {
        subHeaderTitle = "후기";
    } else if (Location.pathname === "/Purpose") {
        subHeaderTitle = "목적별";
    } else if (Location.pathname === "/play") {
        subHeaderTitle = "플레이";
    } else if (Location.pathname === "/Request") {
        subHeaderTitle = "견적요청";
    } else if (Location.pathname === "/OnAir") {
        subHeaderTitle = "실시간 상담";
    } else if (Location.pathname === "/GuseulDetail") {
        subHeaderTitle = "상세보기";

    } else if (Location.pathname === "/findidpw" && isFindId) {
        subHeaderTitle = "아이디찾기"
    } else if (Location.pathname === "/findidpw" && !isFindId) {
        subHeaderTitle = "비밀번호찾기"
    } else if (Location.pathname === "/findpwauth") {
        subHeaderTitle = "인증코드 입력";
    } else if (Location.pathname === "/findpw4") {
        subHeaderTitle = "새로운 비밀번호 입력";
    } else if (Location.pathname === "/findpw2") {
        subHeaderTitle = "비밀번호찾기 인증";
    } else if (Location.pathname === "/findidsuccess") {
        subHeaderTitle = "아이디찾기";
    } else if (Location.pathname === "/play/ball") {
        subHeaderTitle = "플레이볼랭킹";
    } else if (Location.pathname === `/room/${RoomID}`) {
        subHeaderTitle = `${UserNick}님 채팅방`;
    } else if (Location.pathname === "/MyPageChat") {
        subHeaderTitle = "채팅";
    } else if (Location.pathname === "/Mypage") {
        subHeaderTitle = "마이페이지";
    }
    return subHeaderTitle;
}

export default HeaderTitle;
