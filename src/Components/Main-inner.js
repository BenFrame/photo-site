import ablogo from './photos/ablogo.181d0c94.png'
import { Link } from 'react-router-dom';
import '../App.css';
import AuthLogin from './authLogin';


export default function Main() {
    return (
        <div className = "App-inner">

            <header className="App-header-inner">
                
                <img  src={ablogo} className="App-logo-inner" alt="logo"/>
                
                <div className="Header">
                    <h1 >Welcome</h1>
                </div>
                    <nav>
                        <a className="Link-active" href='/main'>Home</a>
                        <a href='/collection'>Collection</a>
                        <a href='/AnimalsforSale'>Animals For Sale</a>
                        <a href='/prints'>Prints</a>
                        <AuthLogin></AuthLogin>
                                             

                    </nav>
            </header>
            <div className='Home-background'>
                <section className='Home-article'>
                    <h2> Morelia! </h2><br></br>
                    <p>We breed and sell carpet pythons.</p>
                    <p>We are local to Rochester NY, but we ship nationwide!</p><br></br>

                    <p>After taking in our first carpet python, we quickly fell in love with the species. 
                    We would go to local shops and reptile expos and noticed there would always be lots 
                    of ball pythons, boas, and geckos... but rarely would we find carpet pythons! 
                    On the occasion that we did, the person selling it would generally not be the person 
                    who had bred the animal or known the parents and would not have much information about the snake that was for sale.
                    With a desire to share this awesome species with the reptile enthusiasts around us 
                    (and with a continuously expanding collection of animals reaching breeding age) we eventually decided to start AnB Reptiles in 2017!</p>
                    <p><br></br>
                    In addition to our passion for carpet pythons, I have a deep love for photography. 
                    Capturing the intricate patterns, vibrant colors, and unique personalities of our snakes allows me 
                    to share the beauty of these incredible creatures with the world. Photography has become an integral part of my hobby, 
                    helping us to not only document our journey but also to connect with other reptile enthusiasts who appreciate the artistry of these magnificent animals. 
                    Whether it's a close-up of a python's scales or a wide shot showcasing their natural grace, 
                    I aim to highlight the splendor of carpet pythons through every photograph I take.
                    </p>
                </section>

            </div>
            <footer className = "Footer">
                <div>

                
                <Link to="/" >BACK</Link>

                </div>
            </footer> 
        </div>
        )
}