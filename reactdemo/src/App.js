import logo from './logo.svg';
import './App.css';

function App() {
  return (
     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" 
             alt="logo" />
          
<p>A simple React app.....</p>
  
        <a
          className="App-link"
          href="/robots.txt"
         
          download
          
        >
          Learn React
        </a>
        <input type='text'  className="text-try" placeholder="hello" autoFocus/>
        <form action="../../../post" method="post" 
              className="form">
          <button type="submit">Connected?</button>
        </form>
      </header>
    </div>
  );
}

export default App;
