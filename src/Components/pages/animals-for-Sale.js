import ablogo from '../photos/ablogo.181d0c94.png'
import { Link } from 'react-router-dom';
import '../../App.css';

export const AnimalsForSale = () =>{
    return (
        <div >
            <header className="App-header-inner">
                
                <img  src={ablogo} className="App-logo-inner" alt="logo"/>
                
                <div className="Header">
                    <h1 >Animals For Sale</h1>
                </div>
                    <nav>
                        <a href='/main'>Home</a>
                        <a href='/collection'>Collection</a>
                        <a className="Link-active" href='/AnimalsforSale'>Animals For Sale</a>
                        <a href='/prints'>Prints</a>

                    </nav>
            </header>
            <body className='Body-plain'>

            </body>
            <footer className = "Footer">
                <div>

                <Link to="/main" >BACK</Link>

                </div>
            </footer>
        </div>
    )
}