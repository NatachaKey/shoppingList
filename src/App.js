import  image from './shop.jpg'
import imageTwo from './man.jpg'
import './App.css';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='app'>
      <div className="container">
        <img src={ image } alt="foto" width="200px"/>
      </div>

      <div className="container">
      <h1>Grocery List</h1>
      </div>
      <GroceryList/>
      <div className="container">
      <img src={ imageTwo } alt="foto" width="200px"/>
      </div>
    </div>
  );
}

export default App;
