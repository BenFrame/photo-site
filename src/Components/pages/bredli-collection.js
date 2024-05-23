import ablogo from '../photos/ablogo.181d0c94.png'
import SpeciesCard from '../species-card'
import { Link } from 'react-router-dom'

export const BredliCollection = () =>(
  <div>
    <header className="App-header-inner">

      <img  src={ablogo} className="App-logo-inner" alt="logo"/>

    <div className="Header">
      <h1 >OUR CARPET PYTHON COLLECTION</h1>
    </div>
      <nav>
        <a href='/main'>Home</a>
        <a className="Link-active" href='/collection'>Collection</a>
        <a href='/AnimalsforSale'>Animals For Sale</a>
        <a href='/prints'>Prints</a>

      </nav>
    </header>
    <section className='Card-section'>
      <SpeciesCard/>
    </section>
      <footer className = "Footer">
        <div>
          <Link to="/main" >BACK</Link>
        </div>
      </footer>
  </div>
)