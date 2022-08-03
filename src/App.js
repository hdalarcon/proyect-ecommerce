import './App.scss';
import NavBar from './components/NavBar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="container">
        <NavBar/>
        <div className='main-container'>
          {/* <ItemListContainer/> */}
          <ItemDetailContainer/>
        </div>
        
    </div>
  );
}

export default App;
