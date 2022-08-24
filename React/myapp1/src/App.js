import logo from './logo.svg';
import './App.css';
import Message from './Message';
import { useState, useRef, useEffect } from 'react';

function App() {
  const [messageList, setMessageList] = useState([])
  const ref = useRef(null)

  const sendMessageHandle = (event) => {
    event.preventDefault();
    setMessageList(prev => [...prev, {
      id: getLastId(prev) + 1,
      author: 'user',
      text: ref.current.value
    }]);
  }

  function getLastId(array) {
    return array.length ? array[array.length - 1].id : 0;
  }

  useEffect(() => {
    const id = getLastId(messageList);
    if (id > 0 && messageList.find(el => el.id === id).author !== 'bot') {
      setTimeout(() => {
        setMessageList(prev => [...prev, {
          id: getLastId(prev) + 1,
          author: 'bot',
          text: 'I am a Robot'
        }]);
      }, 1500);
    }
  }, [messageList]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Message text="Hi, Jack!" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <input ref={ref} />
          <button onClick={sendMessageHandle}>Send</button>
          {messageList.map((item) => {
            return (
              <div className='Message_list' key={item.id}>
                <div className='Message_box Message_Author'>
                  {item.author}:
                </div>
                <div className='Message_box Message_Text'>
                  {item.text}
                </div>
              </div>
            )
          })}
        </div>
      </header>
    </div>
  )
}

export default App;
