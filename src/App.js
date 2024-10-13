import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" data-aue-resource="urn:aemconnection:/content/dam/blackrock/uk/landing/temp-cf/jcr:content/data/master" data-aue-type="reference">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p data-aue-prop="reactlabel" data-aue-type="text">
          Edit <code>src/App.js</code> and save to reload changes.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
