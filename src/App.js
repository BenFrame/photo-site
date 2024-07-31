import ablogo from './Components/photos/ablogo.181d0c94.png'
import './App.css';
import Main from './Components/Main-inner'
import React from 'react';
import { 
  Routes, 
  Route, 
  Link,
  Navigate, } from 'react-router-dom';
import { Collection } from './Components/pages/collection';
import { AnimalsForSale } from './Components/pages/animals-for-Sale';
import { Prints } from './Components/pages/prints';
import { BredliCollection } from './Components/pages/bredli-collection';
import { NovaCollection } from './Components/pages/nova-collection';
import { CoastalCollection } from './Components/pages/coastal-collection';
import { PapuanCollection } from './Components/pages/papuan-collection';
import { DarwinCollection } from './Components/pages/darwin-collection';
import { JungleCollection } from './Components/pages/jungle-collection';
import { DiamondCollection } from './Components/pages/diamond-collection';
import { MorphCollection } from './Components/pages/morphs-collection';
import { useAuth0 } from '@auth0/auth0-react';
// import AuthLogin from './Components/authLogin';

import AdminPage from './Components/pages/admin-page';

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? element : <Navigate to = '/login?redirectTo=/admin'/>;
}


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
        <Route path="/Collection/Darwins" element={<DarwinCollection/>}/>
        <Route path="/Collection/Jungles" element={<JungleCollection/>}/>
        <Route path="/Collection/Diamonds" element={<DiamondCollection/>}/>
        <Route path="/Collection/Morphs" element={<MorphCollection/>}/>        
        <Route path="/admin" element={<PrivateRoute element={<AdminPage/>}/>}/>
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
