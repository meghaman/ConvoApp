import React from 'react';
import { useDispatch } from 'react-redux';
import { addPerson } from '@Slices/conversation';

import Button from '@Components/baseComponents/button'

const AddPersonButton = () => {
    const dispatch = useDispatch();
    const _addPerson = () => dispatch(addPerson({ name: "John", timeSpoken: 0 }));

    return(
        <Button text="Add Person" handler={_addPerson}></Button>
    );
}

export default AddPersonButton;