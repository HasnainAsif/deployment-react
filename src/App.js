import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { SERVER_URL } from './config';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch(SERVER_URL)
      .then(async (res) => {
        const data = await res.json();
        if (res.status === 200) {
          console.log(data.data);
          setData(data.data);
        } else {
          setData(data.msg);
          console.log(data.msg || 'error occured...');
        }
      })
      .catch((err) => {
        setData(err.message || 'error occured...');
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
        <p>API Response: {data}</p>
      </header>
    </div>
  );
}

export default App;
