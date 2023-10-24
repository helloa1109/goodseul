import { useCallback } from "react";
import { useChatConstants } from "./useChatConstants";

const ChatScroll = () => {
    const { loading,setLoading } = useChatConstants();

    const handleScroll = useCallback(() => {
        const chatDiv = document.getElementById('chats') as HTMLDivElement;
        const divTop = chatDiv.getBoundingClientRect().top;

        // 스크롤이 상단에 도달하면 원하는 작업을 수행
        if (divTop >= 50) {
            setLoading(true);
            console.log('if');
        }
    }, []);

    return { handleScroll }; // 객체로 함수를 반환합니다.
};

export default ChatScroll;
