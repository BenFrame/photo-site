import ablogo from '../photos/ablogo.181d0c94.png'
import { Link } from 'react-router-dom';
import '../../App.css';
import PrintCard from '../print-card';

export const Prints = () =>{
    return (
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
                        <a className="Link-active" href='/prints'>Prints</a>

                    </nav>
            </header>
            <div >
                <img  url='https://i.imgur.com/zjDOaDa.jpg'  alt="print"/>            
            </div>
            <section className='print-card-section'>
                <PrintCard
                    image='https://i.imgur.com/PGHo6cm.jpg'
                    title='"Madame Firefly"'
                    price='Price: "Priceless"'
                />
                <PrintCard
                    image='https://i.imgur.com/njYRm0h.jpg'
                    title='"Betty White"'
                    price='Price: "$1,000,000"'
                />
                <PrintCard
                    image='https://i.imgur.com/c8dELGC.jpg'
                    title='"Otis Driftwood"'
                    price='Price: "Your Soul"'
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