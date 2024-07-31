import ablogo from '../photos/ablogo.181d0c94.png'
import React from 'react';
import '../../App.css';

export default function AdminPage(){
    return(
      <div >
        <header className="App-header-inner">
            
            <img  src={ablogo} className="App-logo-inner" alt="logo"/>
            
            <div className="Header">
                <h1 >Prints</h1>
            </div>
                <nav>
                    <a href='/main'>Home</a>
                    <a href='/collection'>Collection</a>
                    <a href='/AnimalsforSale'>Animals For Sale</a>
                    <a href='/prints'>Prints</a>

                </nav>
        </header>
      </div>
      )

};