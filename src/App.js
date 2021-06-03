import { React, useState } from 'react';
import './App.css';
function App() {
  const [counter,setCounter] = useState(1);
  return (
    <div className='content'>
      <h1 className='clicks'>Clicks: {counter}</h1>
      <button onClick={() => setCounter(counter+1)}>Increment</button>
      <button onClick={() => setCounter(counter<=1 ? 1 :counter-1)}>Decrement</button>
    </div>
  );
}

export default App;
