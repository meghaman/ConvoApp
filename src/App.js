import React from 'react';

import Graph from '@Components/graph'
 
const App = ({ title }) =>
{
  return(
    <div>
        {title}
        <Graph></Graph>
    </div>
  )
};

export default App;