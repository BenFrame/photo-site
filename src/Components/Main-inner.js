import ablogo from './photos/ablogo.181d0c94.png'
import { Link } from 'react-router-dom';
import '../App.css';

export default function Main() {
    return (
        <div className = "App-inner">

            <header className="App-header-inner">
                <img  src={ablogo} className="App-logo" alt="logo" />
                <div className="Welcome-header">
                    <h1 >WELCOME</h1>
                </div>
            </header>
               <footer className = "Footer">
                <Link className = "Footer" to="/" >BACK TO MY SPINNY</Link>
               </footer> 
        </div>
        )
}