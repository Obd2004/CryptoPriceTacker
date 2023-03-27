import './App.css';
import Coin from './priceTracker/Coin';
import Logo from './priceTracker/Logo';
import './priceTracker/main.css'
function App() {
  return (
    <div className="App">
      <Logo/>
      <Coin/>
    </div>
  );
}

export default App;
