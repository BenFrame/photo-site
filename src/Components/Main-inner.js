import ablogo from '../ablogo.181d0c94.png'
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <div>

            <header className="App">
                <img src={ablogo} className="App-logo" alt="logo" />
                <h1>I LOST MY SHIT</h1>
            </header>
               <footer>
                <Link to="/" >BACK TO MY SPINNY</Link>
               </footer> 
        </div>
        )
}