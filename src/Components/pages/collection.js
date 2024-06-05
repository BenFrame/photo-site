import ablogo from '../photos/ablogo.181d0c94.png'
import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import SpeciesCard from '../species-card';

export const Collection = () =>{

    // const bredli = 'https://i.imgur.com/50gNhXJ.jpg'
    // const novas = 'https://i.imgur.com/PvIyMNH.jpg'
    const coastal = 'https://i.imgur.com/Pm4QcEN.jpg'
    const papuan = 'https://i.imgur.com/d7SYaMD.jpg'
    const jungle = 'https://i.imgur.com/sCRUKTU.jpg'
    const darwin = 'https://i.imgur.com/BVlw89d.jpg'

    return (
        <div >
            <header className="App-header-inner">

                <img  src={ablogo} className="App-logo-inner" alt="logo"/>
                
                <div className="Header">
                    <h1 >Our Carpet Python Collection</h1>
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
                        url='https://i.imgur.com/50gNhXJ.jpg' 
                        commonName='Bredli'
                        scientificName='Morelia bredli' 
                        linkPath="/Collection/Bredli"
                    />
                    
                    <SpeciesCard
                        url='https://i.imgur.com/PvIyMNH.jpg'
                        commonName= 'Nova Guenea'
                        scientificName= 'Morelia spilota variegata'
                        linkPath="/Collection/Novas"
                        
                    />
                    <SpeciesCard 
                        url={ coastal }
                        commonName= 'Coastals'
                        scientificName= 'Morelia spilota mcdowelli'
                        linkPath="/Collection/Coastals"
                    />
                    <SpeciesCard
                        url={ papuan }
                        commonName= 'Papuan(Irian Jaya)'
                        scientificName= 'Morelia spilota variegata'
                    />
                    <SpeciesCard
                        url={ jungle }
                        commonName= 'Jungles'
                        scientificName= 'Morelia spilota cheynei'
                    />
                    <SpeciesCard
                        url={ darwin }
                        commonName= 'Darwins'
                        scientificName= 'Morelia spilota variegata'
                    />
                </section>
            <footer className = "Footer">
                <div>
                
                    <Link to="/main" >BACK</Link>

                </div>
            </footer>
        </div>
    )
}