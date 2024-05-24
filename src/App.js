import logo from './logo.svg';
import './App.css';
import { MyComponent } from './components/MyComponent';
import { SecondComponent } from './components/SecondComponent';
import { ThirdComponent } from './components/ThirdComponent';
import { useState } from 'react';
import { Child } from './components/Child';

function App() {
  const [name, setName] = useState("Lina")
  const [message, setMessage] = useState()

  const addMessage = (message) => {
    console.log(message);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia.
        </p>
        <Child
          name={name}
          addMessage={addMessage}
          setName={setName}
        />
        <MyComponent />
        <SecondComponent />
        <ThirdComponent
          allergies="mata"
          bloodGroup="O+"
          height={85}
        />
      </header>
    </div>
  );
}

export default App;
