import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '@Components/baseComponents/button';
import { stopConversation } from '@Slices/conversation';

const StopConversationButton = () => {
    const dispatch = useDispatch();
    const handler = () => dispatch(stopConversation());

    return(
        <Button text="Stop Conversation" handler={handler}></Button>
    );
}

export default StopConversationButton;