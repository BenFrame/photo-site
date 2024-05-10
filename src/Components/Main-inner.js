import ablogo from '../ablogo.181d0c94.png'
import { Link } from 'react-router-dom';
import '../App.css';

export default function Main() {
    return (
        <div className = "App-inner">

            <header className="App-header-inner">
                <img src={ablogo} className="App-logo" alt="logo" />
                <h1 className="Welcome-header">WELCOME</h1>
            </header>
               <footer className = "Footer">
                <Link className = "Footer" to="/" >BACK TO MY SPINNY</Link>
               </footer> 
        </div>
        )
}