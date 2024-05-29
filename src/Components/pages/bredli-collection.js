import React, { useState } from 'react'
import ablogo from '../photos/ablogo.181d0c94.png'
import { Link } from 'react-router-dom'
import CollectionCard from '../collection-card'
import bredliImageData from '../photos/bredli-image-data'

export const BredliCollection = () =>{
  const [selectedIndex] = useState(0);

  return(
    <div>
      <header className="App-header-inner">

        <img  src={ablogo} className="App-logo-inner" alt="logo"/>

      <div className="Header">
        <h1 >Morelia Bredli Collection</h1>
      </div>
        <nav>
          <a href='/main'>Home</a>
          <a className="Link-active" href='/collection'>Collection</a>
          <a href='/AnimalsforSale'>Animals For Sale</a>
          <a href='/prints'>Prints</a>

        </nav>
      </header>
      <section className='Card-section'>
        {
          bredliImageData.map( dataItem => (
            <CollectionCard 
              {...dataItem } // equivalent to saying url={ image.url } title={ image.title } etc... this just works since bredliImageData has keys the exact same names as the components expected props.
            />
          ))
        }
      </section>
        <footer className = "Footer">
          <div>
            <Link to="/collection" >BACK</Link>
          </div>
        </footer>
    </div>
  )
}