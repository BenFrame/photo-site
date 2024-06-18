import ablogo from '../photos/ablogo.181d0c94.png'
import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import SpeciesCard from '../species-card';

export const Collection = () =>{

    return (
        <div >
            <header className="App-header-inner">

                <img  src={ablogo} className="App-logo-inner" alt="logo"/>
                
                <div className="Header">
                    <h1 >Our Carpet Python Collection</h1>
                </div>
                    <nav className='Header-links'>
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
                        url='https://i.imgur.com/OcLz15v.jpg'
                        commonName= 'Coastals'
                        scientificName= 'Morelia spilota mcdowelli'
                        linkPath="/Collection/Coastals"
                    />
                    <SpeciesCard
                        url='https://i.imgur.com/d7SYaMD.jpg'
                        commonName= 'Papuan(Irian Jaya)'
                        scientificName= 'Morelia spilota variegata'
                        linkPath="/Collection/Papuans"
                    />
                    <SpeciesCard
                        url='https://i.imgur.com/PvEXjjJ.jpg'
                        commonName= 'Jungles'
                        scientificName= 'Morelia spilota cheynei'
                        linkPath="/Collection/Jungles"
                    />
                    <SpeciesCard
                        url='https://i.imgur.com/BVlw89d.jpg'
                        commonName= 'Darwins'
                        scientificName= 'Morelia spilota variegata'
                        linkPath="/Collection/Darwins"
                    />
                    <SpeciesCard
                        url='https://i.imgur.com/67yDHxH.jpg'
                        commonName= 'Diamonds'
                        scientificName= 'Morelia spilota'
                    />
                    <SpeciesCard
                        url='https://i.imgur.com/PvIyMNH.jpg'
                        commonName= 'Nova Guenea'
                        scientificName= 'Morelia spilota variegata'
                        linkPath="/Collection/Novas"
                            
                    />
                    <SpeciesCard
                        url='https://i.imgur.com/f0ESMmO.jpg'
                        commonName= 'Designer Morphs'
                        scientificName= 'Morelia spilota'
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