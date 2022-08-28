
import './App.css';
import NavBar from './components/NavBar';
import ClassComponent from './components/ClassComponent/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';
import '../src/components/CarWidget/CarWidget.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting='hola'/>
        <ClassComponent/>
        <FunctionalComponent/>
    </div>
  );
}

export default App;

