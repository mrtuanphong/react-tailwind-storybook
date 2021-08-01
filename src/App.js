import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="min-h-screen flex flex-col bg-gray-700 text-center">
        <img src={logo} className="App-logo mx-auto" alt="logo" />
        <p className="text-white text-xl">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-blue-500"
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
