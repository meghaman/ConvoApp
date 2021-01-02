import React from 'react';

import Graph from '@Components/graph'
import AddPersonButton from '@Components/addPersonButton'
 
const App = () =>
{
  return(
    <div>
        <Graph></Graph>
        <br />
        <AddPersonButton></AddPersonButton>
    </div>
  )
};

export default App;