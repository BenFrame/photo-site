import ablogo from './Components/photos/ablogo.181d0c94.png'
import './App.css';
import Main from './Components/Main-inner'
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="/" element={ <DefaultPage />} />
      <Route path="/Main" element={ <Main />} />
    </Routes>
  )  
}

const DefaultPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1> AnB Reptiles </h1> */}
        <img src={ablogo} className="App-logo" alt="logo" />
        <Link to="/Main" className="App-link">Enter</Link>
      </header>
    </div>
  );
}

export default App;
