import React from 'react';
import { useSelector } from 'react-redux';

import { getConversation } from '@Selectors/index';

const Graph = () => {
    const { people } = useSelector(getConversation);

    return(
        people.map((person, i) => {
            return(
                <div key={i}>
                    <span>Name: {person.name}</span>, &nbsp;<span>Time Spoken: {person.timeSpoken}s</span>
                </div>
            )
        })
    )
};

export default Graph;