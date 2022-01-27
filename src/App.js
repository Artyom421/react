import { useState } from 'react';
import './App.css';
import { Scrtipt } from './components/script';
import { ScriptTitle } from './components/scripttitle';
import { Colors } from './components/colors';

const App = () => {

  const [state, setState] = useState(0)

  return (
    <div className='App'>
      <div>
        <input type="text" value={state} />
        <div className='buttons'>
          <button onClick={ () => setState(state - 1)}>-</button>
          <button onClick={ () => setState(state + 1)}>+</button>
        </div>
      </div>
        <Scrtipt/>
        <ScriptTitle/>
        <Colors/> 
    </div>
  );
}

export default App;
