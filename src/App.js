// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Input from './Input';
// import { useState } from 'react';
import GuessList from './GuessList';

function App() {
  const [tryNumber, setTryNumber] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <GuessList/>
        <Input/>
      </header>
    </div>
  );
}

export default App;
