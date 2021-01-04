import React from 'react';
import { useSelector } from 'react-redux';

import { getConversation } from '@Selectors/index';

const Graph = () => {
    const { people } = useSelector(getConversation);

    return(<div>Graph Goes Here</div>)
};

export default Graph;