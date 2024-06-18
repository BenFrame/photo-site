import React from 'react'
import ablogo from '../photos/ablogo.181d0c94.png'
import { Link } from 'react-router-dom'
import CollectionCard from '../collection-card'
import darwinImageData from '../photos/darwin-image-data'

export const DarwinCollection = () =>{

  return(
    <div>
      <header className="App-header-inner">

        <img  src={ablogo} className="App-logo-inner" alt="logo"/>

      <div className="Header">
        <h1 >Darwin Collection</h1>
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
          darwinImageData.map( dataItem => (
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