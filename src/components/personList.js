import React from 'react';
import { useSelector } from 'react-redux';

import { getConversation } from '@Selectors/index';
import ToggleTalkingButton from '@Components/buttons/toggleTalkingButton';

const PersonList = () => {
    const { people } = useSelector(getConversation);

    return(
        people.map((person, i) => {
            return(
                <div key={i}>
                    <span>Name: {person.name}</span>, &nbsp;
                    <span>Time Spoken: {person.timeSpoken}s</span>, &nbsp;
                    <span>Is Talking: {person.isTalking ? "Yes" : "No"}</span>, &nbsp;
                    <span><ToggleTalkingButton person={person}></ToggleTalkingButton></span>
                </div>
            )
        })
    )
};

export default PersonList