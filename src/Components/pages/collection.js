import ablogo from '../photos/ablogo.181d0c94.png'
import { Link } from 'react-router-dom';
import '../../App.css';

export const Collection = () =>{
    return (
        <div >
            <header className="App-header-inner">
                
                <div className="Header">
                    <h1 >COLLECTION</h1>
                </div>
                    <nav>
                        <a href='/main'>Home</a>
                        <a className="Link-active" href='/collection'>Collection</a>
                        <a href='/AnimalsforSale'>Animals For Sale</a>
                        <a href='/prints'>Prints</a>

                    </nav>
            </header>
            <body className='Body-plain'>

            </body>
            <footer className = "Footer">
                <div>

                <img  src={ablogo} className="App-logo-inner" alt="logo"/>
                <Link to="/main" >BACK</Link>

                </div>
            </footer>
        </div>
    )
}