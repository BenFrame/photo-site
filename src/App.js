import ablogo from './Components/photos/ablogo.181d0c94.png'
import './App.css';
import Main from './Components/Main-inner'
import { 
  Routes, 
  Route, 
  Link } from 'react-router-dom';
import { Collection } from './Components/pages/collection';
import { AnimalsForSale } from './Components/pages/animals-for-Sale';
import { Prints } from './Components/pages/prints';
import { BredliCollection } from './Components/pages/bredli-collection';
import { NovaCollection } from './Components/pages/nova-collection';
import { CoastalCollection } from './Components/pages/coastal-collection';
import { PapuanCollection } from './Components/pages/papuan-collection';

function App() {

  return (
    
      <Routes>
        <Route path="/" element={ <DefaultPage />} />
        <Route path="/Main" element={ <Main />} />
        <Route path="/Collection" element={<Collection/>}/>
        <Route path="/AnimalsForSale" element={<AnimalsForSale/>}/>
        <Route path="/Prints" element={<Prints/>}/>
        <Route path="/Collection/Bredli" element={<BredliCollection/>}/>
        <Route path="/Collection/Novas" element={<NovaCollection/>}/>
        <Route path="/Collection/Coastals" element={<CoastalCollection/>}/>
        <Route path="/Collection/Papuans" element={<PapuanCollection/>}/>
      </Routes>
    
  )  
}

const DefaultPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1> AnB Reptiles </h1>
      </header>
        <p className='Quote'>"Experience Beauty"</p>
        <Link to="/Main" className="App-link">Enter</Link>
        <img src={ablogo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
