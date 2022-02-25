import React from 'react';
import './App.css';
import ExtLink from './components/ExtLink';

function App()
{
  return (
    < >
        <p>
          Nee Yoran, het is nog niet af.
        </p>
        <ExtLink href="https://reactjs.org">
          test
        </ExtLink>
    </>
  );
}

export default App;
