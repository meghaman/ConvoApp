import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '@Components/baseComponents/button'
import { toggleTalking } from '@Slices/conversation';

const ToggleTalkingButton = ({ person }) => {
    const dispatch = useDispatch();
    const handler = () => dispatch(toggleTalking(person));

    return(
        <Button text="Toggle Talking" handler={handler}></Button>
    )
}

export default ToggleTalkingButton;