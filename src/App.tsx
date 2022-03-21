import React from 'react';
import './App.css';
import { Button } from './components/Button';
import Greet from './components/Greet';
import Oscar from './components/Oscar';
import Status from './components/Status';
import { LoggedIn } from './state/LoggedIn';
import { User } from './state/User';

function App() {
  const arr = [
    {
      id: 1, name: 'chair'
    },
    {
      id: 2, name: 'table'
    },
    {
      id: 3, name: 'jadu'
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        Hello Sir <br />
        <Greet name="satwinder" age={30} arrayOfObjects={arr} />
        <Status status="loading" />
        <Oscar>
          <h1> Hello I am child component </h1>
        </Oscar>
        <Greet name="windsor" arrayOfObjects={arr} />
        <Button handleClick={(e, id) => console.log(e, id)} />
        <LoggedIn/>
        <User/>
      </header>
    </div>
  );
}

export default App;
