import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="container">
        <NavBar/>
        <div className='main-container'>
          <ItemListContainer/>
        </div>
        
    </div>
  );
}

export default App;
