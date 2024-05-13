import ablogo from './photos/ablogo.181d0c94.png'
import { Link } from 'react-router-dom';
import '../App.css';

export default function Main() {
    return (
        <div className = "App-inner">

            <header className="App-header-inner">
                
                <div className="Welcome-header">
                    <h1 >WELCOME</h1>
                </div>
                    <nav>
                        <a href='/'>Home</a>
                        <a href='/collection'>Collection</a>
                        <a href='/forSale'>For Sale</a>
                        <a href='/prints'>Prints</a>

                    </nav>
            </header>
            <body>
                <h2> About us: </h2>
                <p>We breed and sell carpet pythons!</p>
                <p>We are local to Rochester NY, but we ship nationwide!</p><br></br>

                <p>After taking in our first carpet python, we quickly fell in love with the species. 
                We would go to local shops and reptile expos and noticed there would always be lots 
                of ball pythons, boas, and geckos... but rarely would we find carpet pythons! 
                On the occasion that we did, the person selling it would generally not be the person 
                who had bred the animal or known the parents and would not have much information about the snake that was for sale.
                With a desire to share this awesome species with the reptile enthusiasts around us 
                (and with a continuously expanding collection of animals reaching breeding age) we eventually decided to start AnB Reptiles in 2017!</p>
            </body>
            <footer className = "Footer">
                {/* <img  src={ablogo} className="App-logo-inner" alt="logo"/> */}
                <Link className = "Footer" to="/" >BACK</Link>
            </footer> 
        </div>
        )
}