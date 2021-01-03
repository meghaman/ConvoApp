import React from 'react';
import { useDispatch } from 'react-redux';
import { addPerson } from '@Slices/conversation';

import Button from '@Components/baseComponents/button'

const AddPersonButton = () => {
    const dispatch = useDispatch();
    const handler = () => dispatch(addPerson({ name: "John", timeSpoken: 0, isTalking: false }));

    return(
        <Button text="Add Person" handler={handler}></Button>
    );
}

export default AddPersonButton;