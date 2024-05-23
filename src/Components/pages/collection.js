import ablogo from '../photos/ablogo.181d0c94.png'
import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { CoastalCard } from '../species-Cards/coastals-card';
import { JungleCard } from '../species-Cards/jungles-card';
import { PapuanCard } from '../species-Cards/papuan-ij-card';
import { NovaGuineaCard } from '../species-Cards/nova-card';
import { DarwinCard } from '../species-Cards/darwins-card';
import SpeciesCard from '../species-Cards/species-card';
// import bredli from 'https://imgur.com/50gNhXJ'

export const Collection = () =>{
    const bredli = 'https://i.imgur.com/50gNhXJ.jpg'
    return (
        <div >
            <header className="App-header-inner">

                <img  src={ablogo} className="App-logo-inner" alt="logo"/>
                
                <div className="Header">
                    <h1 >OUR CARPET PYTHON COLLECTION</h1>
                </div>
                    <nav>
                        <a href='/main'>Home</a>
                        <a className="Link-active" href='/collection'>Collection</a>
                        <a href='/AnimalsforSale'>Animals For Sale</a>
                        <a href='/prints'>Prints</a>

                    </nav>
            </header>
                <section className='Card-section'>
                    <SpeciesCard
                        img={bredli}
                        commonName='Bredli'
                        scientificName='Morelia bredli' />
                    <NovaGuineaCard/>
                    <CoastalCard/>
                    <PapuanCard/>
                    <JungleCard/>
                    <DarwinCard/>
                </section>
            <footer className = "Footer">
                <div>
                
                    <Link to="/main" >BACK</Link>

                </div>
            </footer>
        </div>
    )
}