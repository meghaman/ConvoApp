import React from 'react';

import Graph from '@Components/graph'
import AddPersonButton from '@Components/buttons/addPersonButton'
import StartConversationButton from '@Components/buttons/startConversationButton'
import StopConversationButton from '@Components/buttons/stopConversationButton'
import PersonList from '@Components/personList'
 
const App = () =>
{
  return(
    <div>
        <Graph></Graph>
        <br />
        <AddPersonButton></AddPersonButton>
        <StartConversationButton></StartConversationButton>
        <StopConversationButton></StopConversationButton>
        <div>
          <PersonList></PersonList>
        </div>
    </div>
  )
};

export default App;