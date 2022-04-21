import { useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    fetch('http://localhost:5000')
      .then(async (res) => {
        const data = await res.json();
        if (res.status === 200) {
          console.log(data.data);
        } else {
          console.log(data.msg || 'error occured...');
        }
      })
      .catch((err) => {
        console.log(err.message || 'error occured...');
      });
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
