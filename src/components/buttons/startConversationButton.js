import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '@Components/baseComponents/button';
import { startConversation } from '@Slices/conversation';

const StartConversationButton = () => {
    const dispatch = useDispatch();
    const handler = () => dispatch(startConversation());

    return(
        <Button text="Start Conversation" handler={handler}></Button>
    );
}

export default StartConversationButton;