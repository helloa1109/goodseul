import { useEffect } from 'react';
import { history } from '../Chat/History';
import { useChatConstants } from './useChatConstants';

const ChatHistoryEvent = ({ onBack }: { onBack: () => void })=> {
    const {
        ws,
        chatClient,
        setChatClient,
    } = useChatConstants();
    useEffect(() => {
        const unlistenHistoryEvent = history.listen(({ action }) => {
            if (action === 'POP') {
                setChatClient(null);
                onBack(); // 뒤로 가기 이벤트 발생 시, 콜백 호출
            }
        });

        return unlistenHistoryEvent;
    }, [onBack]);
};

export default ChatHistoryEvent;
