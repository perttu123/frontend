import logo from './logo.svg';
import './App.css';
import {useState} from "react";
//asdasd
function App() {

  const [viesti, setViesti] = useState(0);

  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>CD GITHUB TOIMII</h1>
        <h2>{viesti}</h2>
      <button onClick={()=>setViesti(viesti+1)}>click</button>

      </header>
    </div>
    </>

  );
}

export default App;
