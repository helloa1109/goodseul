import React, { useEffect } from 'react'
import { history } from "../Chat/History";

const ChatHistoryEvent = () => {

    useEffect(() => {
        const listenBackEvent = () => {

        }

        const unlistenHistoryEvent = history.listen(({ action }) => {
            if (action === "POP") {
                listenBackEvent();
            }
        });

        return unlistenHistoryEvent;
    }, []);

    return (
        <div>

        </div>
    )
}

export default ChatHistoryEvent