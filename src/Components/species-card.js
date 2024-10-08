import React from "react"
import { Link } from "react-router-dom"

function SpeciesCard(props) {

  if ( props.isSingleAnimal ) {
    return (<><div>component...</div></>)
  }

    return <Link className="Species-card" to={props.linkPath}>
    <img src={ props.url } alt='img'/>
        <div className="Card-Text">
          <h2> { props.commonName } </h2>
          <p> { props.scientificName } </p> 
        </div>
 
  </Link>
}

export default SpeciesCard