import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '@Components/baseComponents/button';
import { editPerson } from '@Slices/conversation';

const submitPersonChangeButton = ({ person, name, setEditState }) => {
    const dispatch = useDispatch();
    const handler = () => { 
        if(!name)
            return;
        dispatch(editPerson({ ...person, name: name })); 
        setEditState(false)
    };

    return(
        <Button text="Submit" handler={handler}></Button>
    )
}

export default submitPersonChangeButton;