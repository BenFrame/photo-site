import React from 'react'
import ablogo from '../photos/ablogo.181d0c94.png'
import { Link } from 'react-router-dom'
import CollectionGroup from '../collection-card-section'
import bredliImageData from '../photos/bredli-image-data'

export const BredliCollection = () =>{

  return(
    <div>
      <header className="App-header-inner">

        <img  src={ablogo} className="App-logo-inner" alt="logo"/>

      <div className="Header">
        <h1 >Bredli Collection</h1>
      </div>
        <nav>
          <a href='/main'>Home</a>
          <a className="Link-active" href='/collection'>Collection</a>
          <a href='/AnimalsforSale'>Animals For Sale</a>
          <a href='/prints'>Prints</a>

        </nav>
      </header>
      <CollectionGroup data={ bredliImageData } />
        <footer className = "Footer">
          <div>
            <Link to="/collection" >BACK</Link>
          </div>
        </footer>
    </div>
  )
}