import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
