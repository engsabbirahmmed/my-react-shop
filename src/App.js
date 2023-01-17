import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import PhoneBar from './components/PhoneBar/PhoneBar';
import Pricing from './components/Pricing/Pricing';
import Rechart from './components/Rechart/Rechart';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Header></Header>
      <Pricing></Pricing>
      <Rechart></Rechart>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
