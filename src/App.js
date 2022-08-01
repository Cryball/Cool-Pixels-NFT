import './App.css';
import Home from './components/Home/Home';

function App() {
  if (window.ethereum) {
    return (
      <div className="overlay">
        <Home />
        <div className="moving-background"> </div>
      </div>
    )
  }
  else {
    return(
      <div>Hello! Connect Metamask!</div>
    );
  }
}

export default App;
