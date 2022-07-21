import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="container">
      <NavBar/>
      <ItemListContainer title="Indumentaria Deportiva"/>
    </div>
  );
}

export default App;
