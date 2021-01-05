import React, { Fragment, useState } from 'react';

import ToggleTalkingButton from '@Components/buttons/toggleTalkingButton';
import SubmitPersonChangeButton from '@Components/buttons/submitPersonChangeButton';
import ToggleEditPersonButton from '@Components/buttons/toggleEditPersonButton';

const PersonRow = ({ person }) => {

    const [ editing, setEditing ] = useState(true);
    const [ name, setName ] = useState(person.name)

    const updateName = (event) => {
        const { value } = event.target;
        setName(value);
    }

    return (
        <Fragment>
            <span>
                Name: { editing ? (
                    <input type="text" name="name" onChange={updateName} value={name}></input>
                ) : (
                    <Fragment>{person.name}</Fragment>
                )}
            </span>, &nbsp;
            <span>Time Spoken: {person.timeSpoken}ms</span>, &nbsp;
            <span>Is Talking: {person.isTalking ? "Yes" : "No"}</span>, &nbsp;
            <span><ToggleTalkingButton person={person}></ToggleTalkingButton></span>
            <span>
            { editing ? (
                <SubmitPersonChangeButton person={person} name={name} setEditState={setEditing}></SubmitPersonChangeButton>
            ):
            (
                <ToggleEditPersonButton setEditState={setEditing}></ToggleEditPersonButton>
            )
            }
            </span>
        </Fragment>
    )
};

export default PersonRow;