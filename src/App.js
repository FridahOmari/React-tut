import logo from './logo.svg';
import './App.css';

function App() {
  const handleNameChange = () => {
    const names = ['Fifi', 'Soni','Kendi'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  const name = handleNameChange();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {name}!
        </p>
      </header>
    </div>
  );
}

export default App;
