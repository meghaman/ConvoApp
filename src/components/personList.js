import React from 'react';
import { useSelector } from 'react-redux';

import { getConversation } from '@Selectors/index';
import PersonRow from './personRow';

const PersonList = () => {
    const { people } = useSelector(getConversation);

    return(
        people.map((person, i) => {
            return(
                <div key={i}>
                    <PersonRow person={person} id={i}></PersonRow>
                </div>
            )
        })
    )
};

export default PersonList